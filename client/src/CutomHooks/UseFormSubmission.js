import { useNavigate } from "react-router-dom";
import { useAuth } from "../State/AuthProvider"; // Import your auth context
import  MessageHandler  from "../Component/Notification";

const useFormSubmission = () => {
    const navigate = useNavigate();
    const { createData } = useAuth();

    const handleSubmit = async (entity, payload) => {
        try {
            const { success, result, message } = await createData({
                entity,
                payload,
            });
            if (success) {
                navigate(`/${entity}`);
                return MessageHandler.success(message);
            } else {
                return MessageHandler.error(message);
            }
        } catch (error) {
            return MessageHandler.error(
                "An error occurred while submitting the form"
            );
        }
    };

    return handleSubmit;
};

export default useFormSubmission;
