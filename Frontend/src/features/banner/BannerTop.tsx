// import chairImage from "../../assets/images/Rectangle 32.png"
import { BannerType } from "../../types/BannerType ";
import EditBannerModal from "./EditBannerModal"
type Props = {
    banner: BannerType;
};


function BannerTop({ banner }: Props) {

    return (
        <div className="mt-10 bg-white p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-10">
                <img src={banner.image} alt="" className="w-36 h-40 rounded-2xl  object-cover" />
                <div>
                    <p className="text-black text-2xl font-medium">{banner.title}</p>
                    <p className="text-[#5281C3] text-lg mt-4">{banner.url}</p>
                </div>
            </div>
            <div className="me-16">
                <EditBannerModal  banner={banner} page="bannerTop" />
            </div>
        </div>
    )
}

export default BannerTop