import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('cast_crew')
  this.route('episodes')
  this.route('games', function() {
    this.route('big-time')
  })
  this.route('give_back')
  this.route('home', { path: '/' })
  this.route('music')
  this.route('photos')
  this.route('shop')
  this.route('trailer')

  // 404 page catch-all
  this.route('not-found', { path: '/*path' })
})

export default Router
