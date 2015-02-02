module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'qunit',                        target: '~1.16.0' },
      { name: 'stefanpenner/ember-cli-shims', target: '0.0.3' },
      { name: 'ember-qunit-notifications',    target: '0.0.4' },
      { name: 'ember-qunit',                  target: '0.1.8' }
    ]);
  }
};
