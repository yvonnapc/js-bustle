import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    },
    delete(story){
      if(confirm('Wanna delete dis?')){
        this.sendAction('destroyStory', story);
      }
    }
  }
});
