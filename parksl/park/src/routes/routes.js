import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Owner from '../components/admin/owner/Owner';
import ViewOwner from '../components/admin/owner/ViewOwner';
import EditOwner from '../components/admin/owner/EditOwner';


const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-owner', exact: true, name: 'Owner', component: Owner },
    { path: '/admin/view-owner', exact: true, name: 'ViewOwner', component: ViewOwner },
    { path: '/admin/edit-owner/:id', exact: true, name: 'EditOwner', component: EditOwner },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;