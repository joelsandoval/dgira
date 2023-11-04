export class Login {
    username: string;
    password: string;
    folio: string;
    serial: number;

    constructor(
        username: string,
        password: string,
        folio: string,
        serial: number
    ) {
        this.username = username;
        this.password = password;
        this.folio = folio;
        this.serial = serial;
    }
}
