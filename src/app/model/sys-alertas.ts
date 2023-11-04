export class SysAlertas {
    id!: number;
    fecha!: Date;
    fechaFin!: Date;
    alerta!: string;
    severity!: string;
    estatus: boolean;
    ubicacion!: string;
    constructor(
        estatus: boolean
    ){
        this.estatus = estatus;
    }
}