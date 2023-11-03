import { getApiForFormData, getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getPortfolios = async (userId, page, limit, orderBy) => {
  const response = await getApiForFormData()
    .get(`/guide-portfolios/tour-guides/${userId}`, {
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

export const createPortfolio = async (data) => {
  const { image } = data;
  console.log("supun", image);

  const formData = new FormData();
  formData.append("strigifiedBody", JSON.stringify(data));
  formData.append("file", image);

  const response = await getApiForFormData()
    .post("/guide-portfolios", formData)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const deletePortfolio = async (portfolioId) => {
  const response = await getApi()
    .delete(`/guide-portfolios/${portfolioId}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const updatePortfolio = async (data, portfolioId) => {
  const { image } = data;
  console.log("supun", image);
  console.log("portfolioId", portfolioId);

  const formData = new FormData();
  formData.append("strigifiedBody", JSON.stringify(data));
  formData.append("file", image);

  const response = await getApiForFormData()
    .patch(`/guide-portfolios/${portfolioId}`, formData)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getPortfolioById = async (portfolioId) => {
  const response = await getApi()
    .get(`/guide-portfolios/${portfolioId}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
