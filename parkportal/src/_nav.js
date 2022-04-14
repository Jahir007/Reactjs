import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
   cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'About',
    to: '/theme/about',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Owner',
    to: '/owner',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Owner',
        to: 'owner/addowner',
      },
      {
        component: CNavItem,
        name: 'View Owner',
        to: 'owner/viewowner',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Guest',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Guest',
        to: 'guest/addguest',
      },
     
      {
        component: CNavItem,
        name: 'View Guest',
        to: 'guest/viewguest',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Slot',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add SLot',
        to: 'slot/addslot',
      },
      {
        component: CNavItem,
        name: 'View Slot',
        to: 'slot/viewslot',
      },
      {
        component: CNavItem,
        name: 'Add Slot Transaction',
        to: 'slot/addslott',
      },
      {
        component: CNavItem,
        name: 'View Slot Transaction',
        to: 'slot/viewslott',
      },
    ],
  },


  {
    component: CNavGroup,
    name: 'Vehicle',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Vehicle',
        to: 'vehicle/addveh',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'View Vehicle',
        to: 'vehicle/viewveh',
      },
    ],
  },
 
  {
    component: CNavItem,
    name: 'Payment',
    to: '/payment',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
