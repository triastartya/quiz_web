import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable, catchError } from 'rxjs';
import { DataDiri } from '../model/datadiri.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataDiriService {

  constructor(private httpOperationService: HttpRequestService) { }

  onPostdataDiri(data: DataDiri.SaveDataDiri): Observable<any> {
    return this.httpOperationService.postRequest(`${environment.api}/child/`, data)
  }
}
