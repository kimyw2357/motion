import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url), 'https://picsum.photos');
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url), 'https://www.youtube.com');
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('うまぴょい伝説', 'https://youtu.be/AJMEjFNewIA'));
        this.page.addChild(new NoteComponent('北海道', '札幌に移住したい!!'));
        this.page.addChild(new TodoComponent('転職', '転職したい!!'));
    }
    bindElementToDialog(selection, InputComponent, makeSection, webSite) {
        const element = document.querySelector(selection);
        element.onclick = () => {
            const dialog = new InputDialog();
            const input = new InputComponent(webSite);
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        };
    }
}
new App(document.querySelector('.document'), document.body);
