import Route from '@ember/routing/route';

export default class GenesRoute extends Route {
  model() {
    return ['Headpiece', 'Body', 'Back/Accessory', 'Eyes'];
  }
}
