import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('trailer')
  this.route('shop')
  this.route('photos')
  this.route('give_back')
  this.route('games')
  this.route('episodes')
  this.route('cast_crew')
  this.route('youtopia')
  this.route('music')
  this.route('home')
})

export default Router
