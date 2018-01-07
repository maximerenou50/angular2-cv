import {loadUsers} from './load-users';
import '../collections/methods.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadUsers);
