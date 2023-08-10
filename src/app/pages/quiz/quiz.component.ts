import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { QuizModel } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(
    public _quizService: QuizService,
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute
  ) { }

  data: QuizModel[] = [];
  jenis_question: number = 0;
  current_soal: number = 0;

  Id: any = 0

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(param => {
      this.Id = param['id']
    })

    console.log('Id', this.Id);



    this._quizService.onGetAllQuiz().subscribe((result) => {
      this.data = result.data
      for (const idx_jenis_soal in this.data) {
        for (const idx_soal in this.data[idx_jenis_soal].soal) {
          for (const idx_option in this.data[idx_jenis_soal].soal[idx_soal].options) {
            this.data[idx_jenis_soal].soal[idx_soal].options[idx_option].jawaban = false
          }
        }
      }
      console.log(this.data)
    })
  }

  submit() {
    let jawaban = this.data[this.jenis_question].soal[this.current_soal].options.find(x => x.jawaban == true)
    if (jawaban) {
      if (this.data[this.jenis_question].soal.length > (this.current_soal + 1)) {
        this.current_soal++;
      } else {
        if ((this.data.length - 1) == this.jenis_question) {
          this.handleJawabanQuiz(16)
        } else {
          this.jenis_question++;
          this.current_soal = 0;
        }
      }
    } else {
      alert('isi jawaban terlebih dahulu')
    }
  }

  kembali() {
    if (this.jenis_question == 0 && this.current_soal == 0) {

    } else {
      if ((this.current_soal + 1) > 1) {
        this.current_soal--;
      } else {
        this.jenis_question--;
        this.current_soal = this.data[this.jenis_question].soal.length - 1;
      }
    }
  }

  handleChangeRadioButton(index: number, score: any) {
    this.data[this.jenis_question].soal[this.current_soal].options.map((e, idx) => {
      if (idx == index) {
        e.jawaban = true
      } else {
        e.jawaban = false
      }
    })
    this.data[this.jenis_question].soal[this.current_soal].answer = score
  }

  handleJawabanQuiz(id_child: number): void {
    this._quizService.onPostSave({
      'id_child': id_child,
      'data': this.data
    })
      .subscribe((result) => {
        if (result.status) {
          this._messageService.clear();
          this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Disimpan' });
        }
      })
  }

  lihat() {
    console.log(this.data);
  }

}
