import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

    public signOut() {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    }

    public saveToken(token: string, is_save: boolean) {
        if (is_save) {
            window.localStorage.removeItem(TOKEN_KEY);
            window.localStorage.setItem(TOKEN_KEY, token);
        } else {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem('TOKEN_KEY', token);
        }
    }

    static get token(): string {
        return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem('TOKEN_KEY');
    }

    public exists(): boolean {
        return !!TokenStorage.token;
    }
}
