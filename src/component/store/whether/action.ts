import axios from "axios";
import { Dispatch } from "redux";
import { TypeComment } from "./type";

const API_KEY = "9cff733aee57cb05b63dd4f731c46bc4";

export const getWhether = (city: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: TypeComment.LOADING,
    });
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      dispatch({
        type: TypeComment.GET_WEATHER,
        payload: data.main.temp,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};
