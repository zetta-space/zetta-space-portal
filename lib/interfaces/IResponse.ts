export default interface IResponse {
    success: boolean;
    message: string;
    data?: any
    httpResponse?: number
}