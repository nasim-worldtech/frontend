import { AxiosResponse } from 'axios';
import axiosInstance from '../axiosConfig/axiosConfig';

const fetchUserData = async (pageId: number): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance.get(`/users?page=${pageId}`);
    if (response.data.data.data.length === 0 && pageId > 1) {
      return await fetchUserData(pageId - 1);
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchLoginHistoryData = async (
  pageId: number,
): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance.get(`/login-histories?page=${pageId}`);
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
    const response = await axiosInstance.delete(`/users/${pageId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signInUser = async (data: any) => {
  try {
    const response = await axiosInstance.post('/login', data);
    console.log(response, 'hasan');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logOutUser = async () => {
  try {
    const response = await axiosInstance.get('/logout');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const apis = {
  fetchLoginHistoryData,
  signInUser,
  logOutUser,
  fetchUserData,
  deleteUser,
};
