enum Env {
    local, staging, staginglocal
}

interface Config {
    identity: IdentityConfig;
    apiBaseUrl: string;
    appBaseUrl: string;
    enableIdentityServer: boolean;
};

interface IdentityConfig {
    authority: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    postLogoutRedirectUri: string
}