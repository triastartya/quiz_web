import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class RaportService {

    constructor(
        private _httpOperationService: HttpRequestService,
    ) { }

    getReport(id: number): Observable<any> {
        return this._httpOperationService.getRequest(`${environment.api}/getreport/${id}`)
    }
}
