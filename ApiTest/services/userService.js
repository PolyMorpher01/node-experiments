const model = require('../models/Users');
const cryptUtils = require('../utils/crypt');

module.exports = {

    getAllList(){
        return model.fetchAll();
    },

    getById(id){        
        return model.fetchById(id)
        .then((data)=>{
            if(!data){
                throw ('User does not exist');
            }
            return data;
        });
    },

    createItem(obj){
        obj.password = cryptUtils.encrypt(obj.password);
        return model.create(obj)
    },
    
    updateItem(id,obj){
        return model.update(id,obj);
    },

    deleteItem(id){
        return model.delete(id);
    }

};