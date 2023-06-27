import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service surreal;
  @service router;

  @action
  async signout() {
    try {
      await this.surreal.invalidate();

      this.router.transitionTo('signin');
    } catch (e) {
      // Signin failed
    }
  }
}
