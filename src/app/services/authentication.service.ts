import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../model/authentication.model';
import { environment } from 'src/environments/environment.prod';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private _router: Router,
        private _messageService: MessageService,
        private _httpRequestService: HttpRequestService,
    ) { }

    getUserData(): AuthenticationModel.ISignIn['data'] {
        return JSON.parse(localStorage.getItem('SGML_UD_') as any);
    }

    onLogin(email: string, password: string): void {
        this._httpRequestService.postRequest(`${environment.api}/login`, {
            email: email,
            password: password
        }).subscribe((result: AuthenticationModel.ISignIn) => {
            if (result.status) {
                this._messageService.clear();
                this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Sign In Berhasil' });

                setTimeout(() => {
                    this.handlingAuth(result);
                }, 1500);
            }
        });
    }

    onLogout(): void {
        this._httpRequestService.ToggleLoading.next(true);

        setTimeout(() => {
            this._httpRequestService.ToggleLoading.next(false);

            this._messageService.clear();
            this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Sign In Berhasil' });
            this._router.navigate(['']);
            localStorage.removeItem('SGML_UD_');
        }, 1200);
    }

    private handlingAuth(result: AuthenticationModel.ISignIn): void {
        localStorage.setItem('SGML_UD_', JSON.stringify(result.data));
        this._router.navigate(['/beranda']);
    }
}
