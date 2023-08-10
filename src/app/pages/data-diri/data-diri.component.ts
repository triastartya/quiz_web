import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BayiModel } from 'src/app/model/bayi.model';
import { IbuModel } from 'src/app/model/ibu.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BayiService } from 'src/app/services/bayi.service';
import { DataDiriService } from 'src/app/services/data-diri.service';
import { IbuService } from 'src/app/services/ibu.service';

@Component({
    selector: 'app-data-diri',
    templateUrl: './data-diri.component.html',
    styleUrls: ['./data-diri.component.scss']
})
export class DataDiriComponent implements OnInit {

    TabIndex = 0;

    BalitaDatasource: BayiModel.IBayi[] = [];

    IbuDatasource: IbuModel.IIbu[] = [];

    JenisKelaminDatasource = [
        { value: 'L', text: 'Laki - Laki' },
        { value: 'P', text: 'Perempuan' },
    ];

    TinggalDataSource = [
        { value: 'dengan orang tua', text: 'Dengan Orang Tua' },
        { value: 'Kos', text: 'Kos' },
        { value: 'Rumah Sendiri', text: 'Rumah Sendiri' }
    ]

    PekerjaanDataSource = [
        { value: 'TNI', text: 'TNI' },
        { value: 'POLRI', text: 'POLRI' },
        { value: 'PNS', text: 'PNS' },
        { value: 'Dokter', text: 'Dokter' },
        { value: 'Wiraswasta', text: 'Wiraswasta' },
        { value: 'Programer', text: 'Programer' },
        { value: 'Petani', text: 'Petani' },
        { value: 'Pedagang', text: 'Pedagang' },
        { value: 'Rumah Tangga', text: 'Rumah Tangga' },
        { value: 'Nga(nggur)', text: 'Nga(nggur)' },

    ]

    PendidikanDataSource = [
        { value: 'TK', text: 'TK' },
        { value: 'SD', text: 'SD' },
        { value: 'SMP', text: 'SMP' },
        { value: 'SMP', text: 'SMP' },
        { value: 'SMA/SMK', text: 'SMA/SMK' },
        { value: 'D I', text: 'D I' },
        { value: 'D II', text: 'D II' },
        { value: 'D III', text: 'D III' },
        { value: 'D IV', text: 'D IV' },
        { value: 'S 1', text: 'S 1' },
        { value: 'S 2', text: 'S 2' },
        { value: 'S 3', text: 'S 3' }
    ]

    SelectedJenisKelamin = this.JenisKelaminDatasource

    SelectedTinggal = this.TinggalDataSource

    SelectedPekerjaanAyah = this.PekerjaanDataSource

    SelectedPekerjaanIbu = this.PekerjaanDataSource

    SelectedPendidikanAyah = this.PendidikanDataSource

    SelectedPendidikanIbu = this.PendidikanDataSource

    Form: FormGroup;
    FormState: 'add' | 'detail' = 'add';

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _dataDiriService: DataDiriService
    ) {
        this.Form = this._formBuilder.group({
            nisn: ['', []],
            nama: ['', []],
            email: ['', []],
            tgl_lahir: [null, []],
            alamat: ['', []],
            berat_badan: [0, []],
            tinggi_badan: [0, []],
            jenis_kelamin: ["", [Validators.required]],
            lila_p: ['', []],
            tinggal: ['', []],
            uang_saku: [0, []],
            pendidikan_ayah: ['', []],
            pendidikan_ibu: ['', []],
            pekerjaan_ayah: ['', []],
            pekerjaan_ibu: ['', []],
            jumlah_anggota_keluarga_di_rumah: [0, []],
            riwayat_asi_eksekutif: ['', []],
            tanggal_lahir: [null, []]
        });
    }

    ngOnInit(): void {
    }

    handleClikMulai() {
        let data = this.Form.value;

        data.tgl_lahir = formatDate(this.Form.get('tgl_lahir')?.value, 'yyyy-MM-dd', 'EN');

        this._dataDiriService.onPostdataDiri(data)
            .subscribe(result => {
                if (result.status) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Disimpan' });

                    setTimeout(() => {
                        this._router.navigate([`/quiz/${result.data.id}`]);
                    }, 1000);
                }
            });
    }
}
