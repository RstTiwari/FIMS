import React, { useEffect, useState } from "react";
import { Select, Spin, Button, Divider, Modal, Input, Row } from "antd";

import { useAuth } from "State/AuthProvider";
import PageLoader from "./PageLoader";

const CustomSelect = ({ entity, onChange, defaultSelect,form }) => {
    const { getDropDownData, addNewDropDownData } = useAuth();
    const [options, setOptions] = useState([]);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // for Loader
    const [addValue, setaddValue] = useState("");
    const [selected, SetSelected] = useState(defaultSelect);

    useEffect(() => {
        handleClick();
    }, [selected,form]);

    const handleClick = async () => {
        setIsLoading(true);
        const response = await getDropDownData(entity);
        setOptions(response);
    };

    const handleChange = (value, label) => {
        onChange(value);
        SetSelected(value);
    };
    const addNewOption = async () => {
        const payload = {
            entity: entity,
            data: [
                {
                    label: addValue,
                    value: addValue,
                },
            ],
        };
        const response = await addNewDropDownData(payload);
        if (response.success) {
            handleClick();
            SetSelected(addValue.toLowerCase());
            onChange(addValue.toLowerCase());
            setOpen(false);
        }
    };

    return (
        <>
            {!open ? (
                <Select
                    defaultValue={selected ? selected : ""}
                    options={options}
                    onClick={handleClick}
                    onChange={handleChange}
                    notFoundContent={
                        isLoading ? (
                            <Spin
                                style={{ marginLeft: "50%" }}
                                spinning
                                size="small"
                            />
                        ) : null
                    }
                    dropdownRender={(menu) => {
                        return (
                            <div>
                                {menu}

                                <>
                                    <Divider />
                                    <Button
                                        type="primary"
                                        style={{
                                            margin: "0.1rem",
                                        }}
                                        onClick={() => setOpen(!open)}
                                    >
                                        Add New
                                    </Button>
                                </>
                            </div>
                        );
                    }}
                />
            ) : (
                <Modal
                    title={<h4> ADD NEW {entity.toUpperCase()}</h4>}
                    zIndex={1200}
                    open={open}
                    width={"40%"}
                    onCancel={() => setOpen(!open)}
                    maskClosable={true}
                    footer={null}
                    keyboard={false}
                >
                    <Row gutter={16}>
                        <Input
                            placeholder={`Enter new ${entity}`}
                            onChange={(e) => setaddValue(e.target.value)}
                        />
                    </Row>
                    <Button
                        type="primary"
                        style={{ marginTop: "1rem" }}
                        onClick={addNewOption}
                    >
                        SAVE
                    </Button>
                </Modal>
            )}
        </>
    );
};

export default CustomSelect;
