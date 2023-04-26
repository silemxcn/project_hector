import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import 'assets/scss/material-kit-pro-react.scss?v=1.9.0';

import AboutUsPage from 'views/AboutUsPage/AboutUsPage.js';
import BlogPostPage from 'views/BlogPostPage/BlogPostPage.js';
import BlogPostsPage from 'views/BlogPostsPage/BlogPostsPage.js';
import ComponentsPage from 'views/ComponentsPage/ComponentsPage.js';
import ContactUsPage from 'views/ContactUsPage/ContactUsPage.js';
import EcommercePage from 'views/EcommercePage/EcommercePage.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import PresentationPage from 'views/PresentationPage/PresentationPage.js';
import PricingPage from 'views/PricingPage/PricingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import ProductPage from 'views/ProductPage/ProductPage.js';
import SectionsPage from 'views/SectionsPage/SectionsPage.js';
import ShoppingCartPage from 'views/ShoppingCartPage/ShoppingCartPage.js';
import SignupPage from 'views/SignupPage/SignupPage.js';
import ErrorPage from 'views/ErrorPage/ErrorPage.js';
// import { Login } from 'components/Login';
// import { Profile } from 'components/Profile';
// import { AuthProvider } from 'contexts/AuthContext';

// import firebase from 'firebase';
// require('firebase/auth');

var hist = createBrowserHistory();

ReactDOM.render(
	//history={hist}
	<Router history={hist}>
		{/* <AuthProvider> */}
		<Switch>
			<Route path='/about-us' component={AboutUsPage} />
			<Route path='/blog-post' component={BlogPostPage} />
			<Route path='/blog-posts' component={BlogPostsPage} />
			<Route path='/components' component={ComponentsPage} />
			<Route path='/contact-us' component={ContactUsPage} />
			<Route path='/ecommerce-page' component={EcommercePage} />
			<Route path='/landing-page' component={LandingPage} />
			<Route path='/login-page' component={LoginPage} />
			<Route path='/profile-page' component={ProfilePage} />
			<Route path='/product-page' component={ProductPage} />
			<Route path='/sections' component={SectionsPage} />
			<Route path='/shopping-cart-page' component={ShoppingCartPage} />
			<Route path='/signup-page' component={SignupPage} />
			<Route path='/error-page' component={ErrorPage} />
			<Route path='/pricing' component={PricingPage} />
			<Route path='/' component={PresentationPage} />
		</Switch>
		{/* </AuthProvider> */}
	</Router>,
	document.getElementById('root')
);
