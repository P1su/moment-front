import instance from '../../../apis/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface DeleteFriendResponseType {
  message: string;
}

const deleteFriend = async (
  friendId: string,
): Promise<DeleteFriendResponseType> => {
  const response = await instance.delete('/api/friends', {
    data: {
      friendUserID: friendId,
    },
  });

  return response.data;
};

const useDeleteFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFriend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['friends'],
      });
    },
  });
};

export default useDeleteFriend;
