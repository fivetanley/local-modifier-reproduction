import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsesOn extends Component {
  @tracked wasClicked = false;
  @tracked bindClickHandler = true;
  on = on;

  @action
  handleClick() {
    this.wasClicked = true;
  }

  @action
  toggleBindClickHandler() {
    this.bindClickHandler = !this.bindClickHandler;
  }
}
