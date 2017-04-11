(function() {
  'use strict'

  angular.module('app', ['angularMoment'])
    .component('redditClone', {
       controller:function(){
        const vm = this

        vm.toggleForm = "something"
        vm.toggleCommentForm = ""
        vm.toggleCommentList = false;

        vm.$onInit = function(){
          vm.blogs = [
            {
              title : "Monkeys",
              body : "This is my first blog on Monkeys",
              author : "Anita.",
              url : "http://images.nationalgeographic.com/wpf/media-live/energizer_2010/images/large/animals-wildlif-b8f9e18e-4c15-4ea7-b1d2-e850c9c56955-cb1277907951.jpg",
              votes:2,
              date : new Date(),
              comments: ['Hi!', 'Hey!', 'Hello!'],
            },
            {
              title : "Dogs",
              body : "This is my first blog on Dogs",
              author : "Anita.",
              url : "https://s-media-cache-ak0.pinimg.com/736x/62/22/3c/62223cc60b713821fa04b738f740d328.jpg",
              votes:2,
              date : new Date(),
              comments: ['Dogs are great!'],
            }
          ]
          vm.orderBy = "title"
          vm.toggleForm = ""
          vm.votes = 0;
        }

        vm.click = function(){
          if(vm.toggleForm){
             vm.toggleForm = ""
           }
          else{
            vm.toggleForm = "something"
          }
        }

        vm.upVotes = function(blog,changeVal) {
          blog.votes += changeVal;
        }

        vm.downVotes = function(blog,changeVal) {
          if(blog.votes!== 0)
                blog.votes -= changeVal;
          else {
            blog.votes = 0
          }
        }

        vm.clickComment = function(){
          if(vm.toggleCommentForm){
             vm.toggleCommentForm = ""
           }
          else{
            vm.toggleCommentForm = "something"
          }
        }


        vm.addNewComment = function(blog, newComment) {
          blog.comments.push(newComment);
          // blog.newComment = '';
          vm.toggleCommentForm = false;
        }

        vm.showComments = function(blog){
          return vm.toggleCommentList = !vm.toggleCommentList
        }


        vm.addBlog = function(){
          vm.blog.date = new Date()
          vm.blog.votes = 0
          vm.blog.comments = [];
          vm.blogs.push(vm.blog)
          delete vm.blog
          vm.toggleForm = ""
        }
      },
      templateUrl:'./reddit.html'
    })
}());
