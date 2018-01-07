import 'reflect-metadata';
import {Component, EventEmitter, ElementRef, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import {Meteor} from 'meteor/meteor';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import '../../collections/methods.ts';
import {Title} from '@angular/platform-browser';


@Component({
    selector: 'contact-form',
    templateUrl: 'client/imports/contact-form.html'
})
export class ContactForm implements OnInit{	
	displayForm: boolean = true;
	contactForm: ControlGroup;
	submitted: boolean = false;
	captchaValid: boolean = false;
	submitButtonDisabled: boolean = true;
	recaptchaUnvalidHidden: boolean = true;
	http: Http;

	constructor(title: Title, http: Http) {
		let fb = new FormBuilder();
		this.contactForm = fb.group({
			email: ['', Validators.required],
			title: ['', Validators.required],
			content: ['', Validators.required]
		});
		title.setTitle("Maxime Renou - Contact");
		window['verifyCallback'] = this.verifyCallback.bind(this);
		this.http = http;
	}

	ngOnInit() {
		this.displayRecaptcha();
	}

	isValid() {
		if(this.contactForm.valid) {
			this.submitButtonDisabled = false;
		}
		else {
			this.submitButtonDisabled = true;
		}
    }

	displayRecaptcha(){
		console.error("displayRecaptcha");
		var doc = <HTMLDivElement>document.getElementById('contact-form');
		var script = document.createElement('script');
		script.innerHTML = '';
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		script.defer = true;
		doc.appendChild(script);
	}

	// TODO: Fix that part to actually call the Google Captach verification
	verifyCallback(response){
		/*let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions({ headers: headers });

		let body = "secret=6LcTHyETAAAAADPLJWpJWivren8iJWerHKyZyXLw&response="+response;

  		this.http.post('https://www.google.com/recaptcha/api/siteverify', body, options)
  			.map(this.extractData)
         	.catch(this.handleError);*/

		this.captchaValid = true;
	}

	/*extractData(res: Response) {
		console.error("ENTER extractData");
		let body = res.json();
		console.error("body : "+body);
		return body.data || { };
	}

	handleError(error: any){
		console.error("ENTER handleError");
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}*/

	sendEmail(contact) {
		if (this.captchaValid){
			this.recaptchaUnvalidHidden = true;
		}
		else {
			this.recaptchaUnvalidHidden = false;
		}
		if (this.contactForm.valid && this.captchaValid) {
			Meteor.call('sendEmail',
	                contact.email,
	                contact.title,
	                contact.content, function(err, response){
				if(err){
					alert("An error occurred, please try again later or use LinkedIn. Sorry for the inconvenience.");
				}
				else{
					console.error("Email successfuly sent!");
				}
			});
			(<Control>this.contactForm.controls['email']).updateValue('');
			(<Control>this.contactForm.controls['title']).updateValue('');
			(<Control>this.contactForm.controls['content']).updateValue('');
			this.submitButtonDisabled = true;
			this.submitted = true;
		}
	}
}
