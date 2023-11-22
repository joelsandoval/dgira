export class Puestos{
        id!: number;
        nombrePuesto!: string;
        nivelEstructura!: string;
        codigoPuesto!: string;
        area!: string;
        direccion!: string
}

export class RhPuestosTipo{
        id!: number;
        nombrePuesto!: string;
        nivelEstructura!: string;
        codigoPuesto!: string;
        tipoArea!: number;
        dirArea!: number
}

export class Nombramiento{
        id!: number;
        nombramiento!: string;
        descripcion!: string;
        semarnat!: boolean;
}
export class AdscripcionVw {
        id!: number;
        nombreCompleto!: string;
        nombrePuesto!: string;
        fechaInicio!: Date;
        fechaTermino!: Date;
        nombramiento!: string;
        dirCorto!: string;
        activo!: boolean;   
        
}

export class Adscripcion {
        id!: number;
        persona!: number;
        puesto!: number;
        fechaInicio!: Date;
        fechaTermino!: Date;
        activo!: boolean;
        adscripcion!: string;   
        
}

export class AreasDgira {
        
        id!: number;
        nombreDir!: string;
        dirCorto!: string;
        parentId!: number;
}

export class Subdir {

        id!: number;
        nombreDir!: string;
        dirCorto!: string;
        parentId!: number;
}

export class Empleado {
        id!: number;
        activo!: boolean;
        telefono!: string;
        correo!: string;
        nombreCompleto!: string;
        profesion!: string;
        fechaNacimiento!: Date;
        fechaAlta!: Date;   
        
}

export class RhPersonas{
        id !: number;
        nombre !: string;
        apellidoPat !: string;
        apellidoMat !: string;
        curp !: string;
        rfc !: string;
        profesion !: string;
        cedula !: string;
        correo !: string;
        genero !: string;
        fechaNacimiento !: Date;
        fechaAlta !: Date;
        telefono!: string
        activo !: boolean;
        iniciales !: string;
        tratamiento !: string;
        numEmpleado !: number;
        tipoNombramiento !: number;
}