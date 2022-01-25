import { IEndpointController } from "../interface/IEndpoint";
import Axios from "axios";
import { baseUrl } from "../configuration/Configuration";

export default function EndpointController({
  route,
  data,
  file,
}: IEndpointController) {
  return new Promise(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseUrl,
        url: route,
        data,
        method: "POST",
        headers: {
          contentType: file ? "multipart/form-data" : "application/json",
        },
      })
        .then((response) => {
          resolve(JSON.parse(response.data));
        })
        .catch((error) => {
          reject(error?.response?.data || error?.message);
        });
    } catch (error) {
      reject(error);
    }
  });
}
