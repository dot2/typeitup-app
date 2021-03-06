/*
* Routes: Public
* Routes that are visible to all (public) users.
*/

Router.route('index', {
  path: '/',
  template: 'index',
  onBeforeAction: function(){
    Session.set('currentRoute', 'index');
    this.next();
  }
});

Router.route('signup', {
  path: '/signup',
  template: 'signup',
  onBeforeAction: function(){
    Session.set('currentRoute', 'signup');
    Session.set('addingNewCreditCard', true);
    this.next();
  }
});

Router.route('login', {
  path: '/login',
  template: 'index',
  onBeforeAction: function(){
    Session.set('currentRoute', 'index');
    this.next();
  }
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function(){
    Session.set('currentRoute', 'recover-password');
    this.next();
  }
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'reset-password');
    Session.set('resetPasswordToken', this.params.token);
    this.next();
  }
});
