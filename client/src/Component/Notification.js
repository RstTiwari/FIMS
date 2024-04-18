import { notification, message } from "antd";

message.config({
    duration: 1,
    maxCount: 1,
    zIndex: 1000000000, // Set the desired z-index value
});

const MessageHandler = {
    success: (messageText) => {
        message.success(messageText);
    },
    error: (messageText) => {
        message.error(messageText);
    },
};

export default MessageHandler;
