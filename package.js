Package.describe({
  name: 'rcdelfin:livehelperchat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Port of LiveHelperChat',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use('ecmascript');
  api.mainModule('livehelperchat.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rcdelfin:livehelperchat');
  api.mainModule('livehelperchat-tests.js');
});
