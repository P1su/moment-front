import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
export const FRIENDS_QUERY_KEY = ['friends'];

const getFriends = async () => {
  const response = await instance.get('/api/friends');
  return response.data.friends;
};

const useGetFriends = () => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: FRIENDS_QUERY_KEY,
    queryFn: getFriends,
  });

  return { friendList: data, refetch };
};

export default useGetFriends;
