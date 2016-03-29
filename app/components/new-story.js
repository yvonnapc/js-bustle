import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow)(){
      this.set('addNewStory', true);
    }
  }
});
