import { requestAPI } from '@/apis/API';

export const getAdditionalInfo = async () => requestAPI(`/api/flow/additional-info`, 'GET');

export const getUserInfo = async () => requestAPI(`/api/flow/user-info`, 'GET');

export const getClientInfo = async () => requestAPI(`/api/flow/client-info`, 'GET');

export const postSaveInfo = async (info: any) => requestAPI(`/api/flow/save-info`, 'POST', info);
