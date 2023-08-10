import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { PayloadQuizModel } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private httpOperationService: HttpRequestService
  ) { }

  onGetAllQuiz(): Observable<PayloadQuizModel> {
    return this.httpOperationService.getRequest(`${environment.api}quizall`);
  }

  onPostSave(body:any): Observable<any> {
    return this.httpOperationService.postRequest(`${environment.api}/quiz`, body);
  }

}
