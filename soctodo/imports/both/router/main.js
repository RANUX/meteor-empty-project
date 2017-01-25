import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'main',
  subscriptions() {

  },
  action() {
    BlazeLayout.render('layout', { main: 'main' });
  },
});
