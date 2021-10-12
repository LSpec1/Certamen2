import * as internal from "stream";

export interface Persona {
    nombre: string;
    edad: number;
    genero: string;
    fecha_nacimiento: Date;
    region: string;
    comuna: string;
    direccion: string;
    telefono: number;
    observaciones: string;
    habilidades: string;
}
