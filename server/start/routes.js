'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('livros/:id', ({ params }) => {
    return `Post ${params.id}`
})
Route.post('livros/consultar', 'LivroController.listar')
Route.post('livros/consultarFavoritos', 'LivroController.listarFavoritos')
Route.post('livros', 'LivroController.create')
Route.delete('livros/:livroId/:userId', 'LivroController.delete')
