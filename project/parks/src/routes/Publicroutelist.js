import Home from '../components/frontend/Home'
import About from '../components/frontend/About'
// import Booking from '../components/frontend/Booking'
import Page403 from '../components/errors/Page403'
import Page404 from '../components/errors/Page404'
import Register from '../components/frontend/auth/Register'
import Login from '../components/frontend/auth/Login'
import ViewSlottrans from '../components/frontend/bookings/ViewSlottrans'
import ViewGuest from '../components/frontend/bookings/ViewGuest'


const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component:Home},
    {path: '/about', exact: true, name: 'About', component:About},
    {path: '/bookings', exact: true, name: 'ViewSlottrans', component:ViewSlottrans},
    {path: '/bookings/:slug', exact: true, name: 'ViewGuest', component:ViewGuest},
    {path: '/403', exact: true, name: 'Page403', component:Page403},
    {path: '/404', exact: true, name: 'Page404', component:Page404},
    {path: '/login', exact: true, name: 'Login', component:Login},
    {path: '/register', exact: true, name: 'Register', component:Register},
    
];

export default publicRoutesList;