import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SurrealIndexRoute extends Route {
  @service store;
  @service surreal;

  async beforeModel() {
    await this.surreal.signin({
      user: 'root',
      pass: 'root',
    });
  }

  async model() {
    return await this.store.select('person');
  }
}
