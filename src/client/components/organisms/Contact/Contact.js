import React from "react";
import FormContact from "./FormContact";


export default ({ translate }) => (

			<React.Fragment>
			<div class="container-contact100">
			<div class="wrap-contact100">

				<FormContact />

					<div class="contact100-more flex-col-c-m">
				<div class="flex-w size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-map-marker"></span>
					</div>

									<div class="flex-col size2">
										<span class="txt1 p-b-20">
											Address
										</span>

										<span class="txt2">
											{translate("Footer.address")}
											{translate("Footer.address2")}
										</span>
									</div>
								</div>
								<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-phone-handset"></span>
					</div>

					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							Lets Talk
						</span>

						<span class="txt3">
						092 592 9744
						</span>
					</div>
				</div>

				<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-envelope"></span>
					</div>

					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							General Support
						</span>

						<span class="txt3">
						ntcdiveboat@gmail.com
						</span>
					</div>
									</div>
								</div>
						</div>
				</div>

			</React.Fragment>
)



