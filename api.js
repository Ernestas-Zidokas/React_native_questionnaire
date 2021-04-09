import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rnd-stage.kilo.live',
});

const callGetQuestions = async () =>
  await axiosInstance.get(
    `/api/quizzes/test-day?api_token=4fa78874-1b35-4d74-9e4d-2b7e4c76ebdc`
  );

export { callGetQuestions };
