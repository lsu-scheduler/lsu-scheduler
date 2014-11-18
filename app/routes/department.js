import Ember from 'ember';

//========================================================================================
/*
/* FILE NAME: App/Route/Department.js
/*
/* DESCRIPTION: Resposible for connecting the front end to the back end
/*
/* AUTHORS: Chester Schofield
/*
/* REFERENCE:
/*
/* DATE BY CHANGE DESCRIPTION
/* ======== ======= ===========
/* 11/17/2014 Chester Added base comments
/*
*/
//========================================================================================

/**
 * Connects the Application Department to the Database Department
 */
export default Ember.Route.extend({
  model: function(){
    return this.store.find('department');
  }
});
