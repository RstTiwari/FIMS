import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Select, Button, DatePicker } from "antd";
import vehicleField from "Data/FormFileds/Vehicle";
import CustomSelect from "Component/CustomSelect";
import SaveButton from "Component/SaveButton";

const VehicleForm = ({ onFormFinish, vehicleData }) => {
    const [form] = Form.useForm();
    const [initialValue, setInitialValue] = useState(
        vehicleData ? vehicleData : ""
    );

    useEffect(() => {}, [initialValue]);

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
            layout="horizontal"
            style={{ marginBottom: "5vh" }}
            initialValues={initialValue}
        >
            <Row style={{ width: "70vw" }} gutter={16}>
                {Object.keys(vehicleField).map((key) => {
                    const value = vehicleField[key];

                    return (
                        <Col span={12} key={key}>
                            <Form.Item
                                name={key}
                                label={value.label}
                                rules={value.rules}
                                labelAlign="left"
                                labelCol={{ span: 8 }}
                            >
                                {value.type === "select" ? (
                                    <CustomSelect
                                        entity={key}
                                        onChange={(value) =>
                                            handleValueChange(
                                                { [key]: value },
                                                {
                                                    ...initialValue,
                                                    [key]: value,
                                                }
                                            )
                                        }
                                        defaultSelect={initialValue[key]}
                                        form={form}
                                    />
                                ) : value.type === "date" ? (
                                    <DatePicker format={"DD/MM/YYYY"} />
                                ) : value.type === "input" ? (
                                    <Input />
                                ) : null}
                            </Form.Item>
                        </Col>
                    );
                })}
            </Row>

            <SaveButton buttonText={"SAVE"} cancelRoute={"dashboard"} />
        </Form>
    );
};

export default VehicleForm;
