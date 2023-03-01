import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const authReq = async () => {
    try {
      const response = await axios(url);
      console.log(response);
      const data = response.data;
      console.log(data[0].name);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    authReq();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
