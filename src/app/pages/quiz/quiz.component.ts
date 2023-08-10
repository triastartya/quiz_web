import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        private _router: Router,
        public _quizService: QuizService,
        private _messageService: MessageService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    data: QuizModel[] = [];
    jenis_question: number = 0;
    current_soal: number = 0;

    ngOnInit(): void {
        this.getAllQuiz();
    }

    getAllQuiz(): void {
        this._quizService.onGetAllQuiz().subscribe((result) => {
            this.data = result.data
            for (const idx_jenis_soal in this.data) {
                for (const idx_soal in this.data[idx_jenis_soal].soal) {
                    for (const idx_option in this.data[idx_jenis_soal].soal[idx_soal].options) {
                        this.data[idx_jenis_soal].soal[idx_soal].options[idx_option].jawaban = false
                    }
                }
            }
        })
    }

    submit() {
        let jawaban = this.data[this.jenis_question].soal[this.current_soal].options.find(x => x.jawaban == true)
        if (jawaban) {
            if (this.data[this.jenis_question].soal.length > (this.current_soal + 1)) {
                this.current_soal++;
            } else {
                if ((this.data.length - 1) == this.jenis_question) {
                    this.handleJawabanQuiz()
                } else {
                    this.jenis_question++;
                    this.current_soal = 0;
                }
            }
        } else {
            this._messageService.clear();
            this._messageService.add({ severity: 'error', summary: 'Oops', detail: 'Jawaban Belum Dipilih' });
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
        });


        this.data[this.jenis_question].soal[this.current_soal].answer = score
    }

    handleJawabanQuiz(): void {
        const payload = {
            id_child: this._activatedRoute.snapshot.params['id'],
            data: this.data,
        }

        this._quizService.onPostSave(payload)
            .subscribe((result) => {
                if (result.status) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Disimpan' });

                    setTimeout(() => {
                        this._router.navigateByUrl(`raport/${result.data.id}`);
                    }, 1000);
                }
            })
    }

    lihat() {
        console.log(this.data);
    }

}
