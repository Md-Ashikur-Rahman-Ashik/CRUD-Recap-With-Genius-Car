import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-topaz-sigma.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return services;
};

export default useServices;
