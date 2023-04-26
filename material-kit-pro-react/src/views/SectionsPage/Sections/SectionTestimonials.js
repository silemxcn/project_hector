import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import FormatQuote from '@material-ui/icons/FormatQuote';
import Star from '@material-ui/icons/Star';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import Muted from 'components/Typography/Muted.js';
import Warning from 'components/Typography/Warning.js';

import testimonialsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js';

import dg2 from 'assets/img/dg2.jpg';
import cardProfile1Square from 'assets/img/faces/tahir.jpg';
import cardProfile2Square from 'assets/img/faces/michael.png';
import cardProfile4Square from 'assets/img/faces/benjamin.png';
import cardProfile6Square from 'assets/img/faces/card-profile6-square.jpg';
import kendall from 'assets/img/faces/kendall.jpg';
import christian from 'assets/img/faces/christian.jpg';

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
	};
	return (
		<div className='cd-section' {...rest}>
			{/* Testimonials 1 START */}
			<div
				className={classes.testimonials + ' ' + classes.sectionImage}
				style={{ backgroundImage: `url(${dg2})` }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={6}
							md={6}
							className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}
						>
							<h2 className={classes.title}>My Clients Love The Program</h2>
							<h5 className={classes.description}>
								You need more information? Check what other persons are saying
								about our product. They are very happy with their purchase.
							</h5>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote />
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										{'"'}After fighting a breakup slump, I was having an issue
										with negativity and girls. Hector not only helped me see
										girls in a positive light again, but through coaching we
										identified key fixes that were holding me back from laying
										new girls. We worked out that I was being deadpan and a
										little too smooth and flat around females. Hector suggested
										I become more passionate, and I immediately started having
										better connections. Through focused coaching sessions I
										began to bust through “walls” and started to bring my dating
										game to life again. I{"'"}ve come to lessons that would have
										taken a year or more to figure out on my own. Hector not
										only helped me break a dry streak and get laid, but now I
										{"'"}m better with girls than I{"'"}ve ever been before, and
										getting better with every encounter!{'"'}
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>Tahir</h4>
									<h6 className={classes.cardCategory}>@TAHIRK</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href='#pablo' onClick={(e) => e.preventDefault()}>
											<img src={cardProfile1Square} alt='...' />
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote />
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										{'"'}I have really had a big problem approaching beautiful
										women my whole life. I have never known what to say around
										them but ever since I{"'"}ve been working with Hector his
										very well ordered and thoughtful perspectives have helped me
										and continue to help me become better and better at knowing
										how to approach women, what to say, how to dress, eye
										contact, persistence, texting, talking and staying sharp. I
										would highly recommend him to anyone who wants a dedicated
										and genuinely talented coach because I believe he cares
										about his students, is always posting insightful commentary
										on his Instagram feed and has some of the best content
										matter in his videos I have ever seen. His coaching and his
										writing make a superb mixture of everything any aspirant
										would want to know about women, dating and life. I highly
										recommend him and look forward to learning more and more
										from him every single day .{'"'}
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>Benjamin</h4>
									<h6 className={classes.cardCategory}>@BENJAMINM</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href='#pablo' onClick={(e) => e.preventDefault()}>
											<img src={cardProfile4Square} alt='...' />
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote />
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										{'"'}Getting Hector{"'"}s coaching was one of the best
										decisions I{"'"}ve ever made. Before our sessions, I was
										trying to put together all of the pieces of seduction
										myself. I was doing alright, but hadn{"'"}t reached the
										level of success I knew I wanted so very much. Just hours
										after talking with him, my FIRST approach turned into one of
										my most memorable lays... and in the following week several
										new women joined me in bed. It felt incredible. He knew
										exactly what I was missing and injected me with the
										information, the technique, and the passion to go out and
										kill it. His social intuition is unmatched. The lessons he
										taught me have stuck in my head years after and still
										motivate me to improve myself as a human being. {'"'}
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>Alex</h4>
									<h6 className={classes.cardCategory}>@ALEXA</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href='#pablo' onClick={(e) => e.preventDefault()}>
											<img src={cardProfile2Square} alt='...' />
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Testimonials 1 END */}
			{/* Testimonials 2 START */}
			<div
				className={
					classes.testimonials +
					' ' +
					classes.sectionDark +
					' ' +
					classes.testimonial2
				}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<Carousel {...settings}>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												<img src={christian} alt='...' />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												{'"'}Before I found your coaching services, I was
												struggling to navigate the tricky waters of dating.
												Despite receiving plenty of attention from women, I
												found myself unable to close the deal and move things
												forward. It seemed that no matter what approach I took,
												girls would either go cold or demand an unreasonable
												number of dates before anything physical would happen. I
												found myself trapped in a frustrating cycle, where I was
												either too aloof and cool for school, or too nice and
												never getting anywhere. I knew that being a full-on
												alpha "fuck boy" wasn't a sustainable strategy, but I
												was at a loss as to how to bridge the gap between the
												two extremes. That's where your coaching came in.
												Through our coaching calls, I learned how to become the
												romantic lover that women crave. You taught me how to
												give them the boyfriend feelings they desire, while
												still being able to move quickly and pursue my own
												desires with passion. The transformation was incredible.
												I suddenly found myself able to give women the romantic
												experiences they craved, without having to sacrifice my
												own desires in the process. This new approach has been
												sustainable and successful, allowing me to build deeper
												connections with women while still moving forward at a
												pace that works for me. Your coaching has truly changed
												my dating life for the better, and I can't thank you
												enough for the guidance and support you provided along
												the way{'"'}
											</h5>
											<h4 className={classes.cardTitle}>Kyle T</h4>
											{/* <Muted>
												<h6>Designer @ Louboutin & Co.</h6>
											</Muted> */}
										</CardBody>
										<div>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
										</div>
									</Card>
								</div>
								<div>
									<Card
										testimonial
										plain
										className={classes.card2}
										justifyContent='center'
										alignItems='center'
									>
										<CardAvatar testimonial plain>
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												<img src={kendall} alt='...' />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												{'"'}Hector was the best investment I made in myself!
												More than anything, he taught me how to unapologetically
												be myself and that has helped in every aspect of my
												life, from women to work to everything in between. He
												knows how people work more than anyone else I{"'"}ve
												ever met. Hector has an intuition about people that is
												rarely wrong, and as a mentor he teaches you about
												yourself in a few weeks that would otherwise take you
												years to learn by yourself. He will tell you what you
												need to hear, not necessarily what you want to hear, and
												that helps you grow into a better, well-rounded person.
												I would recommend everyone to learn from him, but it
												{"'"}s a shame he{"'"}s only one person because the
												whole world can learn something from his wisdom.{'"'}
											</h5>
											<h4></h4>
											<h4 className={classes.cardTitle}>Andre</h4>
											{/* <Muted>
												<h6>CEO @ Marketing Digital Ltd.</h6>
											</Muted> */}
										</CardBody>
										<div>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
											<Warning>
												<Star className={classes.starIcons} />
											</Warning>
										</div>
									</Card>
								</div>
							</Carousel>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Testimonials 2 END */}
			{/* Testimonials 3 START */}
			<div className={classes.testimonials}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={6}
							md={6}
							className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}
						>
							<h2 className={classes.title}>What Clients Say</h2>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial plain>
								<CardAvatar testimonial plain>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<img src={cardProfile1Square} alt='...' />
									</a>
								</CardAvatar>
								<CardBody plain>
									<h4 className={classes.title}>Mike Andrew</h4>
									<Muted>
										<h6>CEO @ MARKETING DIGITAL LTD.</h6>
									</Muted>
									<h5 className={classes.cardDescription}>
										{'"'}I speak yell scream directly at the old guard on behalf
										of the future. I gotta say at that time I’d like to meet
										Kanye I speak yell scream directly at the old guard on
										behalf of the future.{'"'}
									</h5>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial plain>
								<CardAvatar testimonial plain>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<img src={cardProfile4Square} alt='...' />
									</a>
								</CardAvatar>
								<CardBody plain>
									<h4 className={classes.title}>Tina Thompson</h4>
									<Muted>
										<h6>MARKETING @ APPLE INC.</h6>
									</Muted>
									<h5 className={classes.cardDescription}>
										{'"'}I promise I will never let the people down. I want a
										better life for all!!! Pablo Pablo Pablo Pablo! Thank you
										Anna for the invite thank you to the whole Vogue team It
										wasn’t any Kanyes I love Rick Owens’ bed design but the back
										is too high for the beams and angle of the ceiling{'"'}
									</h5>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<Card testimonial plain>
								<CardAvatar testimonial plain>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<img src={cardProfile6Square} alt='...' />
									</a>
								</CardAvatar>
								<CardBody plain>
									<h4 className={classes.title}>Gina West</h4>
									<Muted>
										<h6>CFO @ APPLE INC.</h6>
									</Muted>
									<h5 className={classes.cardDescription}>
										{'"'}I{"'"}ve been trying to figure out the bed design for
										the master bedroom at our Hidden Hills compound... Royère
										doesn
										{"'"}t make a Polar bear bed but the Polar bear. This is a
										very nice testimonial about this company.{'"'}
									</h5>
								</CardBody>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Testimonials 3 END */}
		</div>
	);
}
