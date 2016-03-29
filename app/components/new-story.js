import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow)(){
      this.set('addNewStory', true);
    },

    save1(){
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
