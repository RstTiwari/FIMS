import PageHeader from "Component/PageHeader";
import partyTableColumns from "Data/Table/Party";
import { Table } from "antd";
import React from "react";
import useTableData from "CutomHooks/UseTableData";
import { YAxis } from "recharts";

const PartyList = () => {
    const { loading,total,tableData, pagination, filters,handleTableChange  } = useTableData("party");
  
    return (
        <div style={{width:"80vw"}}>
            <PageHeader
                title={"list of party"}
                subTitle={"add party"}
                addRoute={"party"}
            />
            <Table
                columns={partyTableColumns}
                dataSource={tableData}
                bordered ={true}
                loading ={loading}
                scroll={{
                    x:1200,
                }}
                onChange={handleTableChange}
                pagination= {{total:total,hideOnSinglePage:true}}
            />
        </div>
    );
};

export default PartyList;
