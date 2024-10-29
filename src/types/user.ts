import { IgnoreResponse } from './ignores';

type GeneralUser = {
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

type UserToUserContext = {
    isFollowing: boolean;
    ignoreStatus: IgnoreResponse;
    globalIgnoreEndDate: string;
};

export type { GeneralUser, UserToUserContext };
