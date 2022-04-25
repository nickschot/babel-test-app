import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  #privateProperty;

  constructor() {
    super(...arguments);

    this.#privateProperty = true;
  }
}
