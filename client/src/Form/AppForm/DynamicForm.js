import React from "react";
import { Form, Input, Select } from "antd";

const DynamicForm = ({ form, fields }) => {
  return (
    <Form form={form}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
        >
          {field.type === "input" ? (
            <Input />
          ) : field.type === "select" ? (
            <Select>
              {field.options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          ) : null}
        </Form.Item>
      ))}
    </Form>
  );
};

export default DynamicForm;
