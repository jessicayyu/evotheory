import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SelectRowComponent extends Component {
  @action
  showMessage(gene) {
    console.log(`The gene is ${gene}!`);
  }
}