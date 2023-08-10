import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaportService } from 'src/app/services/raport.service';

@Component({
    selector: 'app-raport',
    templateUrl: './raport.component.html',
    styleUrls: ['./raport.component.scss']
})
export class RaportComponent {

    constructor(
        private _raportService: RaportService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    getReport(): void {
        const id = this._activatedRoute.snapshot.params['id'];

        this._raportService.getReport(id)
            .subscribe((result) => {
                console.log(result);
            })
    }
}
