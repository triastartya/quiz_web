import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/model/authentication.model';
import { PosyanduModel } from 'src/app/model/posyandu.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.scss']
})
export class BerandaComponent implements OnInit {

    UserData!: AuthenticationModel.ISignIn['data'];

    constructor(
        private _router: Router,
        private _authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.getUserData();
    }

    getUserData(): void {
        this.UserData = this._authenticationService.getUserData();
    }

    onNavigateTo(url: string): void {
        this._router.navigateByUrl(url);
    }
}
