import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      ok: function() {
        this.$('.modal').modal('hide');
        this.sendAction('ok');
      }
    },
  });
