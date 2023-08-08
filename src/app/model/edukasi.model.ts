export namespace EdukasiModel {
    export interface IEdukasi {
        id: number
        title: string
        description: string
        file_name: string
        color: string
        created_at: string
        updated_at: string
        path_pdf: string
    }

    export interface GetEdukasi {
        status: boolean;
        data: IEdukasi[];
    }
}