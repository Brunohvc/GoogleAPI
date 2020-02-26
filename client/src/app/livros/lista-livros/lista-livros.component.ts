import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {

  constructor(private livrosService: LivrosService) { }

  @Input() livros = [];
  @Input() consultaAoRemover = false;
  @Input() loading = [];
  @Input() user: SocialUser;
  @Output() consultar = new EventEmitter();
  titulo = '';
  ultimoTitulo = '';
  pagina = 0;

  ngOnInit(): void {
  }

  buscar() {
    if (this.ultimoTitulo !== this.titulo) {
      this.pagina = 0;
    }

    const form = {
      userId: this.user.id,
      titulo: this.titulo,
      pagina: this.pagina
    };

    this.ultimoTitulo = this.titulo;
    this.consultar.emit(form);
  }

  get verificaDisabled() {
    if (this.loading['request']) {
      return true;
    }

    if (this.titulo.length === 0) {
      return true;
    }

    return false;
  }

  favorita(livro, index) {
    const form = {
      userId: this.user.id,
      livroId: livro.id,
      titulo: livro.title
    };

    console.log(form)
    if (!livro.favorito) {
      this.livrosService.post(form)
        .subscribe(res => {
          this.livros[index].favorito = res;
        }, err => {
          console.log(err);
        });
    } else {
      this.livrosService.delete(form)
        .subscribe(res => {
          this.livros[index].favorito = null;
          if (this.consultaAoRemover) {
            this.buscar();
          }
        }, err => {
          console.log(err);
        });
    }
  }

  proximo() {
    this.pagina += 1;
    this.buscar();
  }

  anterior() {
    this.pagina -= 1;
    this.buscar();
  }

  get verificaExisteProxima() {
    if (this.livros && this.livros.length < 10) {
      return true;
    }
    return false;
  }

  get verificaExisteAnterior() {
    if (this.pagina === 0) {
      return true;
    }
    return false;
  }

  textButton() {
    if (this.loading['request']) {
      return 'Buscando';
    }
    return 'Pesquisar';
  }

}
