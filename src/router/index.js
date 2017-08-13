import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import PastEvents from '@/pages/PastEvents';
import Whoweare from '@/pages/Whoweare';
import Impressum from '@/pages/Impressum';
import Join from '@/pages/Join';
import Contact from '@/pages/Contact';
import Fifa from '@/pages/Fifa';
import Hearthstone from '@/pages/Hearthstone';
import UpcomingEvents from '@/pages/UpcomingEvents';
import Tournament from '@/pages/Tournament';
import TournamentDetails from '@/pages/TournamentDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pastevents',
      name: 'PastEvents',
      component: PastEvents,
    },
    {
      path: '/whoweare',
      name: 'Whoweare',
      component: Whoweare,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum,
    },
    {
      path: '/join',
      name: 'Join',
      component: Join,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/fifa',
      name: 'Fifa',
      component: Fifa,
    },
    {
      path: '/hearthstone',
      name: 'Hearthstone',
      component: Hearthstone,
    },
    {
      path: '/upcoming',
      name: 'UpcomingEvents',
      component: UpcomingEvents,
    },
    {
      path: '/tournament',
      name: 'Tournament',
      component: Tournament,
    },
    {
      path: '/tournament/detail',
      name: 'TournamentDetails',
      component: TournamentDetails,
    },
  ],
});
