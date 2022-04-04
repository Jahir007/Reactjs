import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Owner from '../components/admin/Owner';

const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-owner', exact: true, name: 'Owner', component: Owner },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;