/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Footer from 'components/Footer/Footer.js';
// import { useHistory } from 'react-router-dom';
// import { auth } from 'firebase.js';
// sections for this page
import SectionPricing from 'views/PricingPage/Sections/SectionPricing.js';
import SectionFeatures from 'views/PricingPage/Sections/SectionFeatures.js';

import pricingStyle from 'assets/jss/material-kit-pro-react/views/pricingStyle.js';
import logo from 'assets/img/logo.png';

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	});
	const classes = useStyles();
	return (
		<div>
			<Header
				image={require('assets/img/logo.png')}
				brand={
					<img
						src={logo}
						alt='logo'
						style={{ width: 'auto', height: '4rem' }}
					/>
				}
				links={<HeaderLinks dropdownHoverColor='info' />}
				fixed
				color='transparent'
				changeColorOnScroll={{
					height: 300,
					color: 'info',
				}}
			/>

			<Parallax
				image={require('assets/img/hectorClassroom.png')}
				filter='dark'
				small
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							md={8}
							sm={8}
							className={classNames(
								classes.mlAuto,
								classes.mrAuto,
								classes.textCenter
							)}
						>
							<h1 className={classes.title}>Let{"'"}s get started</h1>
							<h4>
								With my coaching services, you not only get access to my
								top-notch guidance and expertise, but you can also receive
								coaching through multiple channels to suit your needs and
								lifestyle. Whether it's a one-on-one session, phone call, text
								message, or video conference, we offer flexible options to
								ensure that you receive the support you need when you need it
								most. With a personalized approach, you can be sure that you'll
								get the attention and care you deserve as we work together to
								create a gameplan for your success. Don't wait - take the first
								step towards your future and start your journey today!
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<SectionPricing />
					<hr />
					<SectionFeatures />
				</div>
			</div>
			<Footer
				content={
					<div>
						<div className={classes.left}>
							<List className={classes.list}>
								<ListItem className={classes.inlineBlock}>
									<a
										href='https://www.creative-tim.com/?ref=mkpr-pricing'
										target='_blank'
										className={classes.block}
									></a>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<a
										href='https://www.creative-tim.com/presentation?ref=mkpr-pricing'
										target='_blank'
										className={classes.block}
									>
										About
									</a>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<a href='//blog.creative-tim.com/' className={classes.block}>
										Blog
									</a>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<a
										href='https://www.creative-tim.com/license?ref=mkpr-pricing'
										target='_blank'
										className={classes.block}
									>
										Licenses
									</a>
								</ListItem>
							</List>
						</div>
						<div className={classes.right}>
							&copy; {1900 + new Date().getYear()} , made with{' '}
							<Favorite className={classes.icon} /> by{' '}
							<a target='_blank'>Sorin Gifei</a> for a better web.
						</div>
					</div>
				}
			/>
		</div>
	);
}
