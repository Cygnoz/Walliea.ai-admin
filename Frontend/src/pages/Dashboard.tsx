import bgimage from "../assets/images/Mask group.png";
import wallaiFace from "../assets/images/filbbe 1 (1).png";

type Props = {};

function Dashboard({ }: Props) {
  return (
    <div className="flex items-center justify-center flex-grow relative">
      <div
        className="w-[75%] rounded-[41px] h-[400px] overflow-hidden relative"
        style={{
          background:
            "radial-gradient(58.85% 58.85% at 50% 50%, #FFFDE9 0%, #E6E2B9 100%), rgba(116, 146, 36, 0.24)",
        }}
      >
        <img
          src={bgimage}
          className="absolute top-[-10%] left-[-0%] w-[130%] h-[120%] object-cover z-0"
          alt="Background"
        />

        {/* Content overlay */}
        <div className="h-full flex justify-between items-center relative z-10">
          <div className="text-2xl font-bold ms-10 w-[60%]">
            <p className="text-[#878585] text-5xl font-thin">Welcome, <span className="text-[#393939]"> Walliea.ai</span></p>
            <br />
            <p className="text-[#787878] text-2xl font-thin">Crafting a Sustainable Tomorrow with Eco-Friendly Plywood Solutions</p>
          </div>
          <div>
            <img src={wallaiFace} className="w-[100%] h-96 mt-5 me-10 object-cover" alt="Wall AI Face" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
