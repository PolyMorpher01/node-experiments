const knex = require('../db');

const TABLE_NAME = 'todo';


//todo model
class Todo {
  
  constructor(){

  }

  fetchAll(){
    return knex(TABLE_NAME)
      .select();
  }

  fetchById(id){
    return knex(TABLE_NAME)
      .select()
      .where('id',id);
  }

  create(obj){
    return knex(TABLE_NAME)
      .insert(obj);
  }

  update(id,obj){
    return knex(TABLE_NAME)
      .update(obj)
      .where('id',id);
  }

  delete(id){
    return knex(TABLE_NAME)
    .del()
    .where('id',id);
  }

}

todo = new Todo;
module.exports = todo;