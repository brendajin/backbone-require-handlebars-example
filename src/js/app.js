define([
    'components/thumb'
],function(thumb){    
    
    $(document).ready(function(){
        var thumbGrid = new thumb.collection();
    })

    return {
        initialize: function(){
            console.log("app.js initialized");
        }
    }
})