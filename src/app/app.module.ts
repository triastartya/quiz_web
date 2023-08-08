import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar'
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber'
import { DropdownModule } from 'primeng/dropdown'
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { HitungStuntingComponent } from './pages/hitung-stunting/hitung-stunting.component';
import { DataIbuComponent } from './pages/data-ibu/data-ibu.component';
import { DataBalitaComponent } from './pages/data-balita/data-balita.component';
import { EdukasiComponent } from './pages/edukasi/edukasi.component';

import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';


import { MessageService } from 'primeng/api';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HasilPemeriksaanComponent } from './pages/hasil-pemeriksaan/hasil-pemeriksaan.component';
import { FristScreenComponent } from './pages/frist-screen/frist-screen.component';
import { DataDiriComponent } from './pages/data-diri/data-diri.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { LayoutQuizComponent } from './components/layout/layout-quiz/layout-quiz.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        BerandaComponent,
        HitungStuntingComponent,
        DataIbuComponent,
        DataBalitaComponent,
        EdukasiComponent,
        DashboardComponent,
        LoadingComponent,
        NavbarComponent,
        HasilPemeriksaanComponent,
        FristScreenComponent,
        DataDiriComponent,
        QuizComponent,
        LayoutQuizComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        InputTextModule,
        InputNumberModule,
        DropdownModule,
        ToastModule,
        DialogModule,
        ProgressSpinnerModule,
        PasswordModule,
        HttpClientModule,
        ButtonModule,
        TabViewModule,
        RadioButtonModule,
        AccordionModule,
        NgxMaskDirective,
        NgxMaskPipe,
    ],
    providers: [
        MessageService,
        provideNgxMask(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
