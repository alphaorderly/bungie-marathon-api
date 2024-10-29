import { KyResponse } from 'ky';
import { ApiResponse } from '../../types/api';
import {
    GeneralUser,
    GetCredentialTypesForAccountResponse,
} from '../../types/user';
import kyInstance from '../../utils/ky/kyInstance';
import { ApiException } from '../../exceptions/ApiException';
import { UserTheme } from 'types/config';

const getBungieNetUserById = async (
    apiKey: string,
    membershipId: string,
): Promise<ApiResponse<GeneralUser, Record<string, string>>> => {
    const response: KyResponse<
        ApiResponse<GeneralUser, Record<string, string>>
    > = await kyInstance.get(`User/GetBungieNetUserById/${membershipId}`, {
        headers: {
            'X-API-Key': apiKey,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            data.ErrorCode,
            data.ErrorStatus,
            'Failed to get Bungie.net user by ID',
            data.DetailedErrorTrace,
        );
    }

    return data;
};

const getSanitizedPlatformDisplayNames = async (
    apiKey: string,
    membershipId: string,
): Promise<ApiResponse<Record<string, string>, Record<string, string>>> => {
    const response: KyResponse<
        ApiResponse<Record<string, string>, Record<string, string>>
    > = await kyInstance.get(
        `User/GetSanitizedPlatformDisplayNames/${membershipId}`,
        {
            headers: {
                'X-API-Key': apiKey,
            },
        },
    );

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            data.ErrorCode,
            data.ErrorStatus,
            'Failed to get sanitized platform display names',
            data.DetailedErrorTrace,
        );
    }

    return data;
};

const getCredentialTypesForTargetAccount = async (
    apiKey: string,
    accessToken: string,
    membershipId: string,
): Promise<
    ApiResponse<GetCredentialTypesForAccountResponse[], Record<string, string>>
> => {
    const response: KyResponse<
        ApiResponse<
            GetCredentialTypesForAccountResponse[],
            Record<string, string>
        >
    > = await kyInstance.get(
        `User/GetCredentialTypesForTargetAccount/${membershipId}`,
        {
            headers: {
                'X-API-Key': apiKey,
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            data.ErrorCode,
            data.ErrorStatus,
            'Failed to get credential types for target account',
            data.DetailedErrorTrace,
        );
    }

    return data;
};

const getAvailableThemes = async (): Promise<
    ApiResponse<UserTheme[], Record<string, string>>
> => {
    const response: KyResponse<
        ApiResponse<UserTheme[], Record<string, string>>
    > = await kyInstance.get('User/GetAvailableThemes');

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            data.ErrorCode,
            data.ErrorStatus,
            'Failed to get available themes',
            data.DetailedErrorTrace,
        );
    }

    return data;
};

export {
    getBungieNetUserById,
    getSanitizedPlatformDisplayNames,
    getCredentialTypesForTargetAccount,
    getAvailableThemes,
};
