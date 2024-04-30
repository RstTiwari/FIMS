import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import { TableAction } from "Component/ActionTable";
import { Button, Input } from "antd";

const filterIcon = () => {
    return <FontAwesomeIcon icon={faSearch} />;
};

const partyTableColumns = [
    {
        title: "PARTY NAME",
        dataIndex: "partyName",
        // filters: [{ text: 'Option 1', value: 'Option 1' }], // Dummy filter option
        // filterIcon: filterIcon,
        // filterSearch: true,
        width: "20%",
        onFilter: (value, record) => {
            console.log(value, record, "value");
        },
    },
    {
        title: "PARTY TYPE",
        dataIndex: "partyType",
        // filters: [{}],
        // filterIcon: filterIcon,
        // filterSearch: true,
        // sorter: true,
        width: "20%",
    },
    {
        title: "FIRM TYPE",
        dataIndex: "firmType",
        width: "20%",
    },
    {
        title: "GST NO",
        dataIndex: "gstNo",
        width: "20%",
    },
    {
        title: "PAN NO",
        dataIndex: "panNo",
        width: "20%",
    },
    {
        title: "STATE",
        dataIndex: "state",
        width: "20%",
    },
    {
        title: "COUNTRY",
        dataIndex: "country",
        width: "20%",
    },
    {
        title: "MOBILE-1",
        dataIndex: "mobNumber1",
        width: "20%",
    },
    {
        title: "EMAIL-1",
        dataIndex: "emailId1",
        width: "20%",
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

export default partyTableColumns;
