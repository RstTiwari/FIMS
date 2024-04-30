import { TableAction } from "Component/ActionTable";
const crewTableColumns = [
    {
        title: " NAME",
        dataIndex: "name",
        sorter: true,
        // filters: [{}],
        width: "25%",
    },
    {
        title: "CREW TYPE",
        dataIndex: "crewType",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        sorter: true,
        width: "20%",
    },
    {
        title: "FIRM NAME",
        dataIndex: "firmName",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        sorter: true,
        width: "20%",
    },
    {
        title: "DESGINATION",
        dataIndex: "designation",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        width: "20%",
    },
    {
        title: "NICK NAME",
        dataIndex: "nickName",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        width: "20%",
    },
    {
        title: "GENDER",
        dataIndex: "gender",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        width: "20%",
    },
    {
        title: "MOBILE-1",
        dataIndex: "mobNumber1",
        width: "20%",
    },
    {
        title: "COUNTRY",
        dataIndex: "country",
        width: "30%",
    },
    {
        width: 100,
        fixed:"right",
        render:(value)=>{
            return(
                <>
                <TableAction />
                </>
            )
        }
    },
   
];

export default crewTableColumns;
