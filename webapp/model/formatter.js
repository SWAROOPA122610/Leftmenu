sap.ui.define([],function(){
    "use strict";
    return{
        onReturnAgeMessage: function(age,name){
            var msg ="";
            if(age>=18){
                msg = name + ' is eligible for voting';
            }else{
                msg = name + ' not eligible for voting';
            }

            return msg;
        }
    }
})