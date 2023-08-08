export namespace PosyanduModel {
    export interface IPosyandu {
        id: number
        nama_posyandu: string
        id_puskesmas: number
        id_kelurahan: number
        created_at: string
        updated_at: string
        puskesmas?: IPuskesmas
        kelurahan?: IKelurahan
    }

    export interface IPuskesmas {
        id: number
        nama_puskesmas: string
        id_kelurahan: any
        created_at: string
        updated_at: string
    }

    export interface IKelurahan {
        id: number
        nama_kelurahan: string
        created_at: string
        updated_at: string
    }

    export interface GetAllPosyandu {
        status: boolean;
        data: IPosyandu[];
        message?: string
    }
}