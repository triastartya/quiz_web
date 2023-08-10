import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaportService } from 'src/app/services/raport.service';

@Component({
    selector: 'app-raport',
    templateUrl: './raport.component.html',
    styleUrls: ['./raport.component.scss']
})
export class RaportComponent implements OnInit {

    ChildId: number = 0;

    Score: number = 0;

    Status: string = "";

    Result: any[] = [];

    constructor(
        private _router: Router,
        private _raportService: RaportService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.getReport();
    }

    getReport(): void {
        const id = this._activatedRoute.snapshot.params['id'];

        this._raportService.getReport(id)
            .subscribe((result) => {
                if (result.status) {
                    this.Result = result.data.quiz_submission;
                    this.ChildId = result.data.id_child;
                    this.Score = result.data.score;
                    this.Status = result.data.status == 'baik' ? 'text-green-500' : (result.data.status == 'cukup' ? 'text-orange-500' : 'text-red-500');
                }
            })
    }

    back(): void {
        this._router.navigateByUrl(`quiz/${this.ChildId}`)
    }
}
