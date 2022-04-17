import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import users from "./modules/users";
import likes from "./modules/likes";
import comments from "./modules/comments";
import posts from "./modules/posts";
import pageLoader from "./modules/fullPageLoader";
//import database from './database/db.json';
//import Json from './database/db.json';
//const myData = require("./src/database/db.json");

//import db_locally from './database/db.json';
  

Vue.use(Vuex);
//axios.defaults = myData;
//axios.defaults.headers.post['Content-Type'] = myData;
//axios.defaults.baseURL = ('https://my-json-server.typicode.com/eevan7a9/social-media-db/');
//axios.defaults.baseURL = 'http://192.168.0.100:8080/';
axios.defaults.baseURL = ('https://my-json-server.typicode.com/CatalinButacu/db1');

//axios.defaults.relativePath = ('./db.json');
//axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response));


export default new Vuex.Store({
  actions: {
    async initApplication() {
      await this.dispatch("getUsers");
      await this.dispatch("getAllComments");
      await this.dispatch("getLikes");
      await this.dispatch("getPosts");
    }
  },
  modules: {
    users,
    likes,
    comments,
    posts,
    pageLoader
  }
});
