/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import signupPageStyle from 'assets/jss/material-kit-pro-react/views/signupPageStyle.js';

import image from 'assets/img/simp.jpg';

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
	const [checked, setChecked] = React.useState([1]);
	const handleToggle = (value) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};
	React.useEffect(() => {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	});
	const classes = useStyles();
	return (
		<div>
			<Header
				absolute
				color='transparent'
				brand='Hector Castillo'
				links={<HeaderLinks dropdownHoverColor='rose' />}
				{...rest}
			/>
			<div
				className={classes.pageHeader}
				style={{
					// backgroundImage: 'url(' + image + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'top center',
				}}
			>
				<div className={classes.container}>
					<GridContainer justify='center'>
						<GridItem xs={12} sm={10} md={10}>
							<Card className={classes.cardSignup}>
								<h2 className={classes.cardTitle}>Register</h2>
								<CardBody>
									<GridContainer justify='center'>
										<GridItem xs={12} sm={5} md={5}>
											<InfoArea
												className={classes.infoArea}
												title='The Science of Dating: Strategies for Finding the Perfect Match'
												description='I’m going to help teach you how to get what you want in your dating life. '
												icon={Timeline}
												iconColor='rose'
											/>
											<InfoArea
												className={classes.infoArea}
												title='Unlocking Your Dating Potential: Tips for Success'
												description='Do you want more dates and girls?'
												icon={Code}
												iconColor='primary'
											/>
											<InfoArea
												className={classes.infoArea}
												title='Finding Love: How to Get the Girl of Your Dreams'
												description='or do you want that one special girl to settle down with'
												icon={Group}
												iconColor='info'
											/>
										</GridItem>
										<GridItem xs={12} sm={5} md={5}>
											<div className={classes.textCenter}>
												<Button justIcon round color='twitter'>
													<i className={classes.socials + ' fab fa-twitter'} />
												</Button>
												{` `}
												<Button justIcon round color='dribbble'>
													<i className={classes.socials + ' fab fa-dribbble'} />
												</Button>
												{` `}
												<Button justIcon round color='facebook'>
													<i
														className={classes.socials + ' fab fa-facebook-f'}
													/>
												</Button>
												{` `}
												<h4 className={classes.socialTitle}>or be classical</h4>
											</div>
											<form className={classes.form}>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														startAdornment: (
															<InputAdornment
																position='start'
																className={classes.inputAdornment}
															>
																<Face className={classes.inputAdornmentIcon} />
															</InputAdornment>
														),
														placeholder: 'First Name...',
													}}
												/>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														startAdornment: (
															<InputAdornment
																position='start'
																className={classes.inputAdornment}
															>
																<Email className={classes.inputAdornmentIcon} />
															</InputAdornment>
														),
														placeholder: 'Email...',
													}}
												/>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														startAdornment: (
															<InputAdornment
																position='start'
																className={classes.inputAdornment}
															>
																<Icon className={classes.inputAdornmentIcon}>
																	lock_outline
																</Icon>
															</InputAdornment>
														),
														placeholder: 'Password...',
													}}
												/>
												<FormControlLabel
													classes={{
														label: classes.label,
													}}
													control={
														<Checkbox
															tabIndex={-1}
															onClick={() => handleToggle(1)}
															checkedIcon={
																<Check className={classes.checkedIcon} />
															}
															icon={<Check className={classes.uncheckedIcon} />}
															classes={{
																checked: classes.checked,
																root: classes.checkRoot,
															}}
															checked={checked.indexOf(1) !== -1 ? true : false}
														/>
													}
													label={
														<span>
															I agree to the{' '}
															<a href='#pablo'>terms and conditions</a>.
														</span>
													}
												/>
												<div className={classes.textCenter}>
													<Button round color='primary'>
														Get started
													</Button>
												</div>
											</form>
										</GridItem>
									</GridContainer>
								</CardBody>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<Footer
					content={
						<div>
							<div className={classes.left}>
								{/* <List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a
											href='https://www.creative-tim.com/?ref=mkpr-signup'
											target='_blank'
											className={classes.block}
										>
											Creative Tim
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a
											href='https://www.creative-tim.com/presentation?ref=mkpr-signup'
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
											href='https://www.creative-tim.com/license?ref=mkpr-signup'
											target='_blank'
											className={classes.block}
										>
											Licenses
										</a>
									</ListItem>
								</List> */}
							</div>
							<div className={classes.right}>
								&copy; {1900 + new Date().getYear()} , made with{' '}
								<Favorite className={classes.icon} /> by{' '}
								<a
									href='https://www.creative-tim.com?ref=mkpr-signup'
									target='_blank'
								>
									Sorin Gifei
								</a>{' '}
								for a better web.
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
}
