import { EssentialSection } from "../constant";

const Essential = () => {
  const { headline, shortHeadline, buttonText, img_Url } = EssentialSection;
  return (
    <div>
      <div>
        <h1>{headline}</h1>
        <p>{shortHeadline}</p>
        <button>{buttonText}</button>
      </div>
      <div className="h-[450px] w-[450px]">
        <img src={img_Url} alt="Essential image" loading="lazy" />
      </div>
    </div>
  );
};

export default Essential;
