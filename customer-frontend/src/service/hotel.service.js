import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getNearestHotels = async (lat, lng, limit) => {
  const response = await getApi()
    .get("/hotels/nearest/locations", {
      params: {
        limit,
        lat,
        lng,
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
