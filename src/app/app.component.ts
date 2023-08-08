import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageService } from 'primeng/api';
import { HttpRequestService } from './services/http-request.service';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'sigembul';

    @ViewChild('Loading') Loading!: LoadingComponent;

    constructor(
        private _messageService: MessageService,
        private _httpRequestService: HttpRequestService,
    ) { }

    ngOnInit(): void {
        AOS.init();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this._httpRequestService.ToggleLoading.subscribe((result) => {
                this.Loading.Visible = result;
            });

            // ** Error
            this._httpRequestService.ErrorToast.subscribe((result) => {
                if (result.show) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'error', summary: 'Oops', detail: result.message })
                }
            });
        }, 100);
    }
}
