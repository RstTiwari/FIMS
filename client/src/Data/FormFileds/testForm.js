const testField = {
    crewType: {
        label: "CREW TYPE",
        type:"select",
        rules: [{ required: true, message: "Please input your CREW TYPE " }],
    },
    designation: {
        label: "DESIGNATION",
        type: "select",
        rules: [{ required: true, message: "Please input your DESIGNATION " }],
    },
    permanetAddress: [
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
                label: "ADDRESSLINE 2 ",
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
            state: {
                label: "ADDRESSLINE 3 ",
                type: "select",
                rules: [
                    {
                        required: true,
                        message: "Please input your ADDRESSLINE 1  ",
                    },
                ],
            },
        },
    ],
};


export default testField