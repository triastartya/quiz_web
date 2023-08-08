export namespace IbuModel {

    export interface SaveIbu {
        nik_ibu: string
        nama_ibu: string
        no_hp: string
        domisili: string
        rt: string
        rw: string
        id_posyandu: number
    }

    export interface IIbu {
        id: number
        nik_ibu: string
        nama_ibu: string
        no_hp: string
        domisili: string
        rt: string
        rw: string
        id_posyandu: string
        created_at: string
        updated_at: string
    }

    export interface GetIbu {
        status: boolean;
        data: IIbu[];
    }
}