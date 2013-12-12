define([
    'components/thumb',
    'components/data'
],function(thumb,data){

    // wait for the document to be ready before instantiating
    $(document).ready(function(){

        // instantiate a new collection, pass in the data
        var thumbGrid = new thumb.collection(data);

        // instantiate a view
        var thumbView = new thumb.view({
            el: 'body',
            collection: thumbGrid
        });
    })

    return {
        initialize: function(){
            console.log("app.js initialized");
        }
    }
})