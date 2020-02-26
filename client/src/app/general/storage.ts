
import { Injectable } from '@angular/core';

@Injectable()
export class StorageFunctions {

    constructor() { }

    // VARIAVEIS PARA MONTAR MENU
    menuItemList: any = [];
    menuDropDownList: any = [];
    encontrado = false;
    // FIM

    get getUser(): any {
        return JSON.parse(localStorage.getItem('user'));
    }

    setUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}
