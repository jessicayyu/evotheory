import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ToggleButtonComponent extends Component {
  @action
  toggleButton() {
    console.log(`Button toggled!`);
  }
}