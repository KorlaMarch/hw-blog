import { Meteor } from 'meteor/meteor';
import { FlowRouter }  from 'meteor/kadira:flow-router';

import './main.html';

FlowRouter.route('/', {
  name: 'first',
  action(params, queryParams) {
    console.log("first");
  }
})

FlowRouter.route('/second/:_test', {
  name: 'second',
  action(params, queryParams) {
    console.log("second");
  }
});

Meteor.startup(() => {
  console.log("test");
});
