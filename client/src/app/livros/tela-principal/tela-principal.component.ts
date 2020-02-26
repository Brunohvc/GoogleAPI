import { Component, OnInit, Input } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent implements OnInit {

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

    form.pagina *= 10;

    this.livrosService.consulta(form)
      .subscribe(res => {
        this.livros = res;
      }, err => {
        console.log(err);
      })
      .add(() => this.loading['request'] = false);
  }
}
