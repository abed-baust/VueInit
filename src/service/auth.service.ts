import { configuration } from '@/configurationProvider';
import { UserManager, WebStorageStateStore, User, UserManagerSettings } from 'oidc-client';

export default class AuthService {
    private userManager: UserManager;

    constructor(public extraQueryParams: Record<string, any> = {}) {
        const settings: UserManagerSettings = {
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            authority: configuration.identity.authority,
            client_id: configuration.identity.clientId,
            client_secret: configuration.identity.clientSecret,
            redirect_uri: configuration.identity.redirectUri,
            automaticSilentRenew: true,
            response_type: 'code',
            scope: 'openid profile offline_access',
            post_logout_redirect_uri: configuration.identity.postLogoutRedirectUri,
            filterProtocolClaims: true,
            extraQueryParams: extraQueryParams
        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public getManager(): UserManager {
        return this.userManager;
    }

    public async login() {
        const response = await this.userManager.signinRedirect();
        return response;
    }

    public logout() {
        this.userManager.signoutRedirect();
    }

    public async getAccessToken() {
        const asyncToken = await this.userManager.getUser();
        return asyncToken?.access_token;
    }
}

export const auth = new AuthService();
