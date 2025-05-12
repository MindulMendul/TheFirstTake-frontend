import { requestAPI } from '@/apis/API';

export const getNextQuestion = async () => requestAPI(`/api/flow/next-question`, 'GET');

export const getUserInfo = async () => requestAPI(`/api/flow/user-info`, 'GET');

export const getClientInfo = async () => requestAPI(`/api/flow/client-info`, 'GET');

export const getSaveInfo = async (info: any) => requestAPI(`/api/flow/save-info`, 'POST', info);
