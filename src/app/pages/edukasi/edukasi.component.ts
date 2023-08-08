import { Component, OnInit } from '@angular/core';
import { EdukasiModel } from 'src/app/model/edukasi.model';
import { EdukasiService } from 'src/app/services/edukasi.service';

@Component({
    selector: 'app-edukasi',
    templateUrl: './edukasi.component.html',
    styleUrls: ['./edukasi.component.scss']
})
export class EdukasiComponent implements OnInit {

    EdukasiDatasource: EdukasiModel.IEdukasi[] = [];

    constructor(
        private _edukasiService: EdukasiService
    ) { }

    ngOnInit(): void {
        this._edukasiService.onGetAllEdukasi()
            .subscribe((result) => {
                this.EdukasiDatasource = result.data;
            })
    }

    onDownloadFile(item: EdukasiModel.IEdukasi): void {
        window.open(item.path_pdf);
    }
}
