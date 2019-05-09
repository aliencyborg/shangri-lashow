import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | games/big-time', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:games/big-time')
    assert.ok(route)
  })
})
