export const getLLMQuestion = async () => {
  let [data, error]: [object | undefined, any] = [undefined, undefined];

  const questionList = {
    q1: '질문지1',
    q2: '질문지2',
    q3: '질문지3',
  };

  data = questionList;

  return [data, error];
};

export const getUserInfo = async (basic: any) => {
  let [data, error]: [any, any] = [basic, undefined];

  try {
    console.log(process.env.NEXT_PUBLIC_TFT_BACKEND_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_TFT_BACKEND_URL}/api/flow/user-info`, {
      method: 'get',
      headers: {},
    });
    data = await response.json();
  } catch (apiErr) {
    error = apiErr;
  }

  return [data, error];
};

export const getClientInfo = async (cloth: any) => {
  let [data, error]: [any, any] = [cloth, undefined];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TFT_BACKEND_URL}/api/flow/client-info`, {
      method: 'get',
      headers: {},
    });
    data = await response.json();
  } catch (apiErr) {
    error = apiErr;
  }

  return [data, error];
};
