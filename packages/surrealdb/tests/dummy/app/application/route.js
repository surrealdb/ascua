import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Storage from '@ascua/surrealdb/classes/storage';

export default class ApplicationRoute extends Route {
  @service surreal;
  @service router;

  #ls = new Storage();

  async beforeModel() {
    this.token = this.#ls.get('surreal');
    if (this.token && !this.surreal.authenticated) {
      await this.surreal.authenticate(this.token);

      return this.router.transitionTo('surreal');
    }

    this.router.transitionTo('signin');
  }
}
