import Home from '../components/frontend/Home'
import About from '../components/frontend/About'
// import Booking from '../components/frontend/Booking'
import Page403 from '../components/errors/Page403'
import Page404 from '../components/errors/Page404'
import Register from '../components/frontend/auth/Register'
import Login from '../components/frontend/auth/Login'
import ViewGuest from '../components/frontend/booking/ViewGuest'
import ViewSlottrans from '../components/frontend/booking/ViewSlottrans'

const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component:Home},
    {path: '/about', exact: true, name: 'About', component:About},
    {path: '/booking', exact: true, name: 'ViewGuest', component:ViewGuest},
    {path: '/booking/:slot_id', exact: true, name: 'ViewSlottrans', component:ViewSlottrans},
    {path: '/403', exact: true, name: 'Page403', component:Page403},
    {path: '/404', exact: true, name: 'Page404', component:Page404},
    {path: '/login', exact: true, name: 'Login', component:Login},
    {path: '/register', exact: true, name: 'Register', component:Register},
    
];

export default publicRoutesList;