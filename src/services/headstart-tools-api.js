import axios from "axios";
import { BASE_URL, COPY_FLOW, UPDATE_SCRIPTS } from "../constants/endpoints";

const headstartApi = axios.create({
  baseURL: BASE_URL,
});

const updateScripts = (bodyData) => {
  return headstartApi.post(UPDATE_SCRIPTS, bodyData);
};

const copyFlow = (bodyData) => {
  return headstartApi.post(COPY_FLOW, bodyData);
};

export { updateScripts, copyFlow };
