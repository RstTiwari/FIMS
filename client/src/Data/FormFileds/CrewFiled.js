const CrewFormFiled = {
    crewType: {
        label: "CREW TYPE",
        type: "select",
        rules: [{ required: true, message: "Please input your CREW TYPE " }],
    },
    designation: {
        label: "DESIGNATION",
        type: "select",
        rules: [{ required: true, message: "Please input your DESIGNATION " }],
    },
    name: {
        label: "NAME",
        type: "input",
        rules: [{ required: true, message: "Please input your NAME " }],
    },
    nickName: {
        label: "NICK NAME",
        type: "input",
    },
    gender: {
        label: "GENDER",
        type: "select",
    },
    dob: {
        label: "DATE OF BIRTH",
        type: "date",
        format: "DD-MM-YYYY",
    },
    firmName: {
        name: "firmName",
        label: "FIRM NAME",
        type: "input",
        rules: [
            {
                required: true,
                message: "Please input your ADDRESSLINE 1  ",
            },
        ],
    },

    permanentAddress: [
        {
            addressLine1: {
                label: "ADDRESSLINE 1 ",
                type: "input",
                rules: [
                    {
                        required: true,
                        message: "Please input your ADDRESSLINE 1  ",
                    },
                ],
            },
        },
        {
            addressLine2: {
                label: "ADDRESSLINE 2",
                type: "input",
                rules: [
                    {
                        required: true,
                        message: "Please input your ADDRESSLINE2 ",
                    },
                ],
            },
        },
        {
            addressLine3: {
                label: "ADDRESSLINE 3",
                type: "input",
            },
        },
        {
            landmark: {
                label: "LANDMARK",
                type: "input",
            },
        },
        {
            city: {
                name: ["permanentAddress", "city"],
                label: "CITY",
                type: "input",
                rules: [{ required: true, message: "Please input your CITY " }],
            },
        },
        {
            state: {
                label: "STATE",
                type: "select",
                rules: [
                    { required: true, message: "Please input your STATE " },
                ],
            },
        },

        {
            country: {
                label: "COUNTRY",
                type: "select",
                rules: [
                    { required: true, message: "Please input your COUNTRY " },
                ],
            },
        },
        {
            pinCode: {
                name: ["permanentAddress", "pincode"],
                label: "PINCODE",
                type: "input",
                rules: [
                    { required: true, message: "Please input your PINCODE " },
                ],
            },
        },
    ],
    currentAddress: [
        {
            addressLine1: {
                label: "ADDRESSLINE 1 ",
                type: "input",
                rules: [
                    {
                        required: true,
                        message: "Please input your ADDRESSLINE 1  ",
                    },
                ],
            },
        },
        {
            addressLine2: {
                label: "ADDRESSLINE 2",
                type: "input",
                rules: [
                    {
                        required: true,
                        message: "Please input your ADDRESSLINE2 ",
                    },
                ],
            },
        },
        {
            addressLine3: {
                label: "ADDRESSLINE 3",
                type: "input",
            },
        },
        {
            landmark: {
                label: "LANDMARK",
                type: "input",
            },
        },
        {
            city: {
                name: ["permanentAddress", "city"],
                label: "CITY",
                type: "input",
                rules: [{ required: true, message: "Please input your CITY " }],
            },
        },
        {
            state: {
                label: "STATE",
                type: "select",
                rules: [
                    { required: true, message: "Please input your STATE " },
                ],
            },
        },

        {
            country: {
                label: "COUNTRY",
                type: "select",
                rules: [
                    { required: true, message: "Please input your COUNTRY " },
                ],
            },
        },
        {
            pinCode: {
                name: ["permanentAddress", "pincode"],
                label: "PINCODE",
                type: "input",
                rules: [
                    { required: true, message: "Please input your PINCODE " },
                ],
            },
        },
    ],
    telPhone1: {
        label: "TELEPHONE-1",
        type: "input",
    },
    telPhone2: {
        label: "TELEPHONE-2",
        type: "input",
    },
    countryCode: {
        label: "COUNTRY-CODE",
        type: "input",
        rules: [{ required: true, message: "Please input your COUNTRY-CODE " }],
    },

    mobNumber1: {
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
    mobNumber2: {
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
    emailId1: {
        label: "EMAILID",
        type: "input",
        rules: [
            { type: "email", message: "Please enter a valid email!" },
            { required: true, message: "Please input your EMAILID" },
        ],
    },
    website: {
        name: "website",
        label: "WEBSITE",
        type: "input",
    },
    memberOfUnion: {
        label: "MEMBER OF UNION",
        type: "input",
    },
    memberShipType: {
        label: "MEMBERSHIP TYPE",
        type: "select",
    },
    unionCardNo: {
        label: "UNION CARD NO",
        type: "input",
        rules: [
            {
                require: true,
                message: "Pleae Input PANNO",
            },
        ],
    },
    memberShipValidUpto: {
        label: "MEM* VALID UPTO",
        type: "date",
    },
    drivingLicenceNo: {
        label: "DRI* LICENSE NO",
        type: "input",
    },
    drivingLicenceType: {
        label: "DRI* LIC* TYPE",
        type: "input",
    },
    drvingLiceneValidUpto: {
        label: "DRI* LIC* VALID UPTO",
        type: "date",
    },
    wages: {
        label: "WAGES",
        type: "input",
    },
    aadharNo: {
        label: "AADHAR NO",
        type: "input",
    },
    gstNo: {
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
    panNo: {
        label: "PAN NO",
        type: "input",
        rules: [
            {
                require: true,
                message: "Pleae Input PANNO",
            },
        ],
    },
    tanNo: {
        label: "TAN NO",
        type: "input",
    },
    tinNo: {
        label: "TIN NO",
        type: "input",
    },
};
export default CrewFormFiled;
