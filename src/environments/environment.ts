// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ApiConfig: {
    rutaBase:  'http://localhost:8084/ws-dgira/',
    rutaSigeia: 'http://localhost:8084/ws-sigeia/',
    rutaSinat: 'http://localhost:8084/ws-sinat/',
    rutaAdmin: 'http://localhost:8084/ws-admin/',
    sinatApi: 'http://localhost:8084/sinat_api/',
    rutaAuth: 'https://app.semarnat.gob.mx/sigeia/api/login/eva',
    rutaSigeiaWeb: 'https://mapas.semarnat.gob.mx/sigeia/#/authenticate/',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
