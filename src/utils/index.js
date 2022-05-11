

export const getHeaders = (requestUrl, headersObj = {}) => {
    const headers = {
        "content-type": "application/json",
        PLATFORM_CODE: "INTERNAL",
    };
    headers.agent = window.navigator.userAgent;
    headers["User-IP"] = sessionStorage.getItem("ipAddress");
    headers["User-ID"] = localStorage.getItem("userId");
    headers["Access-Token"] = localStorage.getItem("accessToken");
    if (headersObj && headersObj.externalUserAccountId) {
        headers["ExternalUser-ID"] = headersObj.externalUserAccountId;
    }
    if (headersObj && headersObj.externalUserAccount) {
        headers["ExternalUser-Account"] = headersObj.externalUserAccount;
    }

    return headers;
};





