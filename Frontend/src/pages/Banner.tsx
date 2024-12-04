import BannerBottom from "../features/banner/BannerBottom";
import BannerTop from "../features/banner/BannerTop";
import { useBannerContext } from "../context/BannerContext";

type Props = {};

function Banner({}: Props) {
  const { banners } = useBannerContext(); 

  return (
    <div className="w-full">
      <p className="text-[#303F58] text-xl font-bold">Banner</p>
      <p className="text-[#818182] text-sm">
        A banner is a visual element used to display key information or promotional content prominently on a webpage or application.
      </p>
      {banners.length > 0 && <BannerTop banner={banners[0]} />}
      {banners.length > 1 && <BannerBottom banner={banners[1]} />}
    </div>
  );
}

export default Banner;
