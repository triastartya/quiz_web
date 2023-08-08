import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

export const AuthGuard = () => {
    const authService = inject(AuthenticationService);

    const router = inject(Router);

    if (authService.getUserData()) {
        return true;
    }

    return router.navigate(['']);
}