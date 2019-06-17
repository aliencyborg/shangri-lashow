import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | behind-the-scenes', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:behind-the-scenes')
    assert.ok(route)
  })
})
