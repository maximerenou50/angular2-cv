import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'hobby',
    templateUrl: 'client/hobby.component.html'
})
export class HobbyComponent {
	video1: boolean = false;
	video2: boolean = false;
	showText: string = "Show video";
	hideText: string = "Hide video";
	video1Text: string = this.showText;
	video2Text: string = this.showText;

	constructor(title: Title) {
		title.setTitle("Maxime Renou - Hobbies");
    }

	showVideo1(){
		if(!this.video1) {
			this.video1Text = this.hideText;
		}
		else {
			this.video1Text = this.showText;
		}
		this.video1 = !this.video1;
		//this.showHideVideo2(this.video1, this.video1Text);
	}
	showVideo2(){
		if(!this.video2) {
			this.video2Text = this.hideText;
		}
		else {
			this.video2Text = this.showText;
		}
		this.video2 = !this.video2;
	}

	
}
