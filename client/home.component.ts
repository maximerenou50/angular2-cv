import {Component} from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, MouseEvent} from 'angular2-google-maps/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: 'client/home.component.html',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})
export class HomeComponent {

	constructor(title: Title) {
          title.setTitle("Maxime Renou");
    }

	lat: number = 49.894358;
	lng: number = -1.228287;
	zoom: number = 7;

	showPlace(index: number) {
		this.lat = this.places[index].lat;
		this.lng = this.places[index].lng;
		this.zoom = 8;
	}

	places: place[] = [
		{
		  lat: 49.633761,
		  lng: -1.625561,
		  label: '1',
		  description: 'Place I am born'
		},
		{
		  lat: 49.182827,
		  lng: -0.371401,
		  label: '2',
		  description: 'Place I study 3 years'
		},
		{
		  lat: 48.116811,
		  lng: -1.672664,
		  label: '3',
		  description: 'Place I am currently working'
		},
		{
		  lat: 51.510363,
		  lng: -0.104381,
		  label: '4',
		  description: 'Place I wanna live'
		}		
	]

}

interface place {
	lat: number;
	lng: number;
	label: string;
	description: string;
}
