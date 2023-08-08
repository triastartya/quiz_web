import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { IbuModel } from '../model/ibu.model';

@Injectable({
    providedIn: 'root'
})
export class IbuService {

    constructor(
        private httpOperationService: HttpRequestService
    ) { }

    onGetAllIbu(): Observable<IbuModel.GetIbu> {
        return this.httpOperationService.getRequest(`${environment.api}/ibu`);
    }

    onGetIbuByIdPosyandu(id_posyandu: number): Observable<IbuModel.GetIbu> {
        return this.httpOperationService.getRequest(`${environment.api}/getIbuByIdPosyandu/${id_posyandu}`);
    }

    onPostSaveIbu(body: IbuModel.SaveIbu): Observable<any> {
        return this.httpOperationService.postRequest(`${environment.api}/ibu`, body);
    }
}
