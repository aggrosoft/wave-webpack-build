import { library, dom, config } from '@fortawesome/fontawesome-svg-core'
// config.searchPseudoElements = true

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
  faPaypal,
  faFacebookF,
  faTwitter,
  faYoutube,
  faWordpress,
  faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons'

import {
  faStar as faStarRegular
} from '@fortawesome/free-regular-svg-icons'

// We are only using the user-astronaut icon
library.add(
  faShoppingCart,
  faAngleDown,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faRss,
  faStar,
  faStarRegular,
  faBars,
  faChevronCircleUp,
  faCircle,
  faAngleLeft,
  faAngleRight,
  faUser,
  faSearch,
  faGift,
  faSync,
  faPaypal,
  faFacebookF,
  faTwitter,
  faYoutube,
  faWordpress,
  faGooglePlusSquare
  )

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
