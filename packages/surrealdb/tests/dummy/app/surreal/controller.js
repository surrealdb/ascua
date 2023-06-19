import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SurrealController extends Controller {
  @service surreal;
  @service store;

  @tracked data;

  @action
  async loadData(model) {
    this.data = await this.store.select(model, { reload: true });
  }

  @action
  async signin() {
    await this.surreal.signin({
      user: 'root',
      pass: 'root',
    });
  }

  @action
  async addPerson() {
    await this.store.create('person', {
      id: `person:${this.name}`,
      name: this.name,
    });

    this.name = '';
  }

  @action
  async deletePerson(item) {
    await this.store.delete(item);
  }
}
