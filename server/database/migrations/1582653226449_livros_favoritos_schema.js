'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivrosFavoritosSchema extends Schema {
  up () {
    this.create('livros_favoritos', (table) => {
      table.increments()
      table.integer('userId').notNullable()
      table.string('livroId', 80).notNullable()
      table.string('titulo', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.table('livros_favoritos', (table) => {
      this.drop('livros_favoritos')
    })
  }
}

module.exports = LivrosFavoritosSchema
