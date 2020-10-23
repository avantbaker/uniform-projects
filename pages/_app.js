import { Fragment } from 'react';
import { CacheProvider } from '@emotion/core';
import { cache, injectGlobal } from 'emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

injectGlobal`
  ${require('../scss/style.scss')}
`;

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<div id="loader" className="preloader pr__dark">
				<span className="loading">
					<span className="txt">Loading</span>
					<span className="progress">
						<span className="bar-loading" />
					</span>
				</span>
			</div>
			<div
				className="pr__mobile__nav"
				id="navbar-mobile"
				data-uk-offcanvas="overlay: true; flip: true; mode: none"
			>
				<div className="uk-offcanvas-bar">
					<button
						className="uk-offcanvas-close"
						type="button"
						data-uk-close="ratio: 2;"
					/>
					<nav
						className="menu"
						data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true"
					>
						<ul data-uk-scrollspy="target: > li; cls:uk-animation-slide-right; delay: 100; repeat: true;">
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
								<AnchorLink href="#pr__contact">Contact</AnchorLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Component {...pageProps} />
			<div
				id="pr__contact__form"
				className="pr__contact__form pr__dark uk-modal-full"
				data-uk-modal
			>
				<div className="uk-modal-dialog" data-uk-height-viewport>
					<div className="form-outer">
						<div className="uk-container uk-container-xsmall">
							<div className="form-inner uk-position-relative">
								<button
									className="uk-modal-close-full"
									type="button"
									data-uk-close="ratio: 2;"
								>
									<span>Close</span>
								</button>
								<h2 className="uk-modal-title uk-h1">Let's Talk?</h2>
								<p>Let’s make something awesome togheter</p>
								{/* <form
									action="https://uniformprojects.us2.list-manage.com/subscribe/post"
									method="POST"
								>
									<input
										type="hidden"
										name="u"
										defaultValue="1fb11e3861071c59c15d88133"
									/>
									<input type="hidden" name="id" defaultValue="a3a569e00a" />
									<div id="mergeTable" className="mergeTable">
										<div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
											<label htmlFor="MERGE1">Name</label>
											<div className="field-group">
												<input
													type="text"
													name="MERGE1"
													id="MERGE1"
													size={25}
													defaultValue
												/>
											</div>
										</div>
										<div className="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
											<label htmlFor="MERGE0">
												Email <span className="req asterisk">*</span>
											</label>
											<div className="field-group">
												<input
													type="email"
													autoCapitalize="off"
													autoCorrect="off"
													name="MERGE0"
													id="MERGE0"
													size={25}
													defaultValue
												/>
											</div>
										</div>
										<div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
											<label htmlFor="MERGE2">Subject</label>
											<div className="field-group">
												<input
													type="text"
													name="MERGE2"
													id="MERGE2"
													size={25}
													defaultValue
												/>
											</div>
										</div>
										<div
											className="mergeRow dojoDndItem mergeRow-dropdown"
											id="mergeRow-4"
										>
											<label htmlFor="MERGE4">Budget</label>
											<div className="field-group">
												<select className="select-small" id="MERGE4" name="MERGE4">
													<option value="Low Budget">Low Budget</option>
													<option value="$1,000-2,000">$1,000-2,000</option>
													<option value="$2,000 - 5,000">$2,000 - 5,000</option>
													<option value="$5,000 - 10,000">$5,000 - 10,000</option>
													<option value="+$10,000">+$10,000</option>
												</select>
											</div>
										</div>
										<div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-5">
											<label htmlFor="MERGE5">Message</label>
											<div className="field-group">
												<input
													type="text"
													name="MERGE5"
													id="MERGE5"
													size={25}
													defaultValue
												/>
											</div>
										</div>
									</div>
									<div className="submit_container clear">
										<input
											type="submit"
											className="formEmailButton"
											name="submit"
											defaultValue="Subscribe"
										/>
									</div>
									<input
										type="hidden"
										name="ht"
										defaultValue="087c44d79cc4df2e3d4e8032214413cef53912ad:MTYwMjY5OTI1Ni4yNzE="
									/>
									<input type="hidden" name="mc_signupsource" defaultValue="hosted" />
								</form> */}
								<form
									className="pr__contact pr__form"
									action="https://uniformprojects.us2.list-manage.com/subscribe/post"
									method="POST"
								>
									<input
										type="hidden"
										name="u"
										defaultValue="1fb11e3861071c59c15d88133"
									/>
									<input type="hidden" name="id" defaultValue="a3a569e00a" />
									<div className="pr__form__group">
										<label htmlFor="MERGE1">
											Your Name <span className="required">*</span>
										</label>
										<input
											className="pr-input"
											type="text"
											name="MERGE1"
											id="MERGE1"
											size={25}
										/>
									</div>
									<div className="pr__form__group">
										<label htmlFor="MERGE0">
											Your E-Mail <span className="required">*</span>
										</label>
										<input
											className="pr-input"
											type="email"
											autoCapitalize="off"
											autoCorrect="off"
											name="MERGE0"
											id="MERGE0"
											size={25}
										/>
									</div>
									<div className="pr__form__group">
										<label htmlFor="MERGE2">
											Your Subject <span className="required">*</span>
										</label>
										<input
											className="pr-input"
											name="MERGE2"
											id="MERGE2"
											size={25}
											type="text"
										/>
									</div>
									<div className="pr__form__group">
										<label htmlFor="MERGE4">What's your budget range?</label>
										<select className="uk-select" id="MERGE4" name="MERGE4">
											<option>&nbsp;</option>
											<option value="Low Budget">Low Budget</option>
											<option value="$1,000-2,000">$1,000-2,000</option>
											<option value="$2,000 - 5,000">$2,000 - 5,000</option>
											<option value="$5,000 - 10,000">$5,000 - 10,000</option>
											<option value="+$10,000">+$10,000</option>
										</select>
									</div>
									<div className="pr__form__group">
										<label htmlFor="MERGE5">
											Your message <span className="required">*</span>
										</label>
										<textarea
											className="pr-textarea"
											type="text"
											name="MERGE5"
											id="MERGE5"
											size={25}
											defaultValue={''}
										/>
									</div>
									<p className="pr__form__group uk-margin-large">
										<button
											className="uk-button uk-button-large uk-button-primary"
											type="submit"
											name="submit"
										>
											Send message
										</button>
									</p>
									<input
										type="hidden"
										name="ht"
										defaultValue="087c44d79cc4df2e3d4e8032214413cef53912ad:MTYwMjY5OTI1Ni4yNzE="
									/>
									<input type="hidden" name="mc_signupsource" defaultValue="hosted" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default MyApp;
