import { ApiResponse } from './api';
import { UserTheme } from './config';
import { IgnoreResponse } from './ignores';

/****************************************************************************************
 * User Types
 ****************************************************************************************/

export type GeneralUser = {
    membershipId: number; // int64
    uniqueName: string;
    normalizedName: string;
    displayName: string;
    profilePicture: number; // int32
    profileTheme: number; // int32
    userTitle: number; // int32
    successMessageFlags: number; // int64
    isDeleted: boolean;
    about: string;
    firstAccess: string | null; // date-time, nullable
    lastUpdate: string | null; // date-time, nullable
    legacyPortalUID: number | null; // int64, nullable
    context: UserToUserContext;
    psnDisplayName: string;
    xboxDisplayName: string;
    fbDisplayName: string;
    showActivity: boolean | null; // nullable
    locale: string;
    localeInheritDefault: boolean;
    lastBanReportId: number | null; // int64, nullable
    showGroupMessaging: boolean;
    profilePicturePath: string;
    profilePictureWidePath: string;
    profileThemeName: string;
    userTitleDisplay: string;
    statusText: string;
    statusDate: string; // date-time
    profileBanExpire: string | null; // date-time, nullable
    blizzardDisplayName: string;
    steamDisplayName: string;
    stadiaDisplayName: string;
    twitchDisplayName: string;
    cachedBungieGlobalDisplayName: string;
    cachedBungieGlobalDisplayNameCode: number | null; // int16, nullable
    egsDisplayName: string;
};

export type UserToUserContext = {
    isFollowing: boolean;
    ignoreStatus: IgnoreResponse;
    globalIgnoreEndDate: string;
};

export type GetCredentialTypesForAccountResponse = {
    credentialType: number;
    credentialDisplayName: string;
    isPublic: boolean;
    credentialAsString: string;
};

export type HardLinkedUserMembership = {
    membershipType: number;
    membershipId: number;
    CrossSaveOverriddenType: number;
    CrossSaveOverriddenMembershipId: number;
};

export type UserSearchResponse = {
    searchResults: UserSearchResponseDetail[];
    page: number;
    hasMore: boolean;
};

export type UserSearchResponseDetail = {
    bungieGlobalDisplayName: string;
    bungieGlobalDisplayNameCode: number;
    bungieNetMembershipId: number;
    destinyMemberships: UserInfoCard[];
};

export type UserInfoCard = {
    supplementalDisplayName: string;
    iconPath: string;
    crossSaveOverride: number;
    applicableMembershipTypes: number[];
    isPublic: boolean;
    membershipType: number;
    membershipId: number;
    displayName: string;
    bungieGlobalDisplayName: string;
    bungieGlobalDisplayNameCode: number;
};

/****************************************************************************************
 * Response Type
 ****************************************************************************************/

export type GetBungieNetUserByIdResponseType = ApiResponse<
    GeneralUser,
    Record<string, string>
>;

export type GetSanitizedPlatformDisplayNameResponseType = ApiResponse<
    Record<string, string>,
    Record<string, string>
>;

export type GetCredentialTypesForAccountResponseType = ApiResponse<
    GetCredentialTypesForAccountResponse[],
    Record<string, string>
>;

export type GetAvailableThemesResponseType = ApiResponse<
    UserTheme[],
    Record<string, string>
>;

export type GetMembershipFromHardLinkedCredentialResponseType = ApiResponse<
    HardLinkedUserMembership,
    Record<string, string>
>;

export type SearchByGlobalNamePostResponseType = ApiResponse<
    UserSearchResponse,
    Record<string, string>
>;

/****************************************************************************************
 * Request Body Type
 ****************************************************************************************/

export type SearchByGlobalNamePostRequestType = {
    displayNamePrefix: string;
};
