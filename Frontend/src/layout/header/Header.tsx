import { useNavigate } from "react-router-dom";
import UserIcon from "../../assets/icons/UserIcon";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Modal from "../../components/Modal";

type Props = {}

function Header({ }: Props) {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const confirmLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const closeModal = () => {
    setLogoutModalOpen(false);
  };

  return (
    <div className="px-8 py-4 border-b border-[#DADEE5] flex justify-end">
      <div>
        <button
          onClick={confirmLogout}
          className="flex justify-center items-center border border-[#565148] bg-[#FEFDFA]
          rounded-lg text-sm font-medium text-[#565148] px-5 h-[2.25rem] gap-2"
        >
          <UserIcon /> Logout
        </button>
      </div>
      <Toaster reverseOrder={false} />

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <Modal
          open={isLogoutModalOpen}
          onClose={closeModal}
          className="rounded-lg p-8 w-[546px] h-[160px] text-[#303F58] space-y-8"
        >
          <p className="text-sm font-medium">Are you sure you want to log out?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              className="border border-[#D3D3D3] text-sm text-[#565148] px-6 py-2 rounded-lg hover:bg-[#F4F4F4]"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#565148] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#3F3F3F]"
            >
              Logout
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Header;
