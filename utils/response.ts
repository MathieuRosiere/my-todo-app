export type ResponseSuccess<TData> = {
    success: true;
    data: TData;
};

export type ResponseError = {
    success: false;
    error: string;
};

export const response = {
    success<TData>(data: TData): ResponseSuccess<TData> {
        return {
            success: true,
            data,
        };
    },
    error(error: string): ResponseError {
        return {
            success: false,
            error,
        };
    },
};
