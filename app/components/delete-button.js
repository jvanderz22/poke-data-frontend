import Ember from 'ember';

export default Ember.Component.extend({
  confirmationNeeded: false,

  deleteRecord() {
    var promise = this.get('content').destroyRecord()
    this.sendAction('deletingRecord', promise)
  },

  actions: {
    delete() {
      if (this.get('confirmationNeeded')) {
        this.set('confirmDelete', true)
      }
      else {
        this.deleteRecord()
      }
    },

    confirmDelete() {
      this.set('confirmDelete', false)
      this.deleteRecord();
    },

    cancelDelete(){
      this.set('confirmDelete', false);
    }
  }
});
