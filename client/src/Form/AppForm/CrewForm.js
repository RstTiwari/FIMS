import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Select, Button, DatePicker } from "antd";

import CustomSelect from "Component/CustomSelect";
import SaveButton from "Component/SaveButton";
import CrewFormFiled from "Data/FormFileds/CrewFiled";

const CrewForm = ({ field }) => {
    const [form] = Form.useForm();
    const [initialValue, setInitialValue] = useState({
        partyType: "Rohit",
        firmType: "NEW0",
        mobNumber1: 12345,
        address: {
            addressLine1: "theee LOvlkush kuamr vvlaue  ",
            addressLine2: "thee nEw Type",
            addressLine3: "let ttssso ds         jdsjjjejewj",
            landmark: "",
            city: "mumbai",
            state: "maharastra",
            country: "india",
            pinCode: "20039393",
        },
    });

    useEffect(() => {
        console.log("Initial Value:", initialValue);
    }, [initialValue]);

    const handleFormFinish = (value) => {
        console.log("Form Values:", value);
    };

    const handleValueChange = (changedValues, allValues) => {
        console.log("Changed Values:", changedValues);
        console.log("All Values:", allValues);
        setInitialValue(allValues);
    };

    return (
        <Form
            form={form}
            onFinish={handleFormFinish}
            initialValues={initialValue}
            onValuesChange={handleValueChange}
        >
            <Row gutter={16}>
                {CrewFormFiled.map((field) => (
                    <Col span={12} key={field.name}>
                        <Form.Item
                            label={field.label}
                            name={field.name}
                            rules={field.rules}
                            labelAlign="left"
                            labelCol={{ span: 6 }}
                        >
                            {field.type === "select" ? (
                                <CustomSelect
                                    entity={field.name}
                                    onChange={(value) =>
                                        handleValueChange(
                                            { [field.name]: value },
                                            {
                                                ...initialValue,
                                                [field.name]: value,
                                            }
                                        )
                                    }
                                    defaultSelect={initialValue[field.name]}
                                />
                            ) : field.type === "input" ? (
                                <Input />
                            ) : field.type === "date" ? (
                                <DatePicker />
                            ) : null}
                        </Form.Item>
                    </Col>
                ))}
            </Row>
            <SaveButton buttonText={"Save"} cancelRoute={"dashboard"} />
        </Form>
    );
};

export default CrewForm;
