import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import FeatureSection from "../component/FeatureSection";
import DownloadBanner from "../component/DownloadBanner";
import Footer from "../component/Footer";

const HomeGuest = () => (
  <div className="bg-black min-h-screen">
    <Navbar />
    <Banner />
    <FeatureSection />
    <DownloadBanner />
    <Footer />
  </div>
);

export default HomeGuest;