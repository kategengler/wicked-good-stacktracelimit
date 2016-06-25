import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    throw new Error('omg you entered a route');
  }
});
