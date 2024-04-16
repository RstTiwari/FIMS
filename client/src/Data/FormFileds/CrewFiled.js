const CrewFormFiled = [
    {
        name: "crewType",
        label: "CREW TYPE",
        type: "select",
        rules: [{ required: true, message: "Please input your CREW TYPE " }],
    },
    {
        name: "designation",
        label: "DESIGNATION",
        type: "select",
        rules: [{ required: true, message: "Please input your DESIGNATION " }],
    },
    {
        name: "name",
        label: "NAME",
        type: "input",
        rules: [{ required: true, message: "Please input your NAME " }],
    },
    {
        name: "nickName",
        label: "NICK NAME",
        type: "input",
    },
    {
        name: "gender",
        label: "GENDER",
        type: "select",
    },
    {
        name: "dob",
        label: "DATE OF BIRTH",
        type: "input",
    },
    { name: "firmName", label: "FIRM NAME", type: "input" },
    {
        name: ["permanentAddress", "addressLine1"],
        label: "ADDRESSLINE 1 ",
        type: "input",
        rules: [
            { required: true, message: "Please input your ADDRESSLINE 1  " },
        ],
    },
    {
        name: ["permanentAddress", "addressLine2"],
        label: "ADDRESSLINE 2",
        type: "input",
        rules: [{ required: true, message: "Please input your ADDRESSLINE2 " }],
    },
    {
        name: ["permanentAddress", "addressLine3"],
        label: "ADDRESSLINE 3",
        type: "input",
        rules: [{ required: true, message: "Please input your ADDRESSLINE3 " }],
    },
    {
        name: ["permanentAddress", "landmark"],
        label: "LANDMARK",
        type: "input",
    },
    {
        name: ["permanentAddress", "city"],
        label: "CITY",
        type: "select",
        rules: [{ required: true, message: "Please input your CITY " }],
    },
    {
        name: ["permanentAddress", "state"],
        label: "STATE",
        type: "select",
        rules: [{ required: true, message: "Please input your STATE " }],
    },
    {
        name: ["permanentAddress", "country"],
        label: "COUNTRY",
        type: "select",
        rules: [{ required: true, message: "Please input your COUNTRY " }],
    },
    {
        name: ["permanentAddress", "pincode"],
        label: "PINCODE",
        type: "input",
        rules: [{ required: true, message: "Please input your PINCODE " }],
    },

    {
        name: "same",
        label: "PINCODE",
        type: "button",
    },
    {
        name: ["currentAddress", "addressLine1"],
        label: "ADDRESSLINE 1 ",
        type: "input",
        rules: [
            { required: true, message: "Please input your ADDRESSLINE 1  " },
        ],
    },
    {
        name: ["currentAddress", "addressLine2"],
        label: "ADDRESSLINE 2",
        type: "input",
        rules: [
            { required: true, message: "Please input your ADDRESSLINE 2 " },
        ],
    },
    {
        name: ["currentAddress", "addressLine3"],
        label: "ADDRESSLINE 3",
        type: "input",
        rules: [
            { required: true, message: "Please input your ADDRESSLINE 3 " },
        ],
    },
    {
        name: ["currentAddress", "landmark"],
        label: "LANDMARK",
        type: "input",
    },
    {
        name: ["currentAddress", "city"],
        label: "CITY",
        type: "select",
        rules: [{ required: true, message: "Please input your CITY " }],
    },
    {
        name: ["currentAddress", "state"],
        label: "STATE",
        type: "select",
        rules: [{ required: true, message: "Please input your STATE " }],
    },
    {
        name: ["currentAddress", "country"],
        label: "COUNTRY",
        type: "select",
        rules: [{ required: true, message: "Please input your COUNTRY " }],
    },
    {
        name: ["currentAddress", "pincode"],
        label: "PINCODE",
        type: "input",
        rules: [{ required: true, message: "Please input your PINCODE " }],
    },

    { name: "telPhone1", label: "TELEPHONE-1", type: "input" },
    { name: "telPhone2", label: "TELEPHONE-2", type: "input" },
    {
        name: "countryCode",
        label: "COUNTRY-CODE",
        type: "input",
        rules: [{ required: true, message: "Please input your COUNTRY-CODE " }],
    },
    {
        name: "mobNumber1",
        label: "MOBILE-1",
        type: "input",
        rules: [
            { required: true, message: "Please input your MOBILE-1!" },
            {
                pattern: /^\d{10}$/,
                message: "Mobile number must be 10 digits!",
            },
        ],
    },
    {
        name: "mobNumber2",
        label: "MOBILE-2",
        type: "input",
        rules: [
            { required: true, message: "Please input your MOBILE-2" },
            {
                pattern: /^\d{10}$/,
                message: "Mobile number must be 10 digits!",
            },
        ],
    },
    {
        name: "emailId1",
        label: "EMAILID",
        type: "input",
        rules: [
            { type: "email", message: "Please enter a valid email!" },
            { required: true, message: "Please input your EMAILID" },
        ],
    },
    {
        name: "website",
        label: "WEBSITE",
        type: "input",
    },
    {
        name: "memberOfUnion",
        label: "MEMBER OF UNION",
        type: "input",
    },
    {
        name: "memberShipType",
        label: "MEMBERSHIP TYPE",
        type: "select",
    },
    {
        name: "unionCardNo",
        label: "UNION CARD NO",
        type: "input",
        rules: [
            {
                require: true,
                message: "Pleae Input PANNO",
            },
        ],
    },
    {
        name: "memberShipValidUpto",
        label: "MEMBERSHIP VALID UPTO",
        type: "date",
    },
    {
        name: "drivingLicenceNo",
        label: "DRIVING LICENSE NO",
        type: "input",
    },
    {
        name: "drivingLicenceType",
        label: "DRIVING LICENSE TYPE",
        type: "input",
    },
    {
        name: "drvingLiceneValidUpto",
        label: "DRIVING LICENSE VALID UPTO",
        type: "date",
    },
    {
        name: "wages",
        label: "WAGES",
        type: "input",
    },
    {
        name: "aadharNo",
        label: "AADHAR NO",
        type: "input",
    },
    {
        name: "gstNo",
        label: "GST NO",
        type: "input",
        rules: [
            {
                pattern: /^\d{15}$/,
                message: "GSTNO number must be 15 digits!",
            },
            { required: true, message: "Please input GSTNO" },
        ],
    },
    {
        name: "panNo",
        label: "PAN NO",
        type: "input",
        rules: [
            {
                require: true,
                message: "Pleae Input PANNO",
            },
        ],
    },
    {
        name: "tanNo",
        label: "TAN NO",
        type: "input",
    },
    {
        name: "tinNo",
        label: "TIN NO",
        type: "input",
    },
];
export default CrewFormFiled;
