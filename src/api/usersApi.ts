import {User} from '../types/User';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';


export const fetchUsersApi = async (
  page: number,
  limit: number,
): Promise<User[]> => {
 const res = await fetch(`${BASE_URL}?_page=${page}&_limit=${limit}`);
  if (!res.ok) {
    throw new Error('API Error');
  }
  return res.json();
};