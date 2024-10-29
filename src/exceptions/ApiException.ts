class ApiException extends Error {
    public httpStatusCode: number;

    constructor(message: string, httpStatusCode: number) {
        super(message);
        this.httpStatusCode = httpStatusCode;
    }

    /**
     * Returns a string representation of the error information.
     * @returns A string containing error details.
     */
    toString(): string {
        return `ApiException: ${this.message} (HTTP Status Code: ${this.httpStatusCode})`;
    }
}

export { ApiException };
