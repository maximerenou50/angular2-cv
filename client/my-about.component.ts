import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'about',
    templateUrl: 'client/my-about.component.html'
})
export class AboutComponent {
	constructor(title: Title) {
          title.setTitle("Maxime Renou - About");
    }
}
