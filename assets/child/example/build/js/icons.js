import { library, dom, config } from '@fortawesome/fontawesome-svg-core'
config.searchPseudoElements = true

import {
  faShoppingCart,
  faCircle,
  faAngleDown,
  faAngleRight,
  faAngleLeft,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faRss,
  faStar,
  faBars,
  faChevronCircleUp,
  faUser,
  faSearch,
  faGift,
  faSync
} from '@fortawesome/free-solid-svg-icons'

import {
  faPaypal
} from '@fortawesome/free-brands-svg-icons'

import {
  faStar as faStarRegular
} from '@fortawesome/free-regular-svg-icons'

// We are only using the user-astronaut icon
library.add(faShoppingCart)
library.add(faAngleDown)
library.add(faCaretDown)
library.add(faCaretRight)
library.add(faCaretLeft)
library.add(faRss)
library.add(faStar)
library.add(faStarRegular)
library.add(faBars)
library.add(faChevronCircleUp)
library.add(faCircle)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faUser)
library.add(faSearch)
library.add(faGift)
library.add(faSync)
library.add(faPaypal)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
