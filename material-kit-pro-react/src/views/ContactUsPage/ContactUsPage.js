/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components used to create a google map
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import PinDrop from '@material-ui/icons/PinDrop';
import Phone from '@material-ui/icons/Phone';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Footer from 'components/Footer/Footer.js';
import Parallax from 'components/Parallax/Parallax.js';
import logo from 'assets/img/logo.png';

import contactUsStyle from 'assets/jss/material-kit-pro-react/views/contactUsStyle.js';

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
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

			<Parallax image={require('assets/img/simp.jpg')} filter='dark'>
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
				<div className={classes.contactContent}>
					<div className={classes.container}>
						<h2 className={classes.title}>Send me a message</h2>
						<GridContainer>
							<GridItem md={6} sm={6}>
								<p>
									You can contact me with anything related to my Products. I'll
									{"'"}ll get in touch with you as soon as possible.
									<br />
									<br />
								</p>
								<form>
									<CustomInput
										labelText='Your Name'
										id='float'
										formControlProps={{
											fullWidth: true,
										}}
									/>
									<CustomInput
										labelText='Email address'
										id='float'
										formControlProps={{
											fullWidth: true,
										}}
									/>
									<CustomInput
										labelText='Phone'
										id='float'
										formControlProps={{
											fullWidth: true,
										}}
									/>
									<CustomInput
										labelText='Your message'
										id='float'
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											multiline: true,
											rows: 6,
										}}
									/>
									<div className={classes.textCenter}>
										<Button color='primary' round>
											Contact me
										</Button>
									</div>
								</form>
							</GridItem>
							<GridItem md={4} sm={4} className={classes.mlAuto}>
								<InfoArea
									className={classes.info}
									title='For now only in Romania'
									description={
										<p>
											Bucharest, <br /> Romania
										</p>
									}
									icon={PinDrop}
									iconColor='primary'
								/>
								<InfoArea
									className={classes.info}
									title='Give me a ring'
									description={
										<p>
											Hector <br /> skypeAdress <br /> Mon - Fri, 8:00-22:00
										</p>
									}
									icon={Phone}
									iconColor='primary'
								/>
								<InfoArea
									className={classes.info}
									title='Legal Information'
									description={
										<p>
											VAT · EN2341 <br /> IBAN · EN8732123 <br /> Bank · Great
											Britain Bank
										</p>
									}
									icon={BusinessCenter}
									iconColor='primary'
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<Footer
				content={
					<div>
						<div className={classes.left}>
							<List className={classes.list}>
								<ListItem className={classes.inlineBlock}>
									<a
										href='https://www.creative-tim.com/presentation?ref=mkpr-contact-us'
										target='_blank'
										className={classes.block}
									>
										About us
									</a>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<a href='//blog.creative-tim.com/' className={classes.block}>
										Blog
									</a>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<a
										href='https://www.creative-tim.com/license?ref=mkpr-contact-us'
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
							<a
								href='https://www.creative-tim.com?ref=mkpr-contact-us'
								target='_blank'
							>
								Gifei Sorin
							</a>{' '}
							for a better web.
						</div>
					</div>
				}
			/>
		</div>
	);
}
