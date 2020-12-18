import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCircle, faAngleDown, faAngleRight, faCaretDown, faCaretRight, faCaretLeft, faRss, faStar, faBars, faChevronCircleUp, faUser } from '@fortawesome/free-solid-svg-icons'

// We are only using the user-astronaut icon
library.add(faShoppingCart)
library.add(faAngleDown)
library.add(faCaretDown)
library.add(faCaretRight)
library.add(faCaretLeft)
library.add(faRss)
library.add(faStar)
library.add(faBars)
library.add(faChevronCircleUp)
library.add(faCircle)
library.add(faAngleRight)
library.add(faUser)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
