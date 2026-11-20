const events = Array.from({ length: 5 }, (_, index) => index);

const memories = [
	{
		image: "/dummy/Band Name/music-pics-23.jpg",
		title: "Khoảnh Khắc Đẹp Tuổi Học Trò",
		text: "Những bức ảnh, những đoạn video này sẽ lưu giữ mãi những khoảnh khắc tuyệt vời nhất của tuổi học trò, để mỗi khi nhìn lại chúng ta đều mỉm cười và nhớ về nhau."
	},
	{
		image: "/dummy/Band Name/youtube-music-playlist.jpg",
		title: "Gắn Kết Tình Bạn",
		text: "Cùng nhau chia sẻ những niềm vui nỗi buồn trong suốt quãng thời gian học sinh. Tình bạn của chúng ta sẽ mãi bền chặt và không bao giờ phai nhạt theo thời gian."
	},
	{
		image: "/dummy/Band Name/5261_Electronics_Music_Production_pic_1 - Copy.jpg",
		title: "Hành Trang Bước Vào Đời",
		text: "Những bài học, những kỷ niệm dưới mái trường sẽ là hành trang vô giá giúp chúng ta vững bước trên con đường tương lai sắp tới. Chúc tất cả luôn thành công."
	}
];

export function TestimonialsSection() {
	return (
		<section className="fullwidth-block testimonial-section">
			<div className="container">
				<div className="quote-slider">
					<ul className="slides">
						<li>
							<blockquote>
								<p>"Chúng ta đã có những khoảng thời gian tuyệt vời cùng nhau. Nhớ mãi những kỷ niệm tuổi học trò thật đẹp đẽ và ngây ngô. Chúc các bạn luôn thành công trên con đường sắp tới."</p>
								<cite>Thành viên</cite>
								<span>Lớp 12B</span>
							</blockquote>
						</li>
						<li>
							<blockquote>
								<p>"Chào mừng các bạn đến với Video kỷ niệm lớp 12B."</p>
								<cite>Tập thể</cite>
								<span>Lớp 12B</span>
							</blockquote>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export function EventsSection() {
	return (
		<section className="fullwidth-block upcoming-event-section" data-bg-color="#191919">
			<div className="container">
				<header className="section-header">
					<h2 className="section-title">Sự kiện sắp tới</h2>
				</header>
				<div className="event-carousel">
					{events.map((event) => (
						<article className="event" key={event}>
							<div className="entry-date"><div className="date">#</div><span className="month">#</span></div>
							<h2 className="entry-title"><a href="#">Họp lớp cuối năm</a></h2>
							<p>Cùng nhau ôn lại những kỷ niệm vui buồn của tuổi học trò, chia sẻ về cuộc sống hiện tại.</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export function MemoriesSection() {
	return (
		<section className="fullwidth-block why-chooseus-section">
			<div className="container">
				<h2 className="section-title">Những Kỷ Niệm Khó Quên</h2>
				<div className="row">
					{memories.map((memory) => (
						<div className="col-md-4" key={memory.title}>
							<article className="feature">
								<figure className="cut-corner"><img src={memory.image} alt={memory.title} /></figure>
								<h3 className="feature-title">{memory.title}</h3>
								<p>{memory.text}</p>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}