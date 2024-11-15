import chairImage from "../../assets/images/Rectangle 32 (1).png"
import EditBannerModal from "./EditBannerModal"
type Props = {}

function BannerBottom({}: Props) {
  return (
    <div className="mt-7 bg-white p-4 rounded-lg flex justify-between items-center">
    <div className="flex items-center gap-10">
        <img src={chairImage} alt="" className="w-36 rounded-2xl  object-cover" />
        <div>
            <p className="text-black text-2xl font-medium">Flat 30% Off on plywood.</p>
            <p className="text-[#5281C3] text-lg mt-4">https://www.example.com/products/plywoodchair</p>
        </div>
    </div>
    <div className="me-16">
        <EditBannerModal/>
    </div>
</div>
  )
}

export default BannerBottom