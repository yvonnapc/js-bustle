import Ember from 'ember';

  var stories = [{
    id: 1,
    headline: "Films This Week",
    author: "Yvonna Contreras",
    image: "https://s-media-cache-ak0.pinimg.com/736x/08/3c/31/083c31ea32c3b6b78affba244ccddb68.jpg"
  }, {
    id: 2,
    headline: "Foods This Week",
    author: "Alexandra Rivera",
    image: "https://lauramcdaniel64.files.wordpress.com/2015/07/food-truck-casamento-6.jpg"
  }, {
    id: 3,
    headline: "Music This Week",
    author: "Yvonna Contreras",
    image: "http://farm5.static.flickr.com/4012/4441716857_4cfbe09ec6.jpg"
}];

export default Ember.Route.extend({
  model(){
    return stories;
  },
});
