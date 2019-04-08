import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | give_back', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:give-back')
    assert.ok(route)
  })
})
