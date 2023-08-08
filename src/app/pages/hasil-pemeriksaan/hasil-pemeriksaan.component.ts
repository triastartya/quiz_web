import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-hasil-pemeriksaan',
    templateUrl: './hasil-pemeriksaan.component.html',
    styleUrls: ['./hasil-pemeriksaan.component.scss']
})
export class HasilPemeriksaanComponent {

    Form: FormGroup

    constructor(
        private _formBuilder: FormBuilder,
        private _authenticationService: AuthenticationService,
    ) {
        this.Form = this._formBuilder.group({
            tanggal: [null, []],
            bulan: [0, []],
            tahun: [0, []],
            id_posyandu: [this._authenticationService.getUserData().posyandu.id, []]
        })
    }

    handleChangeCalendar(args: any): void {
        this.bulan.setValue(formatDate(args, 'MM', 'EN'));
        this.tahun.setValue(formatDate(args, 'yyyy', 'EN'));
    }

    onDownloadReport(): void {
        const url = `${environment.report}/download_report_excel/${this.tahun.value}/${this.bulan.value}/${this.id_posyandu.value}`;
        window.open(url);
    }

    get tanggal(): AbstractControl { return this.Form.get('tanggal') as AbstractControl }
    get bulan(): AbstractControl { return this.Form.get('bulan') as AbstractControl }
    get tahun(): AbstractControl { return this.Form.get('tahun') as AbstractControl }
    get id_posyandu(): AbstractControl { return this.Form.get('id_posyandu') as AbstractControl }
}
