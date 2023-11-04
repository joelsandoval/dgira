import { AreaAdscripcionI } from "./area-adscripcion";

export class Credenciales {
    user!: User;
    permisos!: string[];
    permisosArea!: PermisosO[];
    areaMain!: number;
    areas!: Areas[];
    areasId!: number[];
    perfiles!: number[];
    adscripcion!: AreaAdscripcionI;
    areaDir!: number;
}

export class User {
    id!: number;
    usuario!: string;
    nombre!: string;
    apellidoMaterno!: string;
    apellidoPaterno!: string;
    password!: string;    
    siglas!: string;
    corto!: string;
    completo!: string;
}

export class PermisosO {
    
    id!: number;
    accion!: string;
    accionId!: number;   
    color!: string;    
    icono!: string;
    areaSinat!: string;
    dependencia!: string;
    areaId!: number;
    estatus!: number;
    proceso!: number;
    sentido!: number;
    etapa!: number;
    efecto!: number;
    nivel!: number;    
    permiso!: string; 
    activo!: boolean;
    situacion!: string;
    entidad!: number;
    futura!: boolean;
}

export class Areas {
    id!: number;    
    area!: string;
    corto!: string;
    nivel!: number;
    padre!: number;
    eia!: boolean;
    entidad!: number;
    sinatArea!: string;
    sinatDependencia!: string;
    sinatNombre!: string;
    principal!: number;
}