import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import pricingStyle from 'assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js';

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
	const classes = useStyles();
	return (
		<div className={classes.pricingSection}>
			<GridContainer>
				<GridItem
					md={6}
					sm={6}
					className={classNames(
						classes.mrAuto,
						classes.mlAuto,

						classes.textCenter
					)}
				>
					<NavPills
						alignCenter
						color='rose'
						tabs={[
							{
								tabButton: 'book a call today',
							},
							{
								tabButton: 'text',
							},
						]}
					/>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem md={4} sm={4}>
					<Card plain pricing>
						<CardBody pricing>
							<h6
								className={classNames(classes.cardCategory, classes.textInfo)}
							>
								Standard
							</h6>
							<h1 className={classes.cardTitle}>
								<small>$</small>527
							</h1>
							<ul>
								<li>
									<b>1</b> Session
								</li>
								<li>
									<b>An Hour</b> One-To-One Session With Hector Castillo
								</li>
								<li>
									<b>Tailored Advice</b> Personal Contacts
								</li>
								<li>
									<b>A gameplan</b> For Your Future
								</li>
							</ul>
							<Button href='#pablo' color='rose' round>
								Get started
							</Button>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4} sm={4}>
					<Card raised pricing color='rose'>
						<CardBody pricing>
							<h6 className={classes.cardCategory}>Premium</h6>
							<h1 className={classes.cardTitleWhite}>
								<small>$</small>1999
							</h1>
							<ul>
								<li>
									<b>5</b> Sessions
								</li>
								<li>
									<b>A 5 Week</b> Plan Tailored Just For You And Your Needs
								</li>
								<li>
									<b>10 Week Period</b> From Purchase Date To Use Your Training
									Package
								</li>
								<li>
									<b>Priority</b> Access To Hector
								</li>
							</ul>
							<Button href='#pablo' color='white' round>
								Get started
							</Button>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4} sm={4}>
					<Card plain pricing>
						<CardBody pricing>
							<h6
								className={classNames(classes.cardCategory, classes.textInfo)}
							>
								Platinum
							</h6>
							<h1 className={classes.cardTitle}>
								<small>$</small>3999
							</h1>
							<ul>
								<li>
									<b>12 Sessions</b> Of One-To-One Coaching
								</li>
								<li>
									<b>A 10 Week Plan</b> Tailored To Improve Your Skill
								</li>
								<li>
									<b>15 Week Plan</b> From Purchase Date To Use Your Training
									Package
								</li>
								<li>
									<b>Access</b> To Exclusive Content
								</li>
							</ul>
							<Button href='#pablo' color='rose' round>
								Get started
							</Button>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
