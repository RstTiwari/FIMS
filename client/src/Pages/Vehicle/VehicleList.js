import PageHeader from "Component/PageHeader";
import { Table } from "antd";
import React from "react";
import useTableData from "CutomHooks/UseTableData";
import vehicleTableColumns from "Data/Table/Vehicle";

const VehicleList = () => {
    const {
        loading,
        total,
        tableData,
        pagination,
        filters,
        handleTableChange,
    } = useTableData("vehicle");

    return (
        <div style={{ width: "80vw" }}>
            <PageHeader
                title={"list of Vehicle"}
                subTitle={"add vehicle"}
                addRoute={"vehicle"}
            />
            <Table
                columns={vehicleTableColumns}
                dataSource={tableData}
                bordered={true}
                loading={loading}
                onChange={handleTableChange}
                pagination={{ total: total, hideOnSinglePage: true }}
            />
        </div>
    );
};

export default VehicleList;
