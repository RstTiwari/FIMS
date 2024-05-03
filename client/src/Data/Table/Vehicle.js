import { TableAction } from "Component/ActionTable";

const vehicleTableColumns = [
    {
        title: "REGISTRATION NO",
        dataIndex: "registrationNo",
        width: "25%",
    },
    {
        title: "OWNER NAME",
        dataIndex: "ownerName",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        sorter: true,
        width: "20%",
    },
    {
        title: "PERMIT TYPE",
        dataIndex: "permitType",
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
        width: "20%",
    },
    {
        title: "VEHICLE TYPE",
        dataIndex: "vehicleType",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        width: "20%",
    },
    {
        title: "FIRM NAME",
        dataIndex: "firmName",
        render: (text) => {
            return <>{text.toUpperCase()}</>;
        },
        width: "20%",
    },
    {
        fixed: "right",
        render: (value) => {
            return (
                <>
                    <TableAction />
                </>
            );
        },
    },
];

export default vehicleTableColumns;
