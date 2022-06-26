import { BaseComponent } from '../../component.js';
export class MediaSectionInput extends BaseComponent {
    constructor(webSite) {
        super(`<div>
             <div class="form__container">
               <label for="title">Title</label>
               <input type="text" id="title">
             </div>
             <div class="form__container">
               <label for="url">URL Reference <a href="${webSite}" target="_blank"> (${webSite})</a></label>
               <input type="text" id="url">
             </div>
           </div>`);
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
    get url() {
        const element = this.element.querySelector('#url');
        return element.value;
    }
}
