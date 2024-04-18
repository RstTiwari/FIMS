import { Result, Button, Row } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound({ entity = "" }) {
    const navigate = useNavigate();

    return (
        <Row justify={"center"}>
            <Result
                status="404"
                title={"error_404"}
                subTitle="Sorry the Page you requested does not exist"
                style={{ backgroundColor: "white", width: "80vw" }}
                extra={
                    <Button
                        type="primary"
                        onClick={() => {
                            window.location.replace("/")
                        }}
                    >
                        {"Back"}
                    </Button>
                }
            />
        </Row>
    );
}
