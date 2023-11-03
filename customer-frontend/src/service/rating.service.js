import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getPaginatedAttractionRatings = async (
  attractionId,
  page,
  limit,
  orderBy
) => {
  const response = await getApi()
    .get(`/ratings/attractions/${attractionId}`, {
      params: {
        page,
        limit,
        orderBy,
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

export const createAttractionRating = async (attractionId, data) => {
  const response = await getApi()
    .post(`/ratings/attractions/${attractionId}`, data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const updateRating = async (ratingId, data) => {
  const response = await getApi()
    .patch(`/ratings/${ratingId}`, data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const deleteRating = async (ratingId) => {
  const response = await getApi()
    .delete(`/ratings/${ratingId}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
