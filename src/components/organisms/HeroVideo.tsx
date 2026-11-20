export default function HeroVideo() {
	return (
		<div className="hero hero-video">
			<video className="hero-video-bg" autoPlay muted loop playsInline preload="auto" poster="/dummy/slide-1.jpg">
				<source src="/video/videokiniem.mp4" type="video/mp4" />
				Trình duyệt của bạn không hỗ trợ thẻ video.
			</video>
		</div>
	);
}