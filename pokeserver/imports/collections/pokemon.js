import {Mongo} from 'meteor/mongo';
import {meteor, Meteor} from 'meteor/meteor';

export const Pokemon = new Mongo.Collection('pokemon');

Meteor.publish('pokemon', ()=>{
    return Pokemon.find({});
});