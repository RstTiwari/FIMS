import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "State/AuthProvider";
const useTableData = (
    entity,
    defaultPagination = { pageNo: 0, limit: 10 },
    defaultFilters = {}
) => {
    const { readData } = useAuth();
    const [tableData, setTableData] = useState([]);
    const [pagination, setPagination] = useState(defaultPagination);
    const [filters, setFilters] = useState(defaultFilters);
    const [loading,setLoading] = useState(true)
    const [total,setTotal] = useState(0)
    const fetchData = async () => {
        const { success, result, message ,total} = await readData({
            ...pagination,
            entity: entity,
            filters: filters,
        });
        if (success) {
            setLoading(false)
            setTableData(result);
            setTotal(total)
        }
    };
    const handleTableChange = (newPagination, newFilters) => {
        console.log(newFilters,"--");
        setPagination({
            pageNo: newPagination.current - 1,
            limit: newPagination.pageSize,
        });
        setFilters(newFilters);
    };
    useEffect(() => {
        fetchData();
    }, [pagination, filters]);
    return {loading,total, tableData, pagination, filters, handleTableChange };
};

export default useTableData;
