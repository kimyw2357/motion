import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type closeListener = () => void;
type submitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: closeListener;
  submitListener?: submitListener;
  constructor() {
    super(`<dialog class="dialog">
            <div class="dialog__container">
              <button class="close">&times;</button>
              <div id="dialog__body"></div>
              <button class="dialog__submit">ADD</button>
            </div>  
          </dialog>`);
    const close = this.element.querySelector('.close')! as HTMLElement;
    close.onclick = () => {
      this.closeListener && this.closeListener();
    }
    const submit = this.element.querySelector('.dialog__submit')! as HTMLElement;
    submit.onclick = () => {
      this.submitListener && this.submitListener();
    }
  }
  
  setOnCloseListener(listener: closeListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: submitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
      const body = this.element.querySelector('#dialog__body')! as HTMLElement;
      child.attachTo(body);
  }
}