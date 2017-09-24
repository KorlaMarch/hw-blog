import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { SimpleSchema } from "meteor/aldeed:simple-schema";

export const Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
  head : {type : String},
  content : {type : String}
});

Posts.attachSchema(Posts.schema);

if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication(){
      return Posts.find({});
  });
}

Meteor.methods({
  'posts.insert'(head, content){
    check(head, String);
    check(content, String);

    Posts.insert({ head, content});
  }
});
