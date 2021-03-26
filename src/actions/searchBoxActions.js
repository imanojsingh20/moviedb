import { CHANGE } from "../utils/types";

export const onTermChange = (e) => {
  return {
    type: CHANGE,
    payload: e.target.value,
  };
};
