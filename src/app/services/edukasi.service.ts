import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { EdukasiModel } from '../model/edukasi.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class EdukasiService {

    constructor(
        private httpOperationService: HttpRequestService
    ) { }

    onGetAllEdukasi(): Observable<EdukasiModel.GetEdukasi> {
        return this.httpOperationService.getRequest(`${environment.api}/edukasi`);
    }
}
