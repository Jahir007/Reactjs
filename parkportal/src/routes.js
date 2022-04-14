import React from 'react'



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const About = React.lazy(() => import('./views/theme/About'))
const Typography = React.lazy(() => import('./views/theme/Typography'))

// Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const AddOwner = React.lazy(() => import('./views/owner/AddOwner'))
const ViewOwner = React.lazy(() => import('./views/owner/ViewOwner'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const AddGuest = React.lazy(() => import('./views/guest/AddGuest'))
const ViewGuest = React.lazy(() => import('./views/guest/ViewGuest'))


// Icons
const AddVeh = React.lazy(() => import('./views/vehicle/AddVeh'))
const ViewVeh = React.lazy(() => import('./views/vehicle/ViewVeh'))

// Notifications
const AddSlot = React.lazy(() => import('./views/slot/AddSlot'))
const ViewSlot = React.lazy(() => import('./views/slot/ViewSlot'))
const AddSlotT = React.lazy(() => import('./views/slot/AddSlotT'))
const ViewSlott = React.lazy(() => import('./views/slot/ViewSlotT'))

const Payment = React.lazy(() => import('./views/payment/Payment'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/about', name: 'About', element: About },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/owner', name: 'Owner', element: owner, exact: true },
  { path: '/owner/addowner', name: 'AddOwner', element: AddOwner, exact: true },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/owner/viewowner', name: 'ViewOwner', element: ViewOwner,exact: true },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/guest/addguest', name: 'Add Guest', element: AddGuest, exact: true },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  { path: '/guest/viewguest', name: 'View Guest', element: ViewGuest, exact: true },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/vehicle/addveh', name: 'Add Vehicle', element: AddVeh },
  { path: '/vehicle/viewveh', name: 'View Vehicle', element: ViewVeh },
  
  { path: '/slot/addslot', name: 'Add Slot', element: AddSlot, exact: true },
  { path: '/slot/viewslot', name: 'View Slot', element: ViewSlot,exact: true },
  { path: '/slot/addslott', name: 'Add Slot Transaction', element: AddSlotT, exact: true },
  { path: '/slot/viewslott', name: 'View Slot Transaction', element: ViewSlott, exact: true },
  { path: '/payment', name: 'Payment', element: Payment, exact: true },
]

export default routes
