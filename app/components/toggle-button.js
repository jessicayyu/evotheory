import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToggleButtonComponent extends Component {
  @tracked isSelected = false;
  @action toggleButton() {
    this.isSelected = !this.isSelected;
  }
}