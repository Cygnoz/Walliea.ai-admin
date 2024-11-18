import { useEffect, useState } from "react";
import BannerBottom from "../features/banner/BannerBottom";
import BannerTop from "../features/banner/BannerTop";
import useApi from "../hooks/useApi";
import { endponits } from "../services/apiEndpoints";

type Props = {};

function Banner({}: Props) {
  const { request: getAllBanners } = useApi("get");

  const [banners, setBanners] = useState<any[]>([]);
  console.log(banners);
  

  const fetchAllBanners = async () => {
    try {
      const url = `${endponits.GET_ALL_BANNER}`;
      const { response, error } = await getAllBanners(url);
      if (!error && response) {
        setBanners(response.data.banners); 
      } else {
        console.error("Error in API response:", error);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchAllBanners();
  }, []);

  return (
    <div className="w-full">
      <p className="text-[#303F58] text-xl font-bold">Banner</p>
      <p className="text-[#818182] text-sm">
        A manual journal is a handwritten ledger entry for recording financial transactions,
        typically for adjustments not processed automatically.
      </p>
      {banners.length > 0 && <BannerTop banner={banners[0]} />}
      {banners.length > 1 && <BannerBottom banner={banners[1]} />}
    </div>
  );
}

export default Banner;
