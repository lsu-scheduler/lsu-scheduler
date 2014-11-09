define("lsu-scheduler/adapters/application",["ember-data","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.RESTAdapter.extend({host:"https://lsu-scheduler.herokuapp.com/api"})}),define("lsu-scheduler/app",["ember","ember/resolver","ember/load-initializers","lsu-scheduler/config/environment","exports"],function(e,s,t,n,a){"use strict";var l=e["default"],o=s["default"],i=t["default"],r=n["default"];l.MODEL_FACTORY_INJECTIONS=!0;var d=l.Application.extend({modulePrefix:r.modulePrefix,podModulePrefix:r.podModulePrefix,Resolver:o});i(d,r.modulePrefix),a["default"]=d}),define("lsu-scheduler/components/schedule-component",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Component.extend({_initializeCalendar:function(){return $("#schedule").fullCalendar({header:{left:"",center:"",right:"prev,next"},defaultDate:"2014-06-12",defaultView:"agendaWeek",editable:!0,events:this.theEvents})}.on("didInsertElement"),actions:{addEvent:function(){alert("Gotcha.\n\nHead over to GitHub and make it work."),window.location.href="https://github.com/selbyk/lsu-scheduler";var e={title:"New Event!",start:"2014-06-27T05:00:00",allDay:!1};this.theEvents.pushObject(e),this.$("#schedule").fullCalendar("renderEvent",e,!0)}}})}),define("lsu-scheduler/models/department",["ember-data","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Model.extend({name:t.attr("string")})}),define("lsu-scheduler/models/model",["ember-data","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Model.extend({})}),define("lsu-scheduler/models/schedule",["ember-data","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Model.extend({})}),define("lsu-scheduler/router",["ember","lsu-scheduler/config/environment","exports"],function(e,s,t){"use strict";var n=e["default"],a=s["default"],l=n.Router.extend({location:a.locationType});l.map(function(){this.route("schedule",{path:"schedule"}),this.resource("model",{path:"models/:model_id"},function(){}),this.resource("department",{path:"departments/:department_id"},function(){}),this.resource("departments",function(){}),this.route("credits",{path:"credits"})}),t["default"]=l}),define("lsu-scheduler/routes/credits",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Route.extend({})}),define("lsu-scheduler/routes/department",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Route.extend({model:function(){return this.store.find("department")}})}),define("lsu-scheduler/routes/departments",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Route.extend({model:function(){return this.store.find("department")}})}),define("lsu-scheduler/routes/model",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Route.extend({})}),define("lsu-scheduler/routes/schedule",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Route.extend({model:function(){return{events:t.A([{title:"Dinner Event",start:"2014-06-15"},{title:"Breakfast Event",start:"2014-06-25T07:00:00",allDay:!1}])}}})}),define("lsu-scheduler/templates/application",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){function o(e,s){s.buffer.push("LSU<br>Scheduler")}function i(e,s){s.buffer.push("Departments")}function r(e,s){s.buffer.push("Schedule")}function d(e,s){s.buffer.push("The Stack")}function c(e,s){s.buffer.push("Credits")}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var u,h,p,m="",f=this,v=n.helperMissing;return l.buffer.push('<div class="container">\n  <nav class="navbar navbar-default" role="navigation">\n    <div class="container-fluid">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        '),h=n["link-to"]||s&&s["link-to"],p={hash:{"class":"navbar-brand text-center"},hashTypes:{"class":"STRING"},hashContexts:{"class":s},inverse:f.noop,fn:f.program(1,o,l),contexts:[s],types:["STRING"],data:l},u=h?h.call(s,"index",p):v.call(s,"link-to","index",p),(u||0===u)&&l.buffer.push(u),l.buffer.push('\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <form class="navbar-form navbar-left" role="search">\n          <div class="form-group">\n            <input type="text" class="form-control" placeholder="Search">\n          </div>\n          <button type="submit" class="btn btn-default">Submit</button>\n        </form>\n        <ul class="nav navbar-nav navbar-right">\n          <li>'),h=n["link-to"]||s&&s["link-to"],p={hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(3,i,l),contexts:[s],types:["STRING"],data:l},u=h?h.call(s,"departments",p):v.call(s,"link-to","departments",p),(u||0===u)&&l.buffer.push(u),l.buffer.push("</li>\n          <li>"),h=n["link-to"]||s&&s["link-to"],p={hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(5,r,l),contexts:[s],types:["STRING"],data:l},u=h?h.call(s,"schedule",p):v.call(s,"link-to","schedule",p),(u||0===u)&&l.buffer.push(u),l.buffer.push('</li>\n          <li class="dropdown">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i></a>\n            <ul class="dropdown-menu" role="menu">\n              <li><a href="#">Placeholder</a></li>\n              <li class="divider"></li>\n              <li>'),h=n["link-to"]||s&&s["link-to"],p={hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(7,d,l),contexts:[s],types:["STRING"],data:l},u=h?h.call(s,"credits",p):v.call(s,"link-to","credits",p),(u||0===u)&&l.buffer.push(u),l.buffer.push("</li>\n              <li>"),h=n["link-to"]||s&&s["link-to"],p={hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(9,c,l),contexts:[s],types:["STRING"],data:l},u=h?h.call(s,"credits",p):v.call(s,"link-to","credits",p),(u||0===u)&&l.buffer.push(u),l.buffer.push("</li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n\n"),u=n._triageMustache.call(s,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["ID"],data:l}),(u||0===u)&&l.buffer.push(u),l.buffer.push('\n<hr class="featurette-divider">\n<p class="text-center">&copy 2014 Copyright by Some Guys and a Girl at LSU</p>\n<p class="text-center">You can find the source on <a href="https://github.com/selbyk/lsu-scheduler">GitHub</a></p>\n'),m})}),define("lsu-scheduler/templates/components/schedule-component",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var o="",i=this.escapeExpression;return l.buffer.push('<a class="btn btn-primary" '),l.buffer.push(i(n.action.call(s,"addEvent",{hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["STRING"],data:l}))),l.buffer.push('>+ Add Course</a>\n<div id="schedule"></div>\n'),o})}),define("lsu-scheduler/templates/credits",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{},l.buffer.push('<div class="container">\n  <!-- START THE FEATURETTES -->\n  <div class="page-header">\n    <h1>The Stack</h1>\n  </div>\n\n  <h2 class="text-center">Backend</h2>\n\n  <hr class="featurette-divider">\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">We are hosted freely by Heroku</h3>\n          <p class="lead">Heroku (pronounced her-OH-koo) is a cloud application platform – a new way\n            of building and deploying web apps. One of the first cloud platforms, Heroku has been\n            in development since June 2007, when it supported only the Ruby programming language,\n            but has since added support for Java, Node.js, Scala, Clojure, Python and PHP and\n            (undocumented) Perl. The base operating system is Debian or, in the newest stack,\n            the Debian-based Ubuntu.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/cmh1Bhc.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/nykLble.png" alt="node.js logo">\n        </div>\n        <div class="col-md-7">\n          <h3 class="featurette-heading">And completely written in Javascript, thanks to Node.js</h3>\n          <p class="lead">Node.js is an open source, cross-platform runtime environment for server-side\n            and networking applications. Node.js applications are written in JavaScript,\n            and can be run within the Node.js runtime on OS X, Microsoft Windows, Linux\n            and FreeBSD.</p>\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">Express quickly serves our site without the need for nginx or apache</h3>\n          <p class="lead">Express is a minimal and flexible Node.js web application\n            framework that provides a robust set of features for web and mobile applications.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/V8LVOZ3.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//sequelizejs.com/images/logo.png" alt="Generic placeholder image">\n        </div>\n        <div class="col-md-7">\n          <h3 class="featurette-heading">Sequelize abstracts our database queries so everyone wins</h3>\n          <p class="lead">The Sequelize library provides easy access to MySQL, MariaDB, SQLite or PostgreSQL\n          databases by mapping database entries to objects and vice versa. To put it in a nutshell,\n          it\'s an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript\n          and can be used in the Node.JS environment.</p>\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">In production, PostgreSQL manages our data</h3>\n          <p class="lead">PostgreSQL is an object-relational database management system (ORDBMS) with an emphasis\n              on extensibility and standards-compliance. As a database server, its primary\n              function is to store data, securely and supporting best practices, and retrieve\n              it later, as requested by other software applications, be it those on the same\n              computer or those running on another computer across a network (including the\n              Internet). It can handle workloads ranging from small single-machine applications\n              to large Internet-facing applications with many concurrent users. Recent versions\n              also provide replication of the database itself for security and scalability.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/ylOy5UK.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <h2 class="text-center">Frontend</h2>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">Ember makes interactive frontend development fast and easy</h3>\n          <p class="lead">Ember.js is an open-source\n            client-side JavaScript web application framework based on the model-view-controller\n            (MVC) software architectural pattern. It allows developers to create\n            scalable single-page applications by incorporating common idioms and\n            best practices into a framework that provides a rich object model,\n            declarative two-way data binding, computed properties,\n            automatically-updating templates powered by Handlebars.js, and a router\n            for managing application state.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/QgERiyu.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/2P5kdPx.png" alt="Generic placeholder image">\n        </div>\n        <div class="col-md-7">\n          <h3 class="featurette-heading">And like everyone else, we use Bootstrap</h3>\n          <p class="lead">Bootstrap is a free collection\n            of tools for creating websites and web applications. It contains HTML and\n            CSS-based design templates for typography, forms, buttons, navigation and\n            other interface components, as well as optional JavaScript extensions. In\n            June 2014 it was the No.1 project on GitHub with over 73,000 stars and more\n            than 27,000 forks, and a user base that includes MSNBC and NASA.</p>\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">With some eye candy by Font Awesome</h3>\n          <p class="lead">Font Awesome gives you scalable vector icons that can\n            instantly be customized — size, color, drop shadow, and anything that\n            can be done with the power of CSS.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/K2dYbyu.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/w3YmUPD.png" alt="Generic placeholder image">\n        </div>\n        <div class="col-md-7">\n          <h3 class="featurette-heading">Full Calendar is why the schedules look so pretty</h3>\n          <p class="lead">FullCalendar is a jQuery plugin that provides a full-sized,\n            drag and drop event. It uses AJAX to fetch events\n            on-the-fly and is easily configured to use your own feed format. It is\n            visually customizable with a rich API.</p>\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <div class="row featurette">\n        <div class="col-md-7">\n          <h3 class="featurette-heading">And last but not least, thank Imgur for hosting these pics</h3>\n          <p class="lead">Imgur is an image community that creates, consumes and\n            shares tomorrow\'s viral images, today. Millions of images are uploaded\n            each day to Imgur, where they are distilled by the Imgurian community\n            into a stream of the Internet\'s best images and viewed billions of times.\n            Expect to laugh, cry and be inspired by the images you\'ll find here.</p>\n        </div>\n        <div class="col-md-5">\n          <img class="featurette-image img-responsive" src="//i.imgur.com/ICEE6DF.png" alt="ember.js logo">\n        </div>\n      </div>\n\n      <hr class="featurette-divider">\n\n      <!-- Jumbotron -->\n      <div class="jumbotron">\n        <h2>Does any of this stuff sound cool to you?</h2>\n        <p class="lead">Think something can be done better?</p>\n        <p class="lead">Have a cool feature you want to add?</p>\n        <p class="lead">LSU Scheduler is 100% open source.</p>\n        <p class="lead">The technology we use is some of the lastest and greatest.</p>\n        <p class="lead">From server to client, all software used is avaliable on\n          every platform and is heavily documented.</p>\n        <p class="lead">So make it happen!</p>\n        <p class="lead">Contributions are not only very welcome, but probably the only\n          way this project will survive.</p>\n        <p class="text-center"><a data-style="mega" data-icon="octicon-git-branch" href="https://github.com/selbyk/lsu-scheduler" class="github-button">Fork LSU Scheduler</a></p>\n      </div>\n</div>\n')})}),define("lsu-scheduler/templates/department",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){function o(e,s){var t,a="";return s.buffer.push("\n  <p>"),t=n._triageMustache.call(e,"name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push("</p>\n"),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var i,r="",d=this;return i=n.each.call(s,{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,o,l),contexts:[],types:[],data:l}),(i||0===i)&&l.buffer.push(i),l.buffer.push("\n"),r})}),define("lsu-scheduler/templates/departments",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){function o(e,s){var t,a="";return s.buffer.push("\n    <li>"),t=n._triageMustache.call(e,"name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push("</li>\n  "),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var i,r="",d=this;return l.buffer.push('<div class="container">\n  <div class="page-header">\n    <h1>Departments</h1>\n    <p class="lead">Browse courses by department.</p>\n  </div>\n  <ul>\n  '),i=n.each.call(s,{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,o,l),contexts:[],types:[],data:l}),(i||0===i)&&l.buffer.push(i),l.buffer.push("\n  </ul>\n</div>\n"),r})}),define("lsu-scheduler/templates/index",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{},l.buffer.push('<div class="container">\n  <div class="page-header">\n    <h1>Lsu Scheduler</h1>\n    <p class="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n  </div>\n\n  <h3>Three equal columns</h3>\n  <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n  <div class="row">\n    <div class="col-md-4">.col-md-4</div>\n    <div class="col-md-4">.col-md-4</div>\n    <div class="col-md-4">.col-md-4</div>\n  </div>\n\n  <h3>Three unequal columns</h3>\n  <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n  <div class="row">\n    <div class="col-md-3">.col-md-3</div>\n    <div class="col-md-6">.col-md-6</div>\n    <div class="col-md-3">.col-md-3</div>\n  </div>\n\n  <h3>Two columns</h3>\n  <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n  <div class="row">\n    <div class="col-md-8">.col-md-8</div>\n    <div class="col-md-4">.col-md-4</div>\n  </div>\n\n  <h3>Full width, single column</h3>\n  <p class="text-warning">No grid classes are necessary for full-width elements.</p>\n\n  <hr>\n\n  <h3>Two columns with two nested columns</h3>\n  <p>Per the documentation, nesting is easy\\u2014just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n  <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n  <div class="row">\n    <div class="col-md-8">\n      .col-md-8\n      <div class="row">\n        <div class="col-md-6">.col-md-6</div>\n        <div class="col-md-6">.col-md-6</div>\n      </div>\n    </div>\n    <div class="col-md-4">.col-md-4</div>\n  </div>\n\n  <hr>\n\n  <h3>Mixed: mobile and desktop</h3>\n  <p>The Bootstrap 3 grid system has four tiers of classes: xs (phones), sm (tablets), md (desktops), and lg (larger desktops). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>\n  <p>Each tier of classes scales up, meaning if you plan on setting the same widths for xs and sm, you only need to specify xs.</p>\n  <div class="row">\n    <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>\n    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n  </div>\n  <div class="row">\n    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n  </div>\n  <div class="row">\n    <div class="col-xs-6">.col-xs-6</div>\n    <div class="col-xs-6">.col-xs-6</div>\n  </div>\n\n  <hr>\n\n  <h3>Mixed: mobile, tablet, and desktop</h3>\n  <p></p>\n  <div class="row">\n    <div class="col-xs-12 col-sm-6 col-lg-8">.col-xs-12 .col-sm-6 .col-lg-8</div>\n    <div class="col-xs-6 col-lg-4">.col-xs-6 .col-lg-4</div>\n  </div>\n  <div class="row">\n    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n  </div>\n\n  <hr>\n\n  <h3>Column clearing</h3>\n  <p><a href="http://getbootstrap.com/css/#grid-responsive-resets">Clear floats</a> at specific breakpoints to prevent awkward wrapping with uneven content.</p>\n  <div class="row">\n    <div class="col-xs-6 col-sm-3">\n      .col-xs-6 .col-sm-3\n      <br>\n      Resize your viewport or check it out on your phone for an example.\n    </div>\n    <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n\n    <!-- Add the extra clearfix for only the required viewport -->\n    <div class="clearfix visible-xs"></div>\n\n    <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n    <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n  </div>\n\n  <hr>\n\n  <h3>Offset, push, and pull resets</h3>\n  <p>Reset offsets, pushes, and pulls at specific breakpoints.</p>\n  <div class="row">\n    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>\n    <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n  </div>\n  <div class="row">\n    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>\n    <div class="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>\n  </div>\n</div> <!-- /container -->\n')})}),define("lsu-scheduler/templates/model",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var o,i="";return o=n._triageMustache.call(s,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("\n"),i})}),define("lsu-scheduler/templates/schedule",["ember","exports"],function(e,s){"use strict";var t=e["default"];s["default"]=t.Handlebars.template(function(e,s,n,a,l){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t.Handlebars.helpers),l=l||{};var o,i,r="",d=n.helperMissing,c=this.escapeExpression;return l.buffer.push('<div class="container">\n  <div class="page-header">\n    <h1>Scheduler</h1>\n    <p class="lead">Select a course you need to get started!</p>\n  </div>\n    '),l.buffer.push(c((o=n["schedule-component"]||s&&s["schedule-component"],i={hash:{theEvents:"model.events"},hashTypes:{theEvents:"ID"},hashContexts:{theEvents:s},contexts:[],types:[],data:l},o?o.call(s,i):d.call(s,"schedule-component",i)))),l.buffer.push("\n    <p>Gotcha. Doesn't work yet.</p>\n</div>\n"),r})}),define("lsu-scheduler/config/environment",["ember"],function(e){var s="lsu-scheduler/config/environment",t=e["default"].$('meta[name="'+s+'"]').attr("content"),n=JSON.parse(unescape(t));return{"default":n}}),runningTests?require("lsu-scheduler/tests/test-helper"):require("lsu-scheduler/app")["default"].create({});