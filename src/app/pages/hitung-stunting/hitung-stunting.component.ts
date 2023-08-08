import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BayiModel } from 'src/app/model/bayi.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BayiService } from 'src/app/services/bayi.service';
import { HitungStuntingService } from 'src/app/services/hitung-stunting.service';
import * as moment from 'moment';
import { AuthenticationModel } from 'src/app/model/authentication.model';

@Component({
    selector: 'app-hitung-stunting',
    templateUrl: './hitung-stunting.component.html',
    styleUrls: ['./hitung-stunting.component.scss']
})
export class HitungStuntingComponent implements OnInit {

    UserData: AuthenticationModel.ISignIn['data'] = this._authenticationService.getUserData();

    TabIndex = 0;

    BalitaDatasource: BayiModel.IBayi[] = [];

    SelectedBalita!: BayiModel.IBayi;

    JenisKelaminDatasource = [
        { value: 'L', text: 'Laki - Laki' },
        { value: 'P', text: 'Perempuan' },
    ];

    Form: FormGroup;

    ResultHitungStunting: any[] = [];

    constructor(
        private _bayiService: BayiService,
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _hitungStuntingService: HitungStuntingService,
        private _authenticationService: AuthenticationService,
    ) {
        this.Form = this._formBuilder.group({
            tanggal_ukur: [new Date(), []],
            cara_ukur: ["berdiri", []],
            id_bayi: [0, []],
            tanggal_lahir: ['', []],
            berat_badan: [0, []],
            tinggi_badan: [0, []],
            lingkar_lengan: [0, []],
            lingkar_kepala: [0, []],
            umur_bulan: [0, []],
            jenis_kelamin: ["", []],
            asi: [0, []],
        });
    }

    ngOnInit(): void {
        if (this.UserData) {
            this.getDataBalita();
        }
    }

    handleChangeTab(args: any): void {
        if (args.index == 0) {
            this.ResultHitungStunting = [];
        }
    }

    getDataBalita(): void {
        const id_posyandu = this._authenticationService.getUserData().posyandu.id;

        this._bayiService.onGetBayiByIdPosyandu(id_posyandu)
            .subscribe((result) => {
                this.BalitaDatasource = result.data;
            })
    }

    handleChangeDropdownBalita(args: any): void {
        this.SelectedBalita = args.value;

        this.id_bayi.setValue(this.SelectedBalita.id);
        this.asi.setValue(this.SelectedBalita.asi);
        this.tanggal_lahir.setValue(new Date(this.SelectedBalita.tanggal_lahir));
        this.jenis_kelamin.setValue(this.SelectedBalita.jenis_kelamin);

        this.onCountUmur(this.tanggal_lahir.value);
    }

    handleChangeTanggalLahir(args: any): void {
        this.onCountUmur(args);
    }

    onCountUmur(tanggal_lahir: Date): void {
        moment.locale('id');

        const age = moment().diff(tanggal_lahir, 'month');

        this.umur_bulan.setValue(age);
    }

    handleHitungStunting(): void {
        this.tanggal_ukur.setValue(formatDate(this.tanggal_ukur.value, 'yyyy-MM-dd', 'EN'));

        this.ResultHitungStunting = [];

        this._hitungStuntingService.onPostSavePemeriksaan(this.Form.value)
            .subscribe((result) => {
                if (result.status) {
                    const data = result.data;

                    // ** BB / U
                    const BB_U: any = data.status_gizi_BB_U;
                    if (data.z_score_BB_U != null && BB_U.id != null) {
                        BB_U['z_score'] = data.z_score_BB_U;
                        this.ResultHitungStunting.push(BB_U);
                    };

                    // ** PB / U
                    const PB_U: any = data.status_gizi_PB_U;
                    if (data.z_score_PB_U != null && PB_U.id != null) {
                        PB_U['z_score'] = data.z_score_PB_U;
                        this.ResultHitungStunting.push(PB_U);
                    };

                    // ** TB / U
                    const TB_U: any = data.status_gizi_TB_U;
                    if (data.z_score_TB_U != null && TB_U.id != null) {
                        TB_U['z_score'] = data.z_score_TB_U;
                        this.ResultHitungStunting.push(TB_U);
                    };

                    // ** BB / TB
                    const BB_TB: any = data.status_gizi_BB_TB;
                    if (data.z_score_BB_TB != null && BB_TB.id != null) {
                        BB_TB['z_score'] = data.z_score_BB_TB;
                        this.ResultHitungStunting.push(BB_TB);
                    };

                    // ** BB / PB
                    const BB_PB: any = data.status_gizi_BB_PB;
                    if (data.z_score_BB_PB != null && BB_PB.id != null) {
                        BB_PB['z_score'] = data.z_score_BB_PB;
                        this.ResultHitungStunting.push(BB_PB);
                    };

                    setTimeout(() => {
                        this.TabIndex = 1;
                    }, 200);

                }
            })
    }

    onResetForm(): void {
        this.Form.reset();
        this.tanggal_ukur.setValue(formatDate(new Date(), 'yyyy-MM-dd', 'EN'));
        this.cara_ukur.setValue("berdiri");
        this.id_bayi.setValue(0);
        this.tanggal_lahir.setValue(null);
        this.berat_badan.setValue(0);
        this.tinggi_badan.setValue(0);
        this.lingkar_lengan.setValue(0);
        this.lingkar_kepala.setValue(0);
        this.umur_bulan.setValue(0);
        this.jenis_kelamin.setValue("L");
        this.asi.setValue(0);
    }

    get tanggal_ukur(): AbstractControl { return this.Form.get('tanggal_ukur') as AbstractControl; }
    get cara_ukur(): AbstractControl { return this.Form.get('cara_ukur') as AbstractControl; }
    get id_bayi(): AbstractControl { return this.Form.get('id_bayi') as AbstractControl; }
    get tanggal_lahir(): AbstractControl { return this.Form.get('tanggal_lahir') as AbstractControl; }
    get berat_badan(): AbstractControl { return this.Form.get('berat_badan') as AbstractControl; }
    get tinggi_badan(): AbstractControl { return this.Form.get('tinggi_badan') as AbstractControl; }
    get lingkar_lengan(): AbstractControl { return this.Form.get('lingkar_lengan') as AbstractControl; }
    get lingkar_kepala(): AbstractControl { return this.Form.get('lingkar_kepala') as AbstractControl; }
    get umur_bulan(): AbstractControl { return this.Form.get('umur_bulan') as AbstractControl; }
    get jenis_kelamin(): AbstractControl { return this.Form.get('jenis_kelamin') as AbstractControl; }
    get asi(): AbstractControl { return this.Form.get('asi') as AbstractControl; }
}
