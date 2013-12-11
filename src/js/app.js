define([
    'components/thumb',
    'components/data'
],function(thumb,data){    
    
    $(document).ready(function(){
        var thumbGrid = new thumb.collection(data);
        var thumbView = new thumb.view({
            el: 'body',
            collection: thumbGrid
        });
        console.log(thumbView)
    })

    return {
        initialize: function(){
            console.log("app.js initialized");
        }
    }
})