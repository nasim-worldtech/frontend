import axios, { AxiosResponse } from 'axios';

const fetchUserData = async (pageId: number): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`/users?page=${pageId}`);
    if (response.data.data.data.length === 0 && pageId > 1) {
      return await fetchUserData(pageId - 1);
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteUser = async (pageId: number): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(`/users/${pageId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apis = {
  fetchUserData,
  deleteUser,
};
