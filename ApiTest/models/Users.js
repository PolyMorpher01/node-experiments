const knex = require('../db');

const TABLE_NAME = 'users';

//users model
class Users {
  
    fetchAll(){
      return knex(TABLE_NAME)
        .select();
    }
  
    fetchById(id){
      return knex(TABLE_NAME)
        .select()
        .where('id',id)
        .first();
    }

    fetchByUserName(uname){
      return knex(TABLE_NAME)
        .select()
        .where('uname',uname)
        .first();
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
  
  const users = new Users;
  module.exports = users;