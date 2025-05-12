type QuestionType = {
  question: string;
  option: string;
};

type QuestionAPIType = {
  question: string;
  options: Array<string>;
};

type APIResponseType<T> =
  | {
      status: string;
      message: string;
      data: T;
    }
  | undefined;

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
