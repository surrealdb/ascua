import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import Route from '@ember/routing/route';
import attempted from '@ascua/surrealdb/decorators/attempted';

module('Unit | Decorators | Attempted', function (hooks) {
  setupTest(hooks);

  test('should only be applied to a Route class', function (assert) {
    assert.throws(
      (
        @attempted
        class MyClass {}
      ),
      'The @attempted decorator can only be applied to a Route'
    );
  });

  test('should add a beforeModel method that waits for authentication', function (assert) {
    // Decorate the class with the @attempted decorator.
    @attempted
    class MyRoute extends Route {}

    assert.true(MyRoute.prototype.beforeModel);

    // Check that the beforeModel method waits for authentication.
    let spy = jest.spyOn(MyRoute.prototype, 'beforeModel');
    new MyRoute().beforeModel();
    expect(spy).toHaveBeenCalledWith();
  });
});
