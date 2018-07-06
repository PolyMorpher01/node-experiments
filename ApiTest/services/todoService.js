const model = require('../models/todo');

module.exports = {

    getAllList(){
        return model.fetchAll();
    },

    getById(id){
        return model.fetchById(id);
    },

    createItem(obj){
        return model.create(obj);
    },
    
    updateItem(id,obj){
        return model.update(id,obj);
    },

    deleteItem(id){
        return model.delete(id);
    }

};




