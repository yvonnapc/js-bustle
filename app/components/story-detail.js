import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(story){
      if(confirm('Wanna delete dis?')){
        this.sendAction('destroyStory', story);
      }
    }
  }
});
