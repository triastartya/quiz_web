import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { HitungStuntingModel } from '../model/hitung-stunting.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class HitungStuntingService {

    constructor(
        private httpOperationService: HttpRequestService,
    ) { }

    onPostSavePemeriksaan(body: HitungStuntingModel.SaveHitungStunting): Observable<HitungStuntingModel.GetHitungStunting> {
        return this.httpOperationService.postRequest(`${environment.api}/pemeriksaan`, body);
    }
}
