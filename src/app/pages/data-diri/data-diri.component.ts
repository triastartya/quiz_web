import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BayiModel } from 'src/app/model/bayi.model';
import { IbuModel } from 'src/app/model/ibu.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BayiService } from 'src/app/services/bayi.service';
import { IbuService } from 'src/app/services/ibu.service';

@Component({
  selector: 'app-data-diri',
  templateUrl: './data-diri.component.html',
  styleUrls: ['./data-diri.component.scss']
})
export class DataDiriComponent implements OnInit{
  
  TabIndex = 0;

  BalitaDatasource: BayiModel.IBayi[] = [];

  IbuDatasource: IbuModel.IIbu[] = [];

  JenisKelaminDatasource = [
      { value: 'L', text: 'Laki - Laki' },
      { value: 'P', text: 'Perempuan' },
  ];

  Form: FormGroup;
  FormState: 'add' | 'detail' = 'add';

  constructor(
      private _ibuService: IbuService,
      private _bayiService: BayiService,
      private _formBuilder: FormBuilder,
      private _messageService: MessageService,
      private _authenticationService: AuthenticationService,
      private _router: Router,
  ) {
      this.Form = this._formBuilder.group({
          id_ibu: [0, []],
          nik_bayi: ["", []],
          nama_bayi: ["", []],
          tanggal_lahir: [0, []],
          berat_lahir: [0, []],
          panjang_lahir: [0, []],
          jenis_kelamin: ["", []],
          asi: [0, []],
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
      this.tanggal_lahir.setValue(new Date(data.tanggal_lahir));
      this.berat_lahir.setValue(data.berat_lahir);
      this.panjang_lahir.setValue(data.panjang_lahir);
      this.jenis_kelamin.setValue(data.jenis_kelamin);
      this.asi.setValue(data.asi);
  }

  getDataIbu(): void {
      const id_posyandu = this._authenticationService.getUserData().posyandu.id;

      this._ibuService.onGetIbuByIdPosyandu(id_posyandu)
          .subscribe((result) => {
              this.IbuDatasource = result.data;
          })
  }

  getDataBalita(): void {
      const id_posyandu = this._authenticationService.getUserData().posyandu.id;

      this._bayiService.onGetBayiByIdPosyandu(id_posyandu)
          .subscribe((result) => {
              this.BalitaDatasource = result.data;
          })
  }

  handleSaveBalita(): void {
      this.tanggal_lahir.setValue(formatDate(this.tanggal_lahir.value, 'yyyy-MM-dd', 'EN'));

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
      this.tanggal_lahir.setValue("");
      this.berat_lahir.setValue(0);
      this.panjang_lahir.setValue(0);
      this.jenis_kelamin.setValue("L");
      this.asi.setValue(0);
  }
  
  handleClikMulai(){
    this._router.navigate(['/quiz']);
  }

  get id_ibu(): AbstractControl { return this.Form.get('id_ibu') as AbstractControl; }
  get nik_bayi(): AbstractControl { return this.Form.get('nik_bayi') as AbstractControl; }
  get nama_bayi(): AbstractControl { return this.Form.get('nama_bayi') as AbstractControl; }
  get tanggal_lahir(): AbstractControl { return this.Form.get('tanggal_lahir') as AbstractControl; }
  get berat_lahir(): AbstractControl { return this.Form.get('berat_lahir') as AbstractControl; }
  get panjang_lahir(): AbstractControl { return this.Form.get('panjang_lahir') as AbstractControl; }
  get jenis_kelamin(): AbstractControl { return this.Form.get('jenis_kelamin') as AbstractControl; }
  get asi(): AbstractControl { return this.Form.get('asi') as AbstractControl; }
}
