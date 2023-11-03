import { getApi, getApiForFormData } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getPaginatedPulseStreamData = async (
  attractionId,
  page,
  limit,
  orderBy
) => {
  const response = await getApi()
    .get(`/pulse-stream-data/attractions/${attractionId}`, {
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

export const createPulseStreamRecord = async (attractionId, data) => {
  const { image } = data;

  const formData = new FormData();
  formData.append("strigifiedBody", JSON.stringify(data));
  formData.append("file", image);

  const response = await getApiForFormData()
    .post(`/pulse-stream-data/attractions/${attractionId}`, formData)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const updatePulseStreamRecord = async (pulseStreamRecordId, data) => {
  const { image } = data;

  const formData = new FormData();
  formData.append("strigifiedBody", JSON.stringify(data));
  formData.append("file", image);

  const response = await getApiForFormData()
    .patch(`/pulse-stream-data/${pulseStreamRecordId}`, formData)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const deletePulseStreamRecord = async (pulseStreamRecordId) => {
  const response = await getApi()
    .delete(`/pulse-stream-data/${pulseStreamRecordId}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
