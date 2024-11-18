import React, { createContext, useContext, useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import { endponits } from "../services/apiEndpoints";

type BannerContextType = {
  banners: any[];
  fetchAllBanners: () => Promise<void>;
  updateBannerInState: (updatedBanner: any) => void;
};

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [banners, setBanners] = useState<any[]>([]);
  const { request: getAllBanners } = useApi("get");

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
      console.error("Error fetching banners:", error);
    }
  };

  const updateBannerInState = (updatedBanner: any) => {
    setBanners((prevBanners) =>
      prevBanners.map((banner) =>
        banner._id === updatedBanner._id ? updatedBanner : banner
      )
    );
  };

  useEffect(() => {
    fetchAllBanners();
  }, []);

  return (
    <BannerContext.Provider value={{ banners, fetchAllBanners, updateBannerInState }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBannerContext must be used within a BannerProvider");
  }
  return context;
};
