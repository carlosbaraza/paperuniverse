Package.describe({
  name: 'paperjs',
  version: '0.0.1',
  summary: 'Paper.js for Meteor',
  git: 'carlosbaraza/paperjs-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.export('paper');
  api.addFiles('paper-full.min.js', 'client');
});
