export namespace DataDiri {
    export interface SaveDataDiri {
        nisn: string
        nama: string
        email: string
        jenis_kelamin: string
        tanggal_lahir: string
        alamat: string
        berat_badan: number
        tinggi_badan: number
        lila_p: string
        tinggal: string
        uang_saku: number
        pendidikan_ayah: string
        pendidikan_ibu: string
        pekerjaan_ayah: string
        pekerjaan_ibu: string
        jumlah_anggota_keluarga_di_rumah: number
        riwayat_asi_eksekutif: string
        tgl_lahir: Date
    }

    export interface GetDataDiri {
        statusCode: number;
        status: boolean
        message: string
    }
}