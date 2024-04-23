import { logo } from "../assets";
import { footerLinks, socialMedia } from "../index";

const Footer = () => (
	<section className=" flex justify-center items-center flex-col  w-full px-10 py-5 bg-orange-300">
		<div className="flex justify-between items-start mb-8 w-full">
			<div className="flex flex-col justify-center items-start">
				<img
					src={logo}
					alt="nanocellum"
					className="w-auto h-[40px] md:h-[60px] mb-4  object-contain"
				/>
				<p className="font-normal text-black text-[14px] md:text-[16px] leading-[30.8px] mt-4 max-w-[200px] ss:max-w-[300px] ">
					A new way to add some sustainability to your home.{" "}
				</p>
			</div>

			<div className="flex flex-row justify-end">
				<div className="flex flex-col ">
					<h4 className="font-bold text-[15px] md:text-[17px] leading-[24px] text-black text-right">
						Useful Links
					</h4>
					<ul className="list-none mt-4">
						{footerLinks.map((link) => (
							<li
								key={link.id}
								className={`font-poppins font-normal text-[14px] md:text-[16px] leading-[24px] text-black text-right hover:text-secondary cursor-pointer mb-1`}>
								{link.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>

		<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-black">
			<p className="font-poppins font-normal text-[18px] leading-[24px] text-gray-600 text-center">
				2023 Nanocellum. All Rights Reserved.
			</p>
			<div className="flex flex-row md:mt-0 mt-6 mr-6">
				{socialMedia.map((social, index) => (
					<img
						key={social.id}
						src={social.icon}
						alt={social.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
						}`}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
