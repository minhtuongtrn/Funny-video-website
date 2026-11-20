import SocialLinks from "../molecules/SocialLinks";

export default function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="container">
				<img src="/dummy/logo-footer.png" alt="Kỷ niệm lớp 12B" />
				<form action="#" className="newsletter-form">
					<input type="email" placeholder="Nhập email của bạn để đăng ký nhận tin..." />
					<input type="submit" className="button cut-corner" value="Đăng ký" />
				</form>
				<SocialLinks />
				<p className="copy">Bản quyền @ 2026. Đã đăng ký bản quyền. Thiết kế bởi <a href="#">Admin</a></p>
			</div>
		</footer>
	);
}