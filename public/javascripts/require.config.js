require.config({

  baseUrl: 'javascripts',
  paths: {
    'jquery': 'vendor/jquery-1.10.2',
    'jquery-ui': 'vendor/jquery-ui',
    'd3': 'vendor/d3',
    'nvd3': 'vendor/nv.d3',
    'hbs': 'vendor/handlebars-1.1.2',
    'ember': 'vendor/ember-1.2.0',
    'ember-data': 'vendor/ember-data'
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },
    'ember-data': ['ember'],
    'nvd3': ['d3'],
    'jquery-ui': ['jquery'],
    'd3': {
      exports: 'd3'
    }
  }

});

// Initial require to load the app
require(['app']);

