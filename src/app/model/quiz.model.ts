
export interface PayloadQuizModel {
    status: boolean;
    data:   QuizModel[];
}


export interface QuizModel {
    id:         number;
    jenis_quiz: number;
    title:      string;
    max_score:  number;
    created_at: Date;
    updated_at: Date;
    soal:       Soal[];
}

export interface Soal {
    id:         number;
    id_quiz:    string;
    no_urut:    string;
    gambar:     null;
    question:   string;
    score_soal: string;
    answer:     number;
    option:     number;
    created_at: Date;
    updated_at: Date;
    options:    Option[];
}

export interface Option {
    id:           number;
    id_quiz_soal: string;
    question:     string;
    answer:       string;
    score:        number;
    created_at:   Date;
    updated_at:   Date;
    jawaban: boolean;
}
