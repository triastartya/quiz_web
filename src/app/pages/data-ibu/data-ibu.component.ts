import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IbuModel } from 'src/app/model/ibu.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IbuService } from 'src/app/services/ibu.service';

@Component({
    selector: 'app-data-ibu',
    templateUrl: './data-ibu.component.html',
    styleUrls: ['./data-ibu.component.scss']
})
export class DataIbuComponent implements OnInit {

    TabIndex = 0;

    IbuDatasource: IbuModel.IIbu[] = [];

    Form: FormGroup;

    FormState: 'add' | 'detail' = 'add';

    constructor(
        private _ibuService: IbuService,
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _authenticationService: AuthenticationService,
    ) {
        this.Form = this._formBuilder.group({
            nik_ibu: ["", [Validators.required]],
            nama_ibu: ["", [Validators.required]],
            no_hp: ["", [Validators.required]],
            domisili: ["", [Validators.required]],
            rt: ["0", [Validators.required]],
            rw: ["0", [Validators.required]],
            id_posyandu: [this._authenticationService.getUserData().posyandu.id, []]
        });
    }

    ngOnInit(): void {
        this.getData();
    }

    handleChangeTab(args: any): void {
        if (args.index == 1) {
            this.FormState = 'add';
            this.onResetForm();
        }
    }

    getData(): void {
        const id_posyandu = this._authenticationService.getUserData().posyandu.id;

        this._ibuService.onGetIbuByIdPosyandu(id_posyandu)
            .subscribe((result) => {
                this.IbuDatasource = result.data;
            })
    }

    getDetail(data: IbuModel.IIbu): void {
        this.TabIndex = 0;
        this.FormState = 'detail';
        this.nik_ibu.setValue(data.nik_ibu);
        this.nama_ibu.setValue(data.nama_ibu);
        this.no_hp.setValue(data.no_hp);
        this.domisili.setValue(data.domisili);
        this.rt.setValue(data.rt);
        this.rw.setValue(data.rw);
    }

    handleSaveIbu(): void {
        this._ibuService.onPostSaveIbu(this.Form.value)
            .subscribe((result) => {
                if (result.status) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Disimpan' });

                    setTimeout(() => {
                        this.TabIndex = 1;
                        this.FormState = 'add';
                        this.onResetForm();
                        this.getData();
                    }, 1000);
                }
            })
    }

    onResetForm(): void {
        this.Form.reset();
        this.nik_ibu.setValue(0);
        this.nama_ibu.setValue("");
        this.no_hp.setValue("");
        this.domisili.setValue("");
        this.rt.setValue(0);
        this.rw.setValue(0);
    }

    get nik_ibu(): AbstractControl { return this.Form.get('nik_ibu') as AbstractControl; }
    get nama_ibu(): AbstractControl { return this.Form.get('nama_ibu') as AbstractControl; }
    get no_hp(): AbstractControl { return this.Form.get('no_hp') as AbstractControl; }
    get domisili(): AbstractControl { return this.Form.get('domisili') as AbstractControl; }
    get rt(): AbstractControl { return this.Form.get('rt') as AbstractControl; }
    get rw(): AbstractControl { return this.Form.get('rw') as AbstractControl; }
}
