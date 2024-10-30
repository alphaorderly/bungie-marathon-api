const getBungieNetUserById = (props: { membershipId: number }) => {
    return `User/GetBungieNetUserById/${props.membershipId}/`;
};

const getSanitizedPlatformDisplayNames = (props: { membershipId: number }) => {
    return `User/GetSanitizedPlatformDisplayNames/${props.membershipId}/`;
};

const getCredentialTypesForTargetAccount = (props: {
    membershipId: number;
}) => {
    return `User/GetCredentialTypesForTargetAccount/${props.membershipId}/`;
};

const getAvailableThemes = () => {
    return `User/GetAvailableThemes/`;
};

const getMembershipDataById = (props: {
    membershipId: number;
    membershipType: number;
}) => {
    return `User/GetMembershipsById/${props.membershipId}/${props.membershipType}/`;
};

const getMembershipDataForCurrentUser = () => {
    return `User/GetMembershipsForCurrentUser/`;
};

const getMembershipFromHardLinkedCredential = (props: {
    crType: string;
    credential: string;
}) => {
    return `User/GetMembershipFromHardLinkedCredential/${props.crType}/${props.credential}/`;
};

const searchByGlobalNamePost = (props: {
    displayName: string;
    page: number;
}) => {
    return `User/SearchUsers/`;
};

export {
    getBungieNetUserById,
    getSanitizedPlatformDisplayNames,
    getCredentialTypesForTargetAccount,
    getAvailableThemes,
    getMembershipDataById,
    getMembershipDataForCurrentUser,
    getMembershipFromHardLinkedCredential,
    searchByGlobalNamePost,
};
