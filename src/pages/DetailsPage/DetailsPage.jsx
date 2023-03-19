import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";
import { storePhones } from "../../service/data";

export const DetailsPage = () => {
  const location = useLocation();
  const [phoneDetails, setPhoneDetails] = useState(null);
  const detailsId = location.pathname.split("/");

  useEffect(() => {
    storePhones.map((item) => {
      if (item.id === Number(detailsId[2])) {
        return setPhoneDetails(item);
      }
      return [];
    });
  });

  return <>{phoneDetails && <DetailsCard phoneDetails={phoneDetails} />}</>;
};
