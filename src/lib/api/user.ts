import { KyResponse } from 'ky';
import { ApiResponse } from '../../types/api';
import { GeneralUser } from '../../types/user';
import kyInstance from '../../utils/ky/kyInstance';
import ApiException from '../../exceptions/ApiException';

const getBungieNetUserById = async (
    membershipId: string,
): Promise<ApiResponse<GeneralUser, Record<string, string>>> => {
    const response: KyResponse<
        ApiResponse<GeneralUser, Record<string, string>>
    > = await kyInstance.get(`User/GetBungieNetUserById/${membershipId}`);

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

export { getBungieNetUserById };
