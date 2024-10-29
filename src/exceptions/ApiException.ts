class ApiException extends Error {
    public errorCode: number;
    public errorStatus: string;
    public detailedErrorTrace: string;

    /**
     * Creates an API exception instance.
     * @param errorCode - The error code (int32)
     * @param errorStatus - The error status (string)
     * @param message - The error message (string)
     * @param detailedErrorTrace - Detailed error trace information (string)
     */
    constructor(
        errorCode: number,
        errorStatus: string,
        message: string,
        detailedErrorTrace: string = '',
    ) {
        super(message);
        this.name = 'ApiException';
        this.errorCode = errorCode;
        this.errorStatus = errorStatus;
        this.detailedErrorTrace = detailedErrorTrace;
    }

    /**
     * Returns a string representation of the error information.
     * @returns A string containing error details.
     */
    toString(): string {
        return `ApiException: ${this.errorStatus} - ${this.message} (Error Code: ${this.errorCode})\nTrace: ${this.detailedErrorTrace}`;
    }
}

export default ApiException;
