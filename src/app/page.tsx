import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageContainer from "@/components/ImageContainer";
import Details from "@/components/ProductDetails";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-px flex bg-brand-gray-300 mt-6 mb-12" />
      <section className="flex grow">
        <ImageContainer />
        <Details />
      </section>
      <Footer price={2717} />
    </>
  );
}
