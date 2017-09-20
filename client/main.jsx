import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter }  from 'meteor/kadira:flow-router';

import './main.html';
import BlogCreate from '../imports/views/BlogCreate.jsx';
import BlogList from  '../imports/views/BlogList.jsx';

FlowRouter.route('/', {
  name: 'Blog.List',
  action(params, queryParams) {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<BlogList />, root);
    }
  }
});

FlowRouter.route('/new/', {
  name: 'Blog.Create',
  action(params, queryParams) {
    //const root = document.getElementById('root');
    //if(root){
      ReactDOM.render(<BlogCreate />, root);
    //}
  }
});

Meteor.startup(() => {
  const routeName = FlowRouter.getRouteName();

  if(routeName=='Blog.List'){
    ReactDOM.render(<BlogList />, document.getElementById('root'));
  }else {
    ReactDOM.render(<BlogCreate />, document.getElementById('root'));
  }
});
