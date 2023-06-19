import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SurrealRoute extends Route {
  @service store;
  @service surreal;

  async model() {
    await this.surreal.signin({
      user: 'root',
      pass: 'root',
    });
  }
}
