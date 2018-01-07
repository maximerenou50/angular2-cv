import 'reflect-metadata';
import {Component} from '@angular/core';
import {Meteor} from 'meteor/meteor';
import {MeteorComponent} from 'angular2-meteor';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import '../collections/methods.ts';
import {ContactForm} from './imports/contact-form';

@Component({
    selector: 'contact',
    templateUrl: 'client/contact.component.html',
    directives: [ContactForm]
})
export class ContactComponent extends MeteorComponent {	}
