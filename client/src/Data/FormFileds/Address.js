const addressFields = [
    {
        name: "addressLine1",
        label: "ADDRESS LINE 1",
        type: "input",
        rules: [{ required: true, message: "Please input your COUNTRY-CODE " }],
    },
    {
        name: "addressLine2",
        label: "ADDRESS LINE 2",
        type: "input",
        rules: [{ required: true, message: "Please input your COUNTRY-CODE " }],
    },
    {
        name: "addressLine3",
        label: "ADDRESS LINE 3",
        type: "input",
    },
    { name: "landmark", label: "LANDMARK", type: "input" },
    {
        name: "city",
        label: "CITY",
        type: "input",
        rules: [{ required: true, message: "Please input your CITY  " }],
    },
    {
        name: "state",
        label: "STATE",
        type: "select",
        rules: [{ required: true, message: "Please input your STATE " }],
    },
    {
        name: "country",
        label: "COUNTRY",
        type: "select",
        rules: [{ required: true, message: "Please input your COUNTRY " }],
    },
    {
        name: "pinCode",
        label: "PINCODE",
        type: "input",
        rules: [{ required: true, message: "Please input your PINCODE " }],
    },
];

export default addressFields;
