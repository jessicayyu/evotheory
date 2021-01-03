import Route from '@ember/routing/route';

export default class GenesRoute extends Route {
  model() {
    return [
      {
        title: 'Headpiece',
        subtitle: 'Hair / Ears / Hat'
      }, 
      {
        title: 'Body'
      }, 
      {
        title: 'Back/Accessory',
        subtitle: 'Wings / Handheld'
      }, 
      {
        title: 'Eyes',
      }
    ];
  }
}
