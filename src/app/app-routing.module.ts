import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { DataIbuComponent } from './pages/data-ibu/data-ibu.component';
import { DataBalitaComponent } from './pages/data-balita/data-balita.component';
import { HitungStuntingComponent } from './pages/hitung-stunting/hitung-stunting.component';
import { EdukasiComponent } from './pages/edukasi/edukasi.component';
import { HasilPemeriksaanComponent } from './pages/hasil-pemeriksaan/hasil-pemeriksaan.component';
import { AuthGuard } from './helper/auth.guard';
import { FristScreenComponent } from './pages/frist-screen/frist-screen.component';
import { DataDiriComponent } from './pages/data-diri/data-diri.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResultPageComponent } from './pages/quiz-result-page/quiz-result-page.component';

const routes: Routes = [
    {
        path: '', component: FristScreenComponent,
    },
    {
        path: 'datadiri', component: DataDiriComponent,
    },
    {
        path: 'quiz', component: QuizComponent,
    },
    {
        path: 'beranda', component: BerandaComponent, canActivate: [AuthGuard]
    },
    {
        path: 'data-ibu', component: DataIbuComponent, canActivate: [AuthGuard]
    },
    {
        path: 'data-balita', component: DataBalitaComponent, canActivate: [AuthGuard]
    },
    {
        path: 'hitung-stunting', component: HitungStuntingComponent
    },
    {
        path: 'edukasi', component: EdukasiComponent, canActivate: [AuthGuard]
    },
    {
        path: 'hasil-pemeriksaan', component: HasilPemeriksaanComponent, canActivate: [AuthGuard]
    },
    {
        path: 'quiz-result-page', component: QuizResultPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
