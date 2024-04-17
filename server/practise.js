currentAddress:[
    {
        addressLine1:{   
            label: "ADDRESSLINE 1 ",
            type: "input",
            rules: [
                { required: true, message: "Please input your ADDRESSLINE 1  " },
            ],
        },
    },
    {addressLine2:{
        label: "ADDRESSLINE 2",
        type: "input",
        rules: [{ required: true, message: "Please input your ADDRESSLINE2 " }],
    }
     
    },
    {
        addressLine3:{
            label: "ADDRESSLINE 3",
            type: "input",
            rules: [{ required: true, message: "Please input your ADDRESSLINE3 " }],
        }
       
    },
    {landmark:{
        label: "LANDMARK",
        type: "input",
    }
        
    },
    {
        city:{
            name: ["permanentAddress", "city"],
        label: "CITY",
        type: "select",
        rules: [{ required: true, message: "Please input your CITY " }],

        } 
    },
    {state:{
        label: "STATE",
        type: "select",
        rules: [{ required: true, message: "Please input your STATE " }],
    }
       
    },

    {country:{
        label: "COUNTRY",
        type: "select",
        rules: [{ required: true, message: "Please input your COUNTRY " }],
    }
    },
    {pincode:{
        name: ["permanentAddress", "pincode"],
        label: "PINCODE",
        type: "input",
        rules: [{ required: true, message: "Please input your PINCODE " }],
    }
        
    },
]  