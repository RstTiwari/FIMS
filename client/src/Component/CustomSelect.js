import React, { useState } from "react";
import { Select } from "antd";

import { useAuth } from "State/AuthProvider";

const CustomSelect = async({entity}) => {
    const {getDropDownData} = useAuth()
    const data = await getDropDownData(entity)
    const [options, setOptions] = useState([]);
    return <Select />;
};

export default CustomSelect;
