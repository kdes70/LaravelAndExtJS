const elixir = require('laravel-elixir');

//require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix){

    mix.styles(['resources/css/ext-all.css'], 'public/css/app.css', 'resources/assets/extjs')
    .scripts(['ext-all.js', 'ext-all-debug.js'], 'public/js/app.js', 'resources/assets/extjs');
//mix.sass('app.scss')

// .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap/', 'public/fonts/bootstrap')
// .webpack('app.js');
});
