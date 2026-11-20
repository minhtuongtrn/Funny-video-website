import HeroVideo from "../components/organisms/HeroVideo";
import SiteFooter from "../components/organisms/SiteFooter";
import SiteHeader from "../components/organisms/SiteHeader";
import { EventsSection, MemoriesSection, TestimonialsSection } from "../components/organisms/HomeSections";

export default function HomeTemplate() {
	return (
		<div id="site-content">
			<SiteHeader />
			<HeroVideo />
			<main className="main-content">
				<TestimonialsSection />
				<EventsSection />
				<MemoriesSection />
			</main>
			<SiteFooter />
		</div>
	);
}