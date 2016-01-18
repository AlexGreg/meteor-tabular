Package.describe({
  name: 'alexgreg:meteor-tabular-semantic',
  summary: 'Datatables for large or small datasets in Meteor - Semantic-UI integration',
  version: '1.5.1',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  datatables: '1.10.9'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.4', 'METEOR@1.0']);
  api.use([
    'check',
    'underscore',
    'mongo',
    'blaze',
    'templating',
    'reactive-var',
    'tracker'
  ]);

  // jquery is a weak reference in case you want to use a different package or
  // pull it in another way, but regardless you need to make sure it is loaded
  // before any tabular tables are rendered
  api.use(['jquery'], 'client', {weak: true});

  api.use(['meteorhacks:subs-manager@1.2.0'], ['client', 'server'], {weak: true});

  api.export('Tabular');

  api.addFiles('common.js');
  api.addFiles('server/tabular.js', 'server');
  api.addFiles([
    '.npm/package/node_modules/datatables/media/js/jquery.dataTables.js',
    'client/lib/dataTables.semantic-ui.js',
    'client/lib/dataTables.semantic-ui.css',
    'client/tabular.html',
    'client/util.js',
    'client/tableRecords.js',
    'client/tableInit.js',
    'client/pubSelector.js',
    'client/tabular.js'
  ], 'client');
  
});
