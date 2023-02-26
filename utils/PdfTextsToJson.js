function makeSplit(long_text = "", split1 = "", split2 = "") {
  return long_text?.split(split1)[1]?.split(split2)[0]?.trim();
}
function makeSplitReverse(long_text = "", split1 = "", split2 = "") {
  return long_text
    ?.split(split1)[0]
    ?.split(" ")
    .reverse()
    .join(" ")
    .trim()
    .split(split2)[0]
    .trim();
}

// method 1
function makeNidNo(data = "") {
  return data?.split(" ")[1];
}

function makeNidPin(data = "") {
  return data?.split(" ")[2];
}

function makeBngName(data = "") {
  return makeSplit(data, "Sl No", "Tag");
}

function makeEngName(data = "") {
  return makeSplit(data, "Tag", "Name");
}

function makeFatherName(data = "") {
  return makeSplit(data, "Place", "Voter");
}

function makeMotherName(data = "") {
  return makeSplit(data, "Other", "Birth");
}

function makeDOB(data = "") {
  return makeSplit(data, "(Bangla)", "Name");
}

function makeBirthPlace(data = "") {
  return makeSplit(data, "(English)", "Date");
}

function makeAddress(data = "") {
  let address = "";
  address += `বাসা/হোল্ডিং: , `;
  address += `গ্রাম/রাস্তা: ${makeSplit(data, "Porishod", "Postal")} `;
  address += `ডাকঘর: ${makeSplit(data, "Address Village/Road", "District")}, `;
  address += `-${makeSplit(data, "Home/Holding", "Union")}, `;
  address += `${makeSplit(data, "Or", "Disability")}, `;
  address += `${makeSplit(data, "District", "Marital")} `;
  return address?.trim();
}

const makeJson = (data) => {
  return {
    bangla_name: makeBngName(data),
    english_name: makeEngName(data),
    nid_no: makeNidNo(data),
    pin_no: makeNidPin(data),
    father_name: makeFatherName(data),
    mother_name: makeMotherName(data),
    birth_place: makeBirthPlace(data),
    dob: makeDOB(data),
    address: makeAddress(data),
  };
};

// method 2
function makeNidNo2(data = "") {
  return makeSplit(data, "ID", "Voter");
}

function makeNidPin2(data = "") {
  return makeSplit(data, "DocumentsPin", "Status");
}

function makeBngName2(data = "") {
  return makeSplit(data, "Name(Bangla)", "Name");
}

function makeEngName2(data = "") {
  return makeSplit(data, "(English)", "Date of");
}

function makeFatherName2(data = "") {
  return makeSplit(data, "Father Name", "Mother Name");
}

function makeMotherName2(data = "") {
  return makeSplit(data, "Mother Name", "Spouse");
}

function makeDOB2(data = "") {
  return makeSplit(data, "Date of Birth", "Birth Place ");
}

function makeBirthPlace2(data = "") {
  return makeSplit(data, "Birth Place", "Birth Other");
}

function makeAddress2(data = "") {
  let address = "";

  address += `বাসা/হোল্ডিং: ${makeSplit(
    data,
    "Home/Holding",
    "Village/Road"
  )}, `;

  address += `গ্রাম/রাস্তা: ${makeSplit(
    data,
    "Village/Road Porishod",
    "Additional"
  )}, `;

  address += `ডাকঘর: ${makeSplit(data, "City", "CorporationPermanent")}, `;
  address += `-${makeSplitReverse(data, "Post Office Postal Code", " ")}, `;
  address += `${makeBirthPlace2(data)}`;
  return address?.trim();
}

const makeJson2 = (data) => {
  return {
    bangla_name: makeBngName2(data),
    english_name: makeEngName2(data),
    nid_no: makeNidNo2(data),
    pin_no: makeNidPin2(data),
    father_name: makeFatherName2(data),
    mother_name: makeMotherName2(data),
    birth_place: makeBirthPlace2(data),
    dob: makeDOB2(data),
    address: makeAddress2(data),
  };
};

// method 3
function makeNidNo3(data = "") {
  return makeSplit(data, "National ID", "Pin");
}

function makeNidPin3(data = "") {
  return makeSplit(data, "Pin", "Status");
}

function makeBngName3(data = "") {
  return makeSplit(data, "Name(Bangla)", "Name");
}

function makeEngName3(data = "") {
  return makeSplit(data, "(English)", "Date of");
}

function makeFatherName3(data = "") {
  return makeSplit(data, "Registration", "Voter");
}

function makeMotherName3(data = "") {
  return makeSplit(data, "DocumentsNo", "Father Name");
}

function makeDOB3(data = "") {
  return makeSplit(data, "Date of Birth", "Birth Place ");
}

function makeBirthPlace3(data = "") {
  return makeSplit(data, "Birth Place", "Birth Other");
}

function makeAddress3(data = "") {
  let address = "";

  address += `বাসা/হোল্ডিং: ${makeSplit(data, "Home/Holding", "Porishod")}, `;

  address += `গ্রাম/রাস্তা: ${makeSplit(data, "Porishod", "No")}, `;

  address += `ডাকঘর: ${makeSplit(
    data,
    "Postal Code Village/Road",
    "Permanent"
  )}, `;
  address += `-${makeSplitReverse(data, "Additional Postal Code", " ")}, `;
  address += `${makeBirthPlace3(data)}`;
  return address?.trim();
}

const makeJson3 = (data) => {
  return {
    bangla_name: makeBngName3(data),
    english_name: makeEngName3(data),
    nid_no: makeNidNo3(data),
    pin_no: makeNidPin3(data),
    father_name: makeFatherName3(data),
    mother_name: makeMotherName3(data),
    birth_place: makeBirthPlace3(data),
    dob: makeDOB3(data),
    address: makeAddress3(data),
  };
};

export default function PdfTextsToJson(data = "") {
  const auto = () => {
    if (data?.toLowerCase().includes("search")) {
      return makeJson3(data);
    } else if (data?.toLowerCase().includes("voter form")) {
      return makeJson2(data);
    } else {
      return makeJson(data);
    }
  };

  return {
    auto: auto(),
    makeJson: makeJson(data),
    makeJson2: makeJson2(data),
    makeJson3: makeJson3(data),
  };
}
