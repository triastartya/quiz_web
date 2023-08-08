import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

    Form: FormGroup;

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _authenticationService: AuthenticationService,
    ) {
        this.Form = this._formBuilder.group({
            email: ['', []],
            password: ['', []]
        });
    }

    onSignIn(data: any): void {
        this._authenticationService.onLogin(data.email, data.password);
    }

    onNavigateToHitungStunting(): void {
        this._router.navigate(['hitung-stunting'])
    }

    get email(): AbstractControl { return this.Form.get('email') as AbstractControl }
    get password(): AbstractControl { return this.Form.get('password') as AbstractControl }
}
