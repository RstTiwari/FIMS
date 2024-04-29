import { Table } from "antd";


import PageHeader from "Component/PageHeader";
import React from "react";
import useTableData from "CutomHooks/UseTableData";
import crewTableColumns from "Data/Table/Crew";
const CrewList = () => {
    const {
        loading,
        total,
        tableData,
        pagination,
        filters,
        handleTableChange,
    } = useTableData("crew");

    return (
        <div style={{width:"80vw"}}>
            <PageHeader
                title={"LIST OF CREW"}
                subTitle={"ADD CREW"}
                addRoute={"crew"}
            />
            <Table
                columns={crewTableColumns}
                size="small"
                dataSource={tableData}
                bordered={true}
                loading={loading}
                onChange={handleTableChange}
                pagination={{ total: total, hideOnSinglePage: true }}
            />
        </div>
    );
};

export default CrewList;
