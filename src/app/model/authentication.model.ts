import { PosyanduModel } from "./posyandu.model";

export namespace AuthenticationModel {
    export interface ISignIn {
        status: boolean;
        data: {
            id: number
            name: string
            email: string
            email_verified_at: any
            no_hp: string
            password: string
            jenis_user: string
            id_posyandu: number
            remember_token: any
            created_at: string
            updated_at: string
            posyandu: PosyanduModel.IPosyandu
        };
        message?: string;
    }
}