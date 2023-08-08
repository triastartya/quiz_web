import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    UserData = this._authenticationService.getUserData();

    IsBeranda: boolean = false;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.IsBeranda = this._activatedRoute.snapshot.url[0].path.includes('beranda');
    }

    onNavigateBack(): void {
        if (!this.IsBeranda) {
            this._router.navigateByUrl('beranda');
        }
    }

    onSignOut(): void {
        this._authenticationService.onLogout();
    }
}
