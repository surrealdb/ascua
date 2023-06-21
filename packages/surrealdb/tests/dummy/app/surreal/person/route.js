import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SurrealPersonRoute extends Route {
  @service store;
  @service surreal;

  async beforeModel() {
    await this.surreal.signin({
      user: 'root',
      pass: 'root',
    });
  }

  async model({ person_id }) {
    return await this.store.select(person_id, { reload: true });
  }
}
