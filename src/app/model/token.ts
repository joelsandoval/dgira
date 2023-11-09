
export class Token {
  exp!: number;
  iat!: number;
  sub!: string;
  iss!: string;
  folio!: string;
  serial!: number;
  estatus!: string;
  fecha!: Date;
  role!: string;
  roles!: string[];
  nombre!: string;
  bitacora!: string;
  clave!: string;
  tipoTramite!: string;
  tipoIngreso!: string;
  userId!: number;
}


export class ResponseDGIT {
  exp!: number;
  iat!: number;
  jti!: string;
  sub!: string;
  tok!: TokenDGIT;
}

export class TokenDGIT {
  rfc!: string;
  nombreCompleto!:string;
  correo!: string;
  hash!: string;
  idArea!: string;
  idDependencia!: string;
  area!: string;
  idUr!: string;
  nombreUr!: string;
  idUsuario!: number;
  idPerfil!: number
}