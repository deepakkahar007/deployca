import { HeroSection } from "../constant";

const Hero = () => {
  const { headline, shortHeadline } = HeroSection;

  return (
    <section className="bg-blue flex min-h-max flex-col items-center px-4 py-9 text-white lg:min-h-[450px] lg:pl-3">
      <div className="lg:w-[800px]">
        <h1 className="text-center text-4xl font-extrabold capitalize lg:text-left">
          {headline}
        </h1>

        <p className="px-12 py-6 text-center capitalize italic lg:pl-3 lg:text-left lg:text-base">
          {shortHeadline}
        </p>

        <button className="text-blue w-60 rounded-md bg-white p-2 uppercase lg:text-center">
          Getting started --
        </button>
      </div>
    </section>
  );
};

export default Hero;
