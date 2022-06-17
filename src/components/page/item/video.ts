import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    console.log(url);
    super(`<section class="video">
            <div class="video__player">
              <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="video__title"></h3>
          </section>`);
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = 'https://www.youtube.com/embed/RK2vNnembmw';

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
