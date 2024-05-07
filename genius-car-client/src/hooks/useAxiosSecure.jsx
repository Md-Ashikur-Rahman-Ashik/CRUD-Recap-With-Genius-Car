import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-topaz-sigma.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              alert("User logged out successful");
              navigate("/login");
            })
            .catch((error) => console.error(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
