import React from "react";
import { Form, Row, Col, Input, Select, Button } from "antd";
import PartyFormFileds from "Data/Form/Party";
import CustomSelect from "Component/CustomSelect";
import SaveButton from "Component/SaveButton";

const PartyForm = () => {
    const handleFormFinsih =(value)=>{
        console.log(value);
    }
    const handleValueChange =(newValue,oldValue)=>{
        console.log(newValue,oldValue);
    }

    return (
        <>
            <Form onFinish={handleFormFinsih} onValuesChange={handleValueChange}>
                <Row gutter={16}>
                    {PartyFormFileds.map((field) => (
                        <Col span={12} key={field.name}>
                            <Form.Item
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                rules={field.rules}
                                labelAlign="left"
                                labelCol={{span:6}}
                                
                            >
                                {field.type === "select" ? (
                                    <CustomSelect  entity={field.name}  onChange={handleValueChange}/>
                                ) : (
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
                <SaveButton buttonText={"Save"}  cancelRoute={"dashboard"}/>
            </Form>
        </>
    );
};

export default PartyForm;
