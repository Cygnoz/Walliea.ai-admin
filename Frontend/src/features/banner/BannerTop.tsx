import { BannerType } from "../../types/BannerType ";
import EditBannerModal from "./EditBannerModal"
type Props = {
    banner: BannerType;
};


function BannerTop({ banner }: Props) {

    return (
        <div className="mt-10 bg-white p-4 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-10">
          <img
            src={banner.image}
            alt=""
            className="w-36 h-40 rounded-2xl object-cover"
          />
          <div>
            <p className="text-black text-2xl font-medium">{banner.title}</p>
            <p className="text-textColor text-sm mt-2">{banner.subtitle}</p>
            <div
              className="overflow-x-auto mt-4 max-w-[800px] whitespace-nowrap"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <a
                href={banner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5281C3] text-lg"
              >
                {banner.url}
              </a>
            </div>
          </div>
        </div>
        <div className="me-16">
          <EditBannerModal banner={banner} page="bannerTop" />
        </div>
      </div>
      
    )
}

export default BannerTop