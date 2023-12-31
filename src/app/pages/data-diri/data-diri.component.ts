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
        private _ibuService: IbuService,
        private _bayiService: BayiService,
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _authenticationService: AuthenticationService,
        private _router: Router,
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
        this.getDataBalita();
        this.getDataIbu();
    }

    handleChangeTab(args: any): void {
        if (args.index == 1) {
            this.FormState = 'add';
            this.onResetForm();
        }
    }

    getDetail(data: BayiModel.IBayi): void {
        this.TabIndex = 0;
        this.FormState = 'detail';
        this.id_ibu.setValue(data.id_ibu);
        this.nik_bayi.setValue(data.nik_bayi);
        this.nama_bayi.setValue(data.nama_bayi);
        // this.tgl_lahir.setValue(new Date(data.tgl_lahir));
        this.berat_lahir.setValue(data.berat_lahir);
        this.panjang_lahir.setValue(data.panjang_lahir);
        this.jenis_kelamin.setValue(data.jenis_kelamin);
        this.asi.setValue(data.asi);
    }

    getDataIbu(): void {
        // const id_posyandu = this._authenticationService.getUserData().posyandu.id;

        // this._ibuService.onGetIbuByIdPosyandu(id_posyandu)
        //     .subscribe((result) => {
        //         this.IbuDatasource = result.data;
        //     })
    }

    getDataBalita(): void {
        // const id_posyandu = this._authenticationService.getUserData().posyandu.id;

        // this._bayiService.onGetBayiByIdPosyandu(id_posyandu)
        //     .subscribe((result) => {
        //         this.BalitaDatasource = result.data;
        //     })
    }

    handleSaveBalita(): void {
        this.tgl_lahir.setValue(formatDate(this.tgl_lahir.value, 'yyyy-MM-dd', 'EN'));

        this._bayiService.onPostSaveBayi(this.Form.value)
            .subscribe((result) => {
                if (result.status) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Disimpan' });

                    setTimeout(() => {
                        this.TabIndex = 1;
                        this.FormState = 'add';
                        this.onResetForm();
                        this.getDataBalita();
                    }, 1000);
                }
            })
    }

    onResetForm(): void {
        this.Form.reset();
        this.id_ibu.setValue(0);
        this.nik_bayi.setValue("");
        this.nama_bayi.setValue("");
        this.tgl_lahir.setValue("");
        this.berat_lahir.setValue(0);
        this.panjang_lahir.setValue(0);
        this.jenis_kelamin.setValue("L");
        this.asi.setValue(0);
    }

    handleClikMulai() {
        let data = this.Form.value
        this.tgl_lahir.setValue(formatDate(this.tgl_lahir.value, 'yyyy-MM-dd', 'EN'));
        console.log('from controller', this.tgl_lahir.value);


        this._dataDiriService.onPostdataDiri(data).subscribe(result => {
            alert(result.status)
            this._router.navigate(['/quiz', result.data.id]);
        })
    }

    get id_ibu(): AbstractControl { return this.Form.get('id_ibu') as AbstractControl; }
    get nik_bayi(): AbstractControl { return this.Form.get('nik_bayi') as AbstractControl; }
    get nama_bayi(): AbstractControl { return this.Form.get('nama_bayi') as AbstractControl; }
    get tgl_lahir(): AbstractControl { return this.Form.get('tgl_lahir') as AbstractControl; }
    get berat_lahir(): AbstractControl { return this.Form.get('berat_lahir') as AbstractControl; }
    get panjang_lahir(): AbstractControl { return this.Form.get('panjang_lahir') as AbstractControl; }
    get jenis_kelamin(): AbstractControl { return this.Form.get('jenis_kelamin') as AbstractControl; }
    get asi(): AbstractControl { return this.Form.get('asi') as AbstractControl; }

}
