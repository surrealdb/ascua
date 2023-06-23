import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { authenticated } from '@ascua/surrealdb';

export default
@authenticated
class SurrealIndexRoute extends Route {
  @service store;

  async beforeModel() {
    //
  }

  async model() {
    return await this.store.select('person');
  }
}
