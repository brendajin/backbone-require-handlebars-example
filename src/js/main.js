var paths = {
	backbone: '../lib/backbone-optamd3-min',
    jquery:'../lib/jquery-1.9.1.min',
	underscore: '../lib/underscore-min',
	handlebars: '../lib/handlebars.runtime',
}

var shim = {
	handlebars: {
		exports: 'Handlebars'
	}
}

require.config({
    //By default load any module IDs from js/1204
    baseUrl: '/src/js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: paths,
    shim: shim
});

require(["app"],function(App){
	App.initialize();
});