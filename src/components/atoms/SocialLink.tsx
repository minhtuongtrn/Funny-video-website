type SocialLinkProps = {
	platform: string;
	icon: string;
};

export default function SocialLink({ platform, icon }: SocialLinkProps) {
	return (
		<a href="#" aria-label={platform}>
			<i className={`fa fa-${icon}`} aria-hidden="true" />
		</a>
	);
}