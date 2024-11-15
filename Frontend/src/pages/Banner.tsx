import BannerBottom from "../features/banner/BannerBottom";
import BannerTop from "../features/banner/BannerTop";

type Props = {};

function Banner({ }: Props) {

  return (
    <div className="w-full">
      <p className="text-[#303F58] text-xl font-bold">Banner</p>
      <p className="text-[#818182] text-sm">
        A manual journal is a handwritten ledger entry for recording financial transactions,
        typically for adjustments not processed automatically
      </p>
      <BannerTop />
      <BannerBottom />

    </div>
  );
}

export default Banner;
