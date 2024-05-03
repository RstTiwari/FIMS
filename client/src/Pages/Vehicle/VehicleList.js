import PageHeader from "Component/PageHeader";
import { Table } from "antd";
import React from "react";
import useTableData from "CutomHooks/UseTableData";

const VehicleList = () => {
    const { loading,total,tableData, pagination, filters,handleTableChange  } = useTableData("crew");
  
    return (
        <div style={{width:"80vw"}}>
            <PageHeader
                title={"list of Vehicle"}
                subTitle={"add vehicle"}
                addRoute={"vehicle"}
            />
            <Table
                columns={[]}
                dataSource={tableData}
                bordered ={true}
                loading ={false}
                scroll={{
                    x:1200,
                }}
                onChange={handleTableChange}
                pagination= {{total:total,hideOnSinglePage:true}}
            />
        </div>
    );
};

export default VehicleList;
