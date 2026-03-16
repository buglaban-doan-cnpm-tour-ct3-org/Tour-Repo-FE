import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import TourFilter from "../components/TourFilter";
import CategoryInfo from "../components/CategoryInfo";
import SortBar from "../components/SortBar";
import TourGrid from "../components/TourGrid";
import Pagination from "../components/Pagination";
import SocialFixed from "../components/SocialFixed";
import Footer from "../components/Footer";

export default function TourForeign() {
  return (
    <div className="bg-gray-100">

      <TopHeader />
      <Header />
      <Breadcrumb />

      <div className="max-w-7xl mx-auto flex gap-8 py-10">

        <TourFilter />

        <div className="flex-1">

          <CategoryInfo />

          <SortBar />

          <TourGrid />

          <Pagination />

        </div>

      </div>

      <SocialFixed />

      <Footer />

    </div>
  );
}