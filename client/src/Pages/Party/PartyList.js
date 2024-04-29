import PageHeader from "Component/PageHeader";
import partyTableColumns from "Data/Table/Party";
import { Table } from "antd";
import React from "react";
import useTableData from "CutomHooks/UseTableData";
import { YAxis } from "recharts";

const PartyList = () => {
    const { loading,total,tableData, pagination, filters,handleTableChange  } = useTableData("party");
  
    return (
        <div>
            <PageHeader
                title={"list of party"}
                subTitle={"add party"}
                addRoute={"party"}
            />
            <Table
                columns={partyTableColumns}
                size="small"
                dataSource={tableData}
                bordered ={true}
                loading ={loading}
                onChange={handleTableChange}
                pagination= {{total:total,hideOnSinglePage:true}}
            />
        </div>
    );
};

export default PartyList;
