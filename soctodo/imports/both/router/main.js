FlowRouter.route('/', {
    name: 'main',
    subscriptions: function (params) {

    },
    action: function() {
      BlazeLayout.render('layout', {main: 'main'});
    }
});
