
import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class BaseService {
    public Token: string = "";

    constructor() { }

    protected UrlService: string = `http://127.0.0.1:3333/`;

    protected serviceError(error: Response | any) {
        let err: any;

        if (error instanceof HttpErrorResponse) {
            if (error.status === 0) { //server fora
                err = {
                    errors: ['Falha ao conectar no servidor'],
                    success: false
                }
            } else if (error.status == 403) {
                err = {
                    errors: ['Acesso negado!'],
                    success: false
                }
            }
            else {
                err = error.error;
            }
        } else {
            err = {
                success: false,
                errors: [error.message ? error.message : error.toString()]
            }
        }

        error.msg = err;
        if (!error.msg) error.msg = { success: false, errors: [''] };
        return throwError(error);
    }

    protected extractData(response: any) {
        return response.data || response || {};
    }

    protected extractODataResult(response: any) {
        response.value = toCamel(response.value);
        return response;
    }

    protected extractODataSingleResult(response: any) {
        return toCamel(response);
    }

    protected parseErrorBlob(err: HttpErrorResponse): Observable<any> {
        const reader: FileReader = new FileReader();

        const obs = Observable.create((observer: any) => {
            reader.onloadend = (e) => {
                observer.error(JSON.parse(reader.result.toString()));
                observer.complete();
            }
        });
        reader.readAsText(err.error);
        return obs;
    }
}

function toCamel(o) {
    let newO, origKey, newKey, value;
    if (o instanceof Array) {
        return o.map(val => {
            if (typeof val === 'object') {
                val = toCamel(val);
            }
            return val;
        });
    } else {
        newO = {};
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
                value = o[origKey];
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = toCamel(value);
                }
                newO[newKey] = value;
            }
        }
    }
    return newO;
}
