const knex = require('../db');

const TABLE_NAME = 'todo';

const db = knex(TABLE_NAME);

//todo model
class Todo {
  
  constructor(){

  }

  fetchAll(){
    return db
      .select();
  }

  fetchById(id){
    return db
      .select()
      .where('id',id);
  }

  create(obj){
    return db
      .insert(obj);
  }

  update(id,obj){
    return db
      .update(obj)
      .where('id',id);
  }

  delete(id){
    return db
    .del()
    .where('id',id);
  }

}

todo = new Todo;
module.exports = todo;