
/////////////////////////////////////////////////////////////////////////

import Notifications from '../pages/html/messaging/messaging-index.f7';

import SettingsPage from '../pages/html/settings/settings-index.f7';

/////////////////////////////////////////////////////////////////////////

import AuthSignInPage from '../pages/html/auth/auth-signin.f7';
import AuthSignUpPage from '../pages/html/auth/auth-signup.f7';
import AuthRecoverPasswordPage from '../pages/html/auth/auth-recover-password.f7';
import AuthLockScreenPage from '../pages/html/auth/auth-lock-screen.f7';

/////////////////////////////////////////////////////////////////////////

import HomeScreen from '../pages/html/niche/home.f7';

import AboutPage from '../pages/html/niche/about.f7';

import ContactsPage from '../pages/html/niche/about.f7';

/////////////////////////////////////////////////////////////////////////

import SearchPage from '../pages/html/misc/search.f7';

import FavouritesPage from '../pages/html/misc/favourites.f7';

import HelpPage from '../pages/html/misc/help.f7';

/////////////////////////////////////////////////////////////////////////

import NicheAddresses from '../pages/html/niche/addresses/addresses-index.f7';

import NicheAddressDetails from '../pages/html/niche/addresses/address-details.f7';

import NicheCart from '../pages/html/niche/cart/cart-index.f7';

import NicheOrders from '../pages/html/niche/orders/orders-index.f7';

import NicheOrderDetails from '../pages/html/niche/orders/order-details.f7';

import NicheMenu from '../pages/html/niche/menu/menu-index.f7';

import NicheMenuProduct from '../pages/html/niche/menu/menu-product.f7';

import NicheMaps from '../pages/html/niche/maps/maps-index.f7';

import NicheTrack from '../pages/html/niche/maps/maps-track.f7';

import NicheTransactions from '../pages/html/niche/transactions/transactions-index.f7';

import NicheTransactionDetails from '../pages/html/niche/transactions/transaction-details.f7';

import NicheAdmin from '../pages/html/niche/admin/admin-index.f7';

import NicheAdminCallCenter from '../pages/html/niche/admin/admin-call-center.f7';

import NicheAdminDriver from '../pages/html/niche/admin/admin-driver.f7';

/////////////////////////////////////////////////////////////////////////

import PanelLeftDefault from '../pages/html/panels/panel-left-default.f7';
import PanelRightDefault from '../pages/html/panels/panel-right-default.f7';

/////////////////////////////////////////////////////////////////////////

import NotFoundPage from '../pages/html/niche/about.f7';

/////////////////////////////////////////////////////////////////////////

var routes = [
    {
        path: '/',
        component: HomeScreen,
    },
    {
        path: '/home/',
        component: HomeScreen,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/contacts/',
        component: ContactsPage,
    },
    {
        path: '/notifications/',
        component: Notifications,
    },
    {
        path: '/settings/',
        component: SettingsPage,
    },
    {
        path: '/auth-sign-in/',
        component: AuthSignInPage,
    },
    {
        path: '/auth-sign-up/',
        component: AuthSignUpPage,
    },
    {
        path: '/auth-recover-password/',
        component: AuthRecoverPasswordPage,
    },
    {
        path: '/auth-lock-screen/',
        component: AuthLockScreenPage,
    },
    {
        path: '/panel-left-default/',
        component: PanelLeftDefault,
    },
    {
        path: '/panel-right-default/',
        component: PanelRightDefault,
    },

    //////////////////////////////////////////

    {
        path: '/cart/',
        component: NicheCart,
    },
    {
        path: '/menu/',
        component: NicheMenu,
    },
    {
        path: '/menu/:categorySlug/:productIndex/:productId/:productGAAPCODE/',
        component: NicheMenuProduct,
    },
    {
        path: '/orders/',
        component: NicheOrders,
    },
    {
        path: '/order/:orderID/:orderNumber/',
        component: NicheOrderDetails,
    },
    {
        path: '/addresses/',
        component: NicheAddresses,
    },
    {
        path: '/address/:addressID/',
        component: NicheAddressDetails,
    },
    {
        path: '/maps/',
        component: NicheMaps,
    },
    {
        path: '/track/:orderID/:orderNumber/',
        component: NicheTrack,
    },
    {
        path: '/transactions/',
        component: NicheTransactions,
    },
    {
        path: '/transaction/:transactionsRef/',
        component: NicheTransactionDetails,
    },

    {
        path: '/admin/',
        component: NicheAdmin,
    },
    {
        path: '/admin/call-center/',
        component: NicheAdminCallCenter,
    },
    {
        path: '/admin/driver/',
        component: NicheAdminDriver,
    },

    //////////////////////////////////////////

    {
        path: '/favourites/',
        component: FavouritesPage,
    },
    {
        path: '/search/',
        component: SearchPage,
    },
    {
        path: '/help/',
        component: HelpPage,
    },

    //////////////////////////////////////////

    {
        path: '(.*)',
        component: NotFoundPage,
    },


];

export default routes;