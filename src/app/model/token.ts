

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