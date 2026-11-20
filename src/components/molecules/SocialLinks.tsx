import SocialLink from "../atoms/SocialLink";

const links = [
	{ platform: "Facebook", icon: "facebook-square" },
	{ platform: "Twitter", icon: "twitter" },
	{ platform: "Google Plus", icon: "google-plus" },
	{ platform: "Pinterest", icon: "pinterest" }
];

export default function SocialLinks() {
	return (
		<div className="social-links">
			{links.map((link) => (
				<SocialLink key={link.platform} {...link} />
			))}
		</div>
	);
}