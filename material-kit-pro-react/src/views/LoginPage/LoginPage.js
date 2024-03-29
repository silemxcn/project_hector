/*eslint-disable*/
import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Favorite from '@material-ui/icons/Favorite';
import Face from '@material-ui/icons/Face';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import logo from 'assets/img/logo.png';

import loginPageStyle from 'assets/jss/material-kit-pro-react/views/loginPageStyle.js';

import image from 'assets/img/hector_and_student.png';
import firebase from 'firebase/compat/app';
import { auth, signInUser } from 'firebase.js';

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	});
	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, seterror] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log('email,password', email, password);
		const res = await signInUser(email, password);
		console.log('res', res);
		setEmail('');
		setPassword('');
		if (res.error) seterror(res.error);
	};

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
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: 'url(' + image + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'top center',
				}}
			>
				<div className={classes.container}>
					<GridContainer justify='center'>
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<form className={classes.form} onSubmit={handleSubmit}>
									<CardHeader
										color='primary'
										signup
										className={classes.cardHeader}
									>
										<h4 className={classes.cardTitle}>Login</h4>
										<div className={classes.socialLine}>
											<Button
												justIcon
												color='transparent'
												className={classes.iconButtons}
												onClick={() =>
													auth.SignInWithRedirect(
														new firebase.auth.GoogleAuthProvider()
													)
												}
											>
												<i className='fab fa-google-plus-g' />
											</Button>
										</div>
									</CardHeader>
									<p className={classes.description + ' ' + classes.textCenter}>
										Or Be Classical
									</p>
									<CardBody signup>
										<CustomInput
											id='email'
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												placeholder: 'Email...',
												type: 'email',
												startAdornment: (
													<InputAdornment position='start'>
														<Email className={classes.inputIconsColor} />
													</InputAdornment>
												),
												value: email,
												required: true,
												onChange: (e) => setEmail(e.target.value),
											}}
										/>
										<CustomInput
											id='pass'
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												placeholder: 'Password',
												type: 'password',
												startAdornment: (
													<InputAdornment position='start'>
														<Icon className={classes.inputIconsColor}>
															lock_utline
														</Icon>
													</InputAdornment>
												),
												autoComplete: 'off',
												value: password,
												required: true,
												onChange: (e) => setPassword(e.target.value),
											}}
										/>
									</CardBody>
									<div className={classes.textCenter}>
										<Button simple color='primary' size='lg' type='submit'>
											Get started
										</Button>
									</div>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<Footer
					className={classes.footer}
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a
											href='https://www.creative-tim.com/?ref=mkpr-login'
											target='_blank'
											className={classes.block}
										></a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a
											href='https://www.creative-tim.com/presentation?ref=mkpr-login'
											target='_blank'
											className={classes.block}
										>
											About us
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a
											href='//blog.creative-tim.com/'
											className={classes.block}
										>
											Blog
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a
											href='https://www.creative-tim.com/license?ref=mkpr-login'
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
									href='https://www.creative-tim.com?ref=mkpr-login'
									target='_blank'
								>
									Sorin Gifei
								</a>{' '}
								for a better web
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
}
