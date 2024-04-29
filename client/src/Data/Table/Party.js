const partyTableColumns = [
    {
        title: "PARTY NAME",
        dataIndex: "partyName",
        sorter: true,
        filters:[
            {
                
            }
        ],
        width: "20%",
    },
    {
        title: "PARTY TYPE",
        dataIndex: "partyType",
        sorter: true,
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
        width:"20%"
    },
    {
        title: "STATE",
        dataIndex: "state",
        width:"20%"
    },
    {
        title: "COUNTRY",
        dataIndex: "country",
        width:"20%"
    },
    {
        title: "MOBILE-1",
        dataIndex: "mobNumber1",
        width:"20%"
    },
    {
        title: "EMAIL-1",
        dataIndex: "emailId1",
        width:"20%"
    },
];

export default partyTableColumns;
