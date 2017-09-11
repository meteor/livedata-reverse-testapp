import { Meteor } from 'meteor/meteor';

Meteor.methods({
  reverse(arg) {
    // Return something notably different from reverse.meteor.com.
    return arg.split("").reverse().join("");
  }
});
