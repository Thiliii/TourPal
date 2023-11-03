import { getApiForFormData, getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getAllTourGuides = async (page, limit, orderBy, keyword) => {
  const response = await getApiForFormData()
    .get("/users", {
      params: {
        page,
        limit,
        orderBy,
        keyword,
      },
    })
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getTourGuideById = async (userId) => {
  const response = await getApi()
    .get(`/users/${userId}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
