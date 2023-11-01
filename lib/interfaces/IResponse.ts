export default interface IResponse {
    success: boolean;
    message: string;
    data?: any,
    error?: unknown | string,
    httpResponse?: number
}