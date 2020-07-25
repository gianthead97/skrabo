export enum Language {
    SRPSKI,
    ENGLISH
}

export interface Rules {
    id: string;
    duration: number;
    rounds: number;
    language: Language;
}
