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
    membershipId: string,
): Promise<ApiResponse<GeneralUser, Record<string, string>>> => {
    const response: KyResponse<
        ApiResponse<GeneralUser, Record<string, string>>
    > = await kyInstance.get(`User/GetBungieNetUserById/${membershipId}`);

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            'Failed to get Bungie.net user by ID',
            response.status,
        );
    }

    return data;
};

const getSanitizedPlatformDisplayNames = async (
    membershipId: string,
): Promise<ApiResponse<Record<string, string>, Record<string, string>>> => {
    const response: KyResponse<
        ApiResponse<Record<string, string>, Record<string, string>>
    > = await kyInstance.get(
        `User/GetSanitizedPlatformDisplayNames/${membershipId}`);

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            'Failed to get sanitized platform display names',
            response.status,
        );
    }

    return data;
};

const getCredentialTypesForTargetAccount = async (
    membershipId: string,
): Promise<
    ApiResponse<GetCredentialTypesForAccountResponse[], Record<string, string>>
> => {
    const response: KyResponse<
        ApiResponse<
            GetCredentialTypesForAccountResponse[],
            Record<string, string>
        >
    > = await kyInstance.get(`User/GetCredentialTypesForTargetAccount/${membershipId}`);

    const data = await response.json();

    if (!response.ok) {
        throw new ApiException(
            'Failed to get credential types for target account',
            response.status,
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
            'Failed to get available themes',
            response.status,
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
