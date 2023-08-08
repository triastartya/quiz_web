import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent {

    Visible: boolean = false;

    showDialog() {
        this.Visible = true;
    }

    closeDialog() {
        this.Visible = false;
    }
}
