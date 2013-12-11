var paths = {
	thumb: 'components/Thumb',
	backbone: '../lib/backbone-optamd3-min',
	handlebars: '../lib/handlebars.runtime-amd',
    jquery:'../lib/jquery-1.9.1.min',
	underscore: '../lib/underscore-min'
}

require.config({
    //By default load any module IDs from js/1204
    baseUrl: '/src/js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: paths
});

require(["app"],function(App){
	App.initialize();
});