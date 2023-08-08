import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { BayiModel } from '../model/bayi.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class BayiService {

    constructor(
        private _httpOperationService: HttpRequestService,
    ) { }

    onGetBayiByIdPosyandu(id_posyandu: number): Observable<BayiModel.GetBayi> {
        return this._httpOperationService.getRequest(`${environment.api}/getBayiByIdPosyandu/${id_posyandu}`);
    }

    onPostSaveBayi(body: BayiModel.SaveBayi): Observable<any> {
        return this._httpOperationService.postRequest(`${environment.api}/bayi`, body);
    }

    onCalculateAge(birthDate: Date): any {
        moment.locale('id');
        const age = moment().diff(birthDate, 'month');
        return age;
    }

}
