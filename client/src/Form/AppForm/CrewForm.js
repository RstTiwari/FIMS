import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Checkbox, DatePicker, Divider } from "antd";
import CrewFormFiled from "../../Data/FormFileds/CrewFiled";
import CustomSelect from "Component/CustomSelect";
import SaveButton from "Component/SaveButton";

const CrewForm = () => {
    const [form] = Form.useForm();

    const [initialValue, setInitialValue] = useState({
        crewType: "EMPLOYED",
        designation: "GAFFER",
        permanetAddress: {
            state: "bihar",
            country: "india",
        },
    });

    const handleFormFinish = (value) => {
        console.log("Form Values:", value);
    };

    const handleValueChange = (changedValues, allValues) => {
        console.log("Changed Values:", changedValues);
        console.log("All Values:", allValues);
        setInitialValue({ ...initialValue, changedValues: changedValues });
    };

    const copyAddress = (target) => {
        const checked = target.target.checked;
        const formData = form.getFieldsValue();
        if (checked) {
            form.setFieldsValue({ currentAddress: formData.permanetAddress });
        } else {
            form.setFieldsValue({ currentAddress: {} });
        }
    };
    useEffect(()=>{

    },[copyAddress])
    return (
        <Form
            form={form}
            onFinish={handleFormFinish}
            layout="horizontal"
            style={{ marginBottom: "5vh" }}
        >
            <Row style={{ width: "70vw" }} gutter={16}>
                {Object.keys(CrewFormFiled).map((key) => {
                    const value = CrewFormFiled[key];
                    if (!Array.isArray(value)) {
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
                                        />
                                    ) : value.type === "date" ? (
                                        <DatePicker />
                                    ) : value.type === "input" ? (
                                        <Input />
                                    ) : null}
                                </Form.Item>
                            </Col>
                        );
                    } else {
                        return (
                            <>
                                <Col
                                    span={24}
                                    style={{
                                        fontSize: "1rem",
                                        backgroundColor: "skyblue",
                                        margin: "1rem",
                                    }}
                                >
                                    {`${key
                                        .split("A")[0]
                                        .toUpperCase()} ADDRESS`}
                                    {}
                                    {key === "currentAddress" ? (
                                        <Col span={24}>
                                            <Checkbox onChange={copyAddress} />{" "}
                                            <span style={{ color: "blue" }}>
                                                COPY PERMANET ADRESS
                                            </span>
                                        </Col>
                                    ) : null}
                                </Col>
                                {value.map((item, index) => (
                                    <React.Fragment key={`${key}-${index}`}>
                                        <Col span={24}>
                                            {Object.entries(item).map(
                                                ([subKey, subValue]) => (
                                                    <>
                                                        <Col key={subKey}>
                                                            <Form.Item
                                                                name={[
                                                                    key,
                                                                    subKey,
                                                                ]}
                                                                label={
                                                                    subValue.label
                                                                }
                                                                rules={
                                                                    subValue.rules
                                                                }
                                                                labelAlign="left"
                                                                labelCol={{
                                                                    span: 4,
                                                                }}
                                                            >
                                                                {subValue.type ===
                                                                "select" ? (
                                                                    <CustomSelect
                                                                        entity={`${subKey}`}
                                                                        onChange={(
                                                                            value
                                                                        ) =>
                                                                            handleValueChange(
                                                                                {
                                                                                    [`${key}.${subKey}`]:
                                                                                        value,
                                                                                },
                                                                                {
                                                                                    ...initialValue,
                                                                                    [key]: {
                                                                                        ...initialValue[
                                                                                            key
                                                                                        ],
                                                                                        [subKey]:
                                                                                            value,
                                                                                    },
                                                                                }
                                                                            )
                                                                        }
                                                                        defaultSelect={
                                                                            initialValue[
                                                                                key
                                                                            ] &&
                                                                            initialValue[
                                                                                key
                                                                            ][
                                                                                subKey
                                                                            ]
                                                                                ? initialValue[
                                                                                      key
                                                                                  ][
                                                                                      subKey
                                                                                  ]
                                                                                : undefined
                                                                        }
                                                                    />
                                                                ) : subValue.type ===
                                                                  "date" ? (
                                                                    <DatePicker
                                                                        format={
                                                                            "dd/mm/yyyy"
                                                                        }
                                                                    />
                                                                ) : subValue.type ===
                                                                  "input" ? (
                                                                    <Input />
                                                                ) : null}
                                                            </Form.Item>
                                                        </Col>
                                                    </>
                                                )
                                            )}
                                        </Col>
                                    </React.Fragment>
                                ))}
                                <Divider />

                            </>
                        );
                    }
                })}
            </Row>

            <SaveButton buttonText={"SAVE"} cancelRoute={"dashboard"} />
        </Form>
    );
};

export default CrewForm;
