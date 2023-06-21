import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SurrealPersonController extends Controller {
  @service store;

  @action
  async updatePerson(item) {
    await this.store.update(item.id, item);
  }
}
