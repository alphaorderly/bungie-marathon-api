type ApiResponse<Response, Message> = {
    Response: Response;
    ErrorCode: number;
    ThrottleSeconds: number;
    ErrorStatus: string;
    Message: string;
    MessageData: Message;
    DetailedErrorTrace: string;
};

export type { ApiResponse };
