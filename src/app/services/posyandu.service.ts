import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PosyanduModel } from '../model/posyandu.model';
import { HttpRequestService } from './http-request.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class PosyanduService {

    constructor(
        private httpOperationService: HttpRequestService
    ) { }

    onGetAllPosyandu(): Observable<PosyanduModel.GetAllPosyandu> {
        return this.httpOperationService.getRequest(`${environment.api}/posyandu`)
    }
}
