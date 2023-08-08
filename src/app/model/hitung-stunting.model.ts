import { BayiModel } from "./bayi.model"

export namespace HitungStuntingModel {
    export interface SaveHitungStunting {
        tanggal_ukur: string
        cara_ukur: string
        jenis_pemeriksaan: string
        id_bayi: number
        berat_badan: any
        tinggi_badan: any
        lingkar_lengan: any
        lingkar_kepala: any
        umur_bulan: any
        jenis_kelamin: string
        asi: number
    }

    export interface IStatusGizi {
        id: number;
        jenis_pemeriksaan: string;
        min: string;
        max: string;
        range: string;
        status_gizi: string;
        feedback: string;
    }

    export interface IHitungStunting {
        tanggal_ukur: string
        cara_ukur: string
        jenis_pemeriksaan: string
        id_bayi: number
        berat_badan: number
        tinggi_badan: number
        lingkar_lengan: number
        lingkar_kepala: number
        umur_bulan: number
        jenis_kelamin: string
        asi: number
        z_score_BB_U: number
        z_score_PB_U: any
        z_score_TB_U: number
        z_score_BB_TB: number
        z_score_BB_PB: number
        id_status_gizi_BB_U: number
        id_status_gizi_PB_U: any
        id_status_gizi_TB_U: number
        id_status_gizi_BB_TB: number
        id_status_gizi_BB_PB: number
        status_gizi_PB_U: IStatusGizi
        status_gizi_BB_U: IStatusGizi
        status_gizi_TB_U: IStatusGizi
        status_gizi_BB_TB: IStatusGizi
        status_gizi_BB_PB: IStatusGizi
        bayi: BayiModel.IBayi
    }

    export interface GetHitungStunting {
        status: boolean;
        message: string;
        data: IHitungStunting;
    }
}