import React from 'react';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import CardMembership from '@material-ui/icons/CardMembership';
import CardGiftCard from '@material-ui/icons/CardGiftcard';
import AttachMoney from '@material-ui/icons/AttachMoney';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import featuresStyle from 'assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js';

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
	const classes = useStyles();
	return (
		<div className={classes.featuresSection}>
			<div className={classes.textCenter}>
				<h3 className={classes.title}>Frequently Asked Questions</h3>
			</div>
			<GridContainer>
				<GridItem md={4} sm={4} className={classes.mlAuto}>
					<InfoArea
						title='Can I cancel my subscription?'
						description='Yes, you can cancel and perform other actions on your subscriptions via the My Account page.'
						icon={CardMembership}
						iconColor='info'
					/>
				</GridItem>
				<GridItem md={4} sm={4} className={classes.mrAuto}>
					<InfoArea
						title='What kind of results can I expect from coaching?'
						description='Clients can expect to gain greater self-awareness, develop more effective communication and interpersonal skills, and achieve their personal goals more efficiently.'
						icon={CardGiftCard}
						iconColor='success'
					/>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem md={4} sm={4} className={classes.mlAuto}>
					<InfoArea
						title='Which payment methods do you take?'
						description='WooCommerce comes bundled with PayPal (for accepting credit card and PayPal account payments), BACS, and cash on delivery for accepting payments.'
						icon={AttachMoney}
						iconColor='success'
					/>
				</GridItem>
				<GridItem md={4} sm={4} className={classes.mrAuto}>
					<InfoArea
						title='Any other questions we can answer?'
						description='Please feel free to leave a message, and I will be more than happy to assist you.'
						icon={QuestionAnswer}
						iconColor='rose'
					/>
				</GridItem>
			</GridContainer>
		</div>
	);
}
