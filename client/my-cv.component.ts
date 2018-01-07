import {Component} from '@angular/core';
import {Users} from '../collections/users';
import {Mongo} from "meteor/mongo";
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'my-cv',
    templateUrl: 'client/my-cv.component.html'
})
export class MyCVComponent {
	users: Mongo.Cursor<Object>;

	constructor (title: Title) {
		this.users = Users.find();
		title.setTitle("Maxime Renou - CV");
	}

	setWidth(width: string) {
		let styles = {
			'width':  width+'0%'
		}
		return styles;
	}

	stringAsDate(dateStr) {
		return new Date(dateStr);
	}
}
