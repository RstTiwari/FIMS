import addressFields from "./Address.js";

const PartyFormFileds = [
    {
        name: "partyType",
        label: "PARTY TYPE",
        type: "select",
        rules: [{ required: true, message: "Please input your PARTY TYPE " }],
    },
    {
        name: "firmType",
        label: "FIRM TYPE",
        type: "select",
        rules: [{ required: true, message: "Please input your FIRM TYPE " }],
    },
    {
        name: "partyName",
        label: "PARTY NAME",
        type: "input",
        rules: [{ required: true, message: "Please input your COUNTRY-CODE " }],
    },
    {
        name: "address",
        label: "Address",
        type: "subchild",
        subchild: addressFields,
    },
    { name: "stdCode", label: "STD-CODE", type: "input" },
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
        label: "EMAILID-1",
        type: "input",
        rules: [
            { type: "email", message: "Please enter a valid email!" },
            { required: true, message: "Please input your EMAILID-1" },
        ],
    },
    {
        name: "emailId2",
        label: "EMAILID-2",
        type: "input",
        rules: [
            { type: "email", message: "Please enter a valid email!" },
            { required: true, message: "Please input your EMAILID-1" },
        ],
    },
    {
        name: "website",
        label: "WEBSITE",
        type: "input",
    },
    {
        name: "gstType",
        label: "GST-TYPE",
        type: "input",
    },
    {
        name: "gstNo",
        label: "GSTNO",
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
        label: "PANNO",
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
        label: "TANNO",
        type: "input",
    },
    {
        name: "tinNo",
        label: "TINNO",
        type: "input",
    },
];
export default PartyFormFileds;
