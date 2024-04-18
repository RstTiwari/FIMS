import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Select, Button, DatePicker } from "antd";
import PartyFormFileds from "Data/FormFileds/PartyFiled.js";
import CustomSelect from "Component/CustomSelect";
import SaveButton from "Component/SaveButton";

const PartyForm = ({ onFormFinish ,partyData}) => {
    const [form] = Form.useForm();
    const [initialValue, setInitialValue] = useState(partyData ? partyData:"")

    useEffect(() => {
    }, [initialValue]);

    const handleFormFinish = (value) => {
         onFormFinish(value);
    };

    const handleValueChange = (changedValues, allValues) => {
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
                {PartyFormFileds.map((field) => (
                    <Col
                        span={field.type === "subchild" ? 24 : 12}
                        key={field.name}
                    >
                        <Form.Item
                            label={field.label}
                            name={field.name}
                            rules={field.rules}
                            labelAlign="left"
                            labelCol={{ span: 8 }}
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

export default PartyForm;
