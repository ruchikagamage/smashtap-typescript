import { TypeComment } from "./type";
type WEATHER = {
  type: TypeComment.GET_WEATHER;
  payload: string[];
};
type LOADING = {
  type: TypeComment.LOADING;
};

export type Actions = WEATHER | LOADING;

type Status = any;

const initialStatus = { actualTemp: '', isLoading: false };

const reducers = (state: Status = initialStatus, action: Actions): Status => {
  switch (action.type) {
    case TypeComment.LOADING:
      return { ...state, isLoading: true };
    case TypeComment.GET_WEATHER:
      return {
        ...state,
        actualTemp: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducers;
