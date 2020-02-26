'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

var books = require('google-books-search');
const LivrosFavorito = use('App/Models/LivrosFavorito')

class LivroController {
    async listar({ request, response }) {
        let userId = request.input('userId')
        let titulo = request.input('titulo')
        let pagina = request.input('pagina')
        let options = {
            offset: pagina
        };

        let livros;

        await new Promise((resolve, reject) => {
            books.search(titulo, options, function (error, results) {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        }).then(response => {
            livros = response;
        }).catch(error => {
            return response.json(error)
        })

        if (livros) {
            const promises = livros.map(async (element) => {
                let favorito = await LivrosFavorito.query().where({ userId, livroId: element.id }).first();
                element.favorito = favorito;
            });

            await Promise.all(promises)
        }
        return response.json(livros)
    }

    async listarFavoritos({ request, response }) {
        let userId = request.input('userId')
        let titulo = request.input('titulo')
        let pagina = request.input('pagina')

        let livros = await LivrosFavorito.query()
            .where({ userId })
            .whereRaw(`titulo LIKE '%${titulo}%'`)
            .forPage(pagina, 10).fetch();

        let novosLivros = [];

        const promises = livros.rows.map(async (element) => {
            return new Promise((resolve, reject) => {
                books.lookup(element.livroId, function (error, result) {
                    if (!error) {
                        result.favorito = JSON.parse(JSON.stringify(element));
                        novosLivros.push(result);
                        resolve(result);
                    } else {
                        reject(error);
                    }
                });
            });
        });
        await Promise.all(promises)

        return response.json(novosLivros)
    }

    async create({ request, response }) {
        const livrosFavorito = new LivrosFavorito();
        livrosFavorito.userId = request.input('userId')
        livrosFavorito.livroId = request.input('livroId')
        livrosFavorito.titulo = request.input('titulo')

        await livrosFavorito.save()

        return response.json(livrosFavorito)
    }

    async delete({ params }) {
        let livrosFavorito = await await LivrosFavorito.query().where({ userId: params.userId, livroId: params.livroId }).first()

        livrosFavorito.delete();

        return { message: 'Excluído!' };
    }
}

module.exports = LivroController
