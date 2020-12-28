import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SliderButtonComponent extends Component {
  @tracked isSelected = false;
  @action toggleSlider() {
    this.isSelected = !this.isSelected;
    console.log('Slider clicked');
  }
}
