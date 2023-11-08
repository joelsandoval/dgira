export class Login {
    usuario: string;
    password: string;
    folio: string;
    serial: number;

    constructor(
        usuario: string,
        password: string,
        folio: string,
        serial: number
    ) {
        this.usuario = usuario;
        this.password = password;
        this.folio = folio;
        this.serial = serial;
    }
}
