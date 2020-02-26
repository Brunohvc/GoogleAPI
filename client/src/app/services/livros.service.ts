import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LivrosService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    consulta(form) {
        return this.http.post(this.UrlService + 'livros/consultar', form)
            .pipe(map((res: any) => res)
                , catchError(super.serviceError));
    }

    consultaFavoritos(form) {
        return this.http.post(this.UrlService + 'livros/consultarFavoritos', form)
            .pipe(map((res: any) => res)
                , catchError(super.serviceError));
    }

    post(form) {
        return this.http.post(this.UrlService + 'livros', form)
            .pipe(map((res: any) => res)
                , catchError(super.serviceError));
    }

    delete(form) {
        console.log('form:', form)
        return this.http.delete(this.UrlService + `livros/${form.livroId}/${form.userId}`)
            .pipe(map((res: any) => res)
                , catchError(super.serviceError));
    }
}
