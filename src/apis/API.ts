export const getLLMQuestion = async () => {
  let [data, error]:[object|undefined, any]=[undefined, undefined];

  const questionList = {
    q1:"질문지1",
    q2:"질문지2",
    q3:"질문지3"
  }

  data=questionList;

  return [data, error];
}

export const postBasicInfo = async (basic: any) => {
  let [data, error]:[any, any]=[basic, undefined];

  return [data, error];
}

export const postClothInfo = async (cloth: any) => {
  let [data, error]:[any, any]=[cloth, undefined];

  return [data, error];
}