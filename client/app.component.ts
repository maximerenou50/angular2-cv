import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide, NgZone} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Users} from '../collections/users';
import {Mongo} from "meteor/mongo";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router, RouteConfig} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {Title} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';

import {HomeComponent} from './home.component';
import {MyCVComponent} from './my-cv.component';
import {HobbyComponent} from './hobby.component';
import {ContactComponent} from './contact.component';
import {AboutComponent} from './my-about.component';

@Component({
    selector: 'my-app',
    templateUrl: 'client/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'Home', component: HomeComponent },
    { path: '/cv', as: 'MyCV', component: MyCVComponent },
    { path: '/hobbies', as: 'Hobby', component: HobbyComponent },
    { path: '/contact', as: 'Contact', component: ContactComponent },
    { path: '/about', as: 'About', component: AboutComponent }
])
class AppComponent {
	router:Router;
    toggled: boolean = false;
    width: number;
  
	constructor(router: Router, ngZone: NgZone) {
		this.router = router;
        window.onresize = (e) =>
        {
            ngZone.run(() => {
                this.width = window.innerWidth;
            });
        };
        this.width = window.innerWidth;
	}

    collapseMenu() {
        if(this.width < 768) {
            this.toggled = false;
        }
    }

    setNavbarClasses() {
        let classes =  {
            'collapse': true,
            'navbar-collapse': true,
            'in': false
        }
        return classes;
    }

    setWrapperClasses() {
        let classes =  {
            'toggled': this.toggled
        }
        return classes;
    }

    toggledMenu() {
        this.toggled = !this.toggled;
    }

}

bootstrap(AppComponent, [ROUTER_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS, HTTP_PROVIDERS, Title, provide(APP_BASE_HREF, { useValue: '/' })]);