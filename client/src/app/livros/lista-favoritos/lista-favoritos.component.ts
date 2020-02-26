import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.scss']
})
export class ListaFavoritosComponent implements OnInit {

  constructor(private livrosService: LivrosService, private authService: AuthService) { }
  livros;
  loading = [];
  user: SocialUser;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  buscar(form) {
    this.loading['request'] = true;
    this.livros = [];

    this.livrosService.consultaFavoritos(form)
      .subscribe(res => {
        console.log(res);
        this.livros = res;
      }, err => {
        console.log(err);
      })
      .add(() => this.loading['request'] = false);
  }
}
