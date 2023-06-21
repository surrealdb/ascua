import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SurrealIndexController extends Controller {
  @service surreal;
  @service store;

  @tracked data;
  @tracked name = '';

  @action
  async loadData(model) {
    this.model = await this.store.select(model, { reload: true });
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
    if (!this.name) {
      return;
    }

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

  @action
  async closeConnection() {
    await this.surreal.close();
  }
}
