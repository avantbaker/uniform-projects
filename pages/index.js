import MainScripts from '@components/scripts';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Home() {
	return (
		<div className="pr__wrapper" id="site-wrapper">
			<MainScripts />
			<div
				className="pr__hero__wrap pr__dark"
				style={{ backgroundImage: 'url("/images/stairs-inv.png")' }}
				id="site-hero"
			>
				<header
					className="pr__header pr__dark"
					data-uk-sticky="top: 100vh; animation: uk-animation-slide-top;"
				>
					<div className="uk-container">
						<div className="inner">
							<div className="logo">
								<a href="home_03.html">
									<div className="brand" />
								</a>
							</div>
							<div className="navbar pr-font-second">
								<nav
									className="menu"
									data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true"
								>
									<ul>
										<li>
											<AnchorLink href="#pr__services">Services</AnchorLink>
										</li>
										<li>
											<AnchorLink href="#pr__works">Works</AnchorLink>
										</li>
										<li>
											<AnchorLink href="#pr__about">About</AnchorLink>
										</li>
										<li>
											<a uk-toggle="target: #pr__contact__form" data-uk-toggle>
												Contact
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="navbar-tigger" data-uk-toggle="target: #navbar-mobile">
								<span />
								<span />
								<span />
							</div>
						</div>
					</div>
				</header>
				<section className="pr__hero uk-section" id="pr__hero">
					<div className="uk-container">
						<div className="section-inner">
							<div className="hero-content uk-grid" data-uk-grid>
								<div className="uk-width-2-3@s">
									<hr className="line pr__hr__primary" />
									<h2 className="title uk-heading-hero">The Future of Marketing, Now.</h2>
									<a
										className="button uk-button uk-button-large uk-button-default uk-margin-top"
										uk-toggle="target: #pr__contact__form"
										data-uk-toggle
									>
										Getting Started
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="pr__features uk-section uk-padding-remove-bottom"
					id="pr_features"
				>
					<div className="uk-container">
						<div className="section-inner">
							<div
								className="items-listing features-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m"
								data-uk-grid
							>
								<div className="item feature-box uk-active">
									<div className="inner">
										<i className="icon pr-chart-bars pr__icon__large" />
										<h3 className="title uk-h4">Versatile Vision.</h3>
										<hr className="line pr__hr__secondary" />
										<p className="description">
											We see beyond what's trending to put you ahead of the curve
										</p>
										<a href="#" className="link uk-position-cover" />
									</div>
								</div>
								<div className="item feature-box">
									<div className="inner">
										<i className="icon pr-rocket pr__icon__large" />
										<h3 className="title uk-h4">Campaign Development.</h3>
										<hr className="line pr__hr__secondary" />
										<p className="description">
											We will work with you to create and execute your ad campaigns from
											start to finish
										</p>
										<a href="#" className="link uk-position-cover" />
									</div>
								</div>
								<div className="item feature-box">
									<div className="inner">
										<i className="icon pr-pie-chart pr__icon__large" />
										<h3 className="title uk-h4">Inovative Solutions.</h3>
										<hr className="line pr__hr__secondary" />
										<p className="description">
											We will dig deep to help your brand stand out with our teams
											branding deep dives
										</p>
										<a href="#" className="link uk-position-cover" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="pr__content" id="site-content">
				<div
					className="pr__clients__logos pr__section  pr__dark uk-section uk-section-muted"
					id="pr__clients__logos"
				>
					<div className="uk-container">
						<div className="section-outer">
							<div className="uk-flex uk-flex-around uk-flex-middle uk-grid uk-grid-large">
								<div className="item logo">
									<div className="inner">
										<img
											src="/images/logos/white/check-check-white.png"
											alt="Check Check"
											data-uk-svg
										/>
									</div>
								</div>
								<div className="item logo">
									<div className="inner">
										<img
											src="/images/logos/white/ebay-white.png"
											alt="Ebay"
											data-uk-svg
										/>
									</div>
								</div>
								<div className="item logo">
									<div className="inner">
										<img
											src="/images/logos/white/fiverr-white.png"
											alt="Fiverr"
											data-uk-svg
										/>
									</div>
								</div>
								<div className="item logo">
									<div className="inner">
										<img
											src="/images/logos/white/stadium-goods-white.png"
											alt="Stadium Goods"
											data-uk-svg
										/>
									</div>
								</div>
								<div className="item logo">
									<div className="inner">
										<img
											src="/images/logos/white/stockx-white.png"
											alt="StockX"
											data-uk-svg
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section
					className="pr__services pr__section uk-section uk-section-large pr__dark"
					style={{ backgroundColor: '#1b1b1b' }}
					id="pr__services"
				>
					<div className="section-outer">
						<div className="section-heading">
							<div className="uk-container">
								<div className="inner">
									<div className="left">
										<hr className="line pr__hr__secondary" />
										<h2 className="title uk-h1">Services.</h2>
										<span className="subtitle pr__heading__secondary">
											We work with you, Not for you
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="section-inner">
							<div className="uk-container">
								<div
									className="items-listing services-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@l uk-child-width-1-2@s"
									data-uk-grid
								>
									<div className="item service-box style-two uk-active">
										<div className="inner">
											<i className="overlay-icon icon pr-line-strategy" />
											<div className="content">
												<h5 className="title uk-h5">Digital Strategy</h5>
												<p className="description">
													We focus on technology to improve your business. Whether
													creating new projects or reimaging current ones.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
									<div className="item service-box style-two">
										<div className="inner">
											<i className="overlay-icon icon pr-line-browser" />
											<div className="content">
												<h5 className="title uk-h5">UX / UI and Web</h5>
												<p className="description">
													We humanize our websites and applications by providing the best,
													most natural experience possible.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
									<div className="item service-box style-two">
										<div className="inner">
											<i className="overlay-icon icon pr-line-presentation" />
											<div className="content">
												<h5 className="title uk-h5">Product Design</h5>
												<p className="description">
													Imagining, creating and iterating products that solve users
													needs is our speciality.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
									<div className="item service-box style-two">
										<div className="inner">
											<i className="overlay-icon icon pr-line-clipboard" />
											<div className="content">
												<h5 className="title uk-h5">Content Strategy</h5>
												<p className="description">
													We hone in on business goals and objectives and transform them
													into content that converts.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
									<div className="item service-box style-two">
										<div className="inner">
											<i className="overlay-icon icon pr-line-tools" />
											<div className="content">
												<h5 className="title uk-h5">Design &amp; Concept</h5>
												<p className="description">
													What good is usability without beauty and functionality? Our
													goal is to marry the two in harmony.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
									<div className="item service-box style-two">
										<div className="inner">
											<i className="overlay-icon icon pr-line-chat" />
											<div className="content">
												<h5 className="title uk-h5">Social Media</h5>
												<p className="description">
													Raise brand awareness and create community around your products
													with organic reach.
												</p>
												<i className="more icon pr-arrow-right" />
											</div>
											<a href="#" className="link uk-position-cover" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="pr__works pr__section pr__dark section-slider uk-section uk-section-large"
					id="pr__works"
				>
					<div className="section-outer">
						<div className="section-heading">
							<div className="uk-container">
								<div className="inner">
									<div className="left">
										<hr className="line pr__hr__secondary" />
										<h2 className="title uk-h1">Works.</h2>
										<span className="subtitle pr__heading__secondary">
											Things we've made
										</span>
									</div>
									<div className="right">
										{/* <a className="button uk-button uk-button-default" href="#">
											View all
										</a> */}
									</div>
								</div>
							</div>
						</div>
						<div className="section-inner">
							<div className="uk-container uk-container-no">
								<div
									className="items-listing works-boxes works-slider owl-carousel"
									data-items={4}
									data-margin={30}
									data-loop="true"
									data-center="true"
									data-autoplay="true"
									data-dots="true"
								>
									<div className="item work-box">
										<div className="outer">
											<div
												className="image pr__image__cover pr__ratio__square"
												data-src="/images/shoeapp.png"
												data-uk-img
											/>
											<div className="inner">
												<h3 className="title uk-h4">Check Check</h3>
												<p className="category">Youtube Campaign</p>
												<a
													href="https://youtu.be/gVEgHhPzqdE"
													className="link uk-position-cover"
												/>
											</div>
										</div>
									</div>
									<div className="item work-box">
										<div className="outer">
											<div
												className="image pr__image__cover pr__ratio__square"
												data-src="/images/strangers.png"
												data-uk-img
											/>
											<div className="inner">
												<h3 className="title uk-h4">Fiverr</h3>
												<p className="category">Youtube Campaign</p>
												<a
													href="https://youtu.be/_IFohFBnitY"
													className="link uk-position-cover"
												/>
											</div>
										</div>
									</div>
									<div className="item work-box">
										<div className="outer">
											<div
												className="image pr__image__cover pr__ratio__square"
												data-src="/images/yzybusta.png"
												data-uk-img
											/>
											<div className="inner">
												<h3 className="title uk-h4">StockX</h3>
												<p className="category">Youtube Campaign</p>
												<a
													href="https://youtu.be/BxYGl5KIKao"
													className="link uk-position-cover"
												/>
											</div>
										</div>
									</div>
									<div className="item work-box">
										<div className="outer">
											<div
												className="image pr__image__cover pr__ratio__square"
												data-src="/images/nyccollection.png"
												data-uk-img
											/>
											<div className="inner">
												<h3 className="title uk-h4">Stadium Goods</h3>
												<p className="category">Youtube Campaign</p>
												<a
													href="https://youtu.be/SrMr8I74BU0"
													className="link uk-position-cover"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr className="pr__vr__section" />
				<section
					className="pr__about pr__section pr__dark uk-section uk-section-large"
					id="pr__about"
				>
					<div className="section-outer">
						<div className="section-heading">
							<div className="outer">
								<div className="uk-container">
									<div className="inner uk-grid" data-uk-grid>
										<div className="left uk-width-expand">
											<hr className="line pr__hr__secondary" />
											<h2 className="title uk-h1">About.</h2>
											<span className="subtitle pr__heading__secondary">
												We're more than a marketing agency
											</span>
										</div>
										<div className="right uk-width-3-5@s">
											<p>
												Uniform Projects (UP) is a leading management firm representing
												talent in Street Wear, both domestically and internationally.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-inner">
							<div className="uk-container">
								<div
									className="gallery-boxes pr__grd__overlay uk-grid uk-grid-match uk-grid-medium"
									data-uk-grid
								>
									<div className="left uk-width-expand">
										<div className="item gallery-box big">
											<div className="outer">
												<div
													className="image pr__image__cover"
													data-src="/images/crowd.jpg"
													data-uk-img
												/>
												<div className="inner">
													<h3 className="title uk-h5">Teamwork</h3>
													<p className="description">Committed and creative</p>
													<a href="#" className="link uk-position-cover" />
												</div>
											</div>
										</div>
									</div>
									<div className="right uk-width-1-3@m">
										<div className="item gallery-box small">
											<div className="outer">
												<div
													className="image pr__image__cover"
													data-src="/images/jays.png"
													data-uk-img
												/>
												<div className="inner">
													<h3 className="title uk-h5">Philosophy</h3>
													<p className="description">Trust pays off</p>
													<a href="#" className="link uk-position-cover" data-uk-toggle />
												</div>
											</div>
										</div>
										<div className="item gallery-box small">
											<div className="outer">
												<div
													className="image pr__image__cover"
													data-src="/images/labackdrop.png"
													data-uk-img
												/>
												<div className="inner">
													<h3 className="title uk-h5">Office</h3>
													<p className="description">Los Angeles, CA</p>
													<a href="#" className="link uk-position-cover" data-uk-toggle />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="about-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-margin-large-top"
									data-uk-grid
								>
									<div className="item about-box">
										<div className="outer">
											<div className="inner">
												<h3 className="title uk-h5">Who we are</h3>
												<p className="description">
													Sneakers, Fashion, and Life Style. UP offers full service talent
													management across all categories including endorsements, live
													events and appearances, film and television, music, publishing,
													consumer products, and social media.
												</p>
											</div>
										</div>
									</div>
									<div className="item about-box">
										<div className="outer">
											<div className="inner">
												<h3 className="title uk-h5">Our philosophy</h3>
												<p className="description">
													UP prides itself on innovation and creating bridges between
													traditional and digital media, paving the way for the future of
													entertainment and influencer marketing.
												</p>
											</div>
										</div>
									</div>
									<div className="item about-box">
										<div className="outer">
											<div className="inner">
												<h3 className="title uk-h5">Brands we amazed</h3>
												<p className="description">
													Nike, Stock X, Stadium Goods, Talentless, FIVER, EBAY, Leverage,
													Embellish NYC, Adidas, BAPE, Fashion Nova, Dashlane, Privacy and
													other notable brands.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr className="pr__vr__section" />
			</div>
			<footer className="pr__footer" id="site-footer">
				<div className="pr__footer__top uk-section uk-section-large">
					<div className="section-outer">
						<div className="uk-container">
							<div className="section-inner">
								<div className="columns uk-grid" data-uk-grid>
									<div className="pr__cta column">
										<div className="inner">
											<h2 className="title uk-h1">Let's Talk?</h2>
										</div>
									</div>
									<div className="pr__cta column">
										<div className="inner">
											<a
												id="pr__contact"
												uk-toggle="target: #pr__contact__form"
												className="button uk-button uk-button-large uk-button-default"
												data-uk-toggle
											>
												Make an Inquiry
											</a>
										</div>
									</div>
									<div className="pr__social column">
										<div className="inner">
											<a href="#" className="icon pr-logo-facebook" />
											<a href="#" className="icon pr-logo-twitter" />
											<a href="#" className="icon pr-logo-instagram" />
											{/* <a href="#" className="icon pr-logo-xing" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pr__footer__center uk-section uk-section-small">
					<div className="uk-container">
						<ul>
							{/* <li>
								<a href="#">
									Atlanta.<span className="phone">+404 555 9834</span>
								</a>
							</li> */}
							<li>
								<a href="#">
									Los Angeles.<span className="phone">+757.577.2605</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="pr__footer__bottom uk-section">
					<div className="section-outer">
						<div className="uk-container">
							<div className="section-inner">
								<div className="columns uk-grid" data-uk-grid>
									<div className="pr__links column">
										<div className="inner">
											{/* <a href="#">Terms of use</a>
											<a href="#">Privacy Policy</a>
											<a href="#">Cookie Policy</a> */}
										</div>
									</div>
									<div className="pr__copyrights column">
										<div className="inner">
											<p>
												2020 © <a href="#">Uniform Projects</a>, All rights reserved.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
