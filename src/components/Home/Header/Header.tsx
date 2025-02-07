import { useState } from 'react';
import NotificationModal, {
  NotificationItem,
} from '../NotificationModal/NotificationModal';
import * as S from './Header.style';
import IcNotice from './../../../assets/svg/IcNotice';
import IcNoticeOff from './../../../assets/svg/IcNoticeOff';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  // Mock 데이터
  const mockStreakDays = 4; // 작심 N일 (모의 데이터)
  const [notifications] = useState<NotificationItem[]>([
    {
      notificationID: '1',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-01',
    },
    {
      notificationID: '2',
      type: 'CHEER',
      content: '코끼리님이 게시글에 응원했어요!',
      created_at: '2025-02-02',
    },
    {
      notificationID: '3',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-03',
    },
    {
      notificationID: '4',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-04',
    },
    {
      notificationID: '5',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-05',
    },
    {
      notificationID: '6',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-06',
    },
    {
      notificationID: '7',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-01',
    },
    {
      notificationID: '8',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-01',
    },
  ]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);

    // 모달이 열릴 때만 상태를 업데이트
    if (isModalOpen) {
      setHasUnreadNotifications(false);
    }
  };

  return (
    <S.HeaderLayout>
      {isModalOpen && (
        <NotificationModal
          notifications={notifications}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <S.StreakTextContainer>
        오늘은 작심 <S.StreakHighlight>{mockStreakDays}</S.StreakHighlight>일
      </S.StreakTextContainer>
      <S.BellIconWrapper onClick={toggleModal}>
        {hasUnreadNotifications ? <IcNotice /> : <IcNoticeOff />}
      </S.BellIconWrapper>
    </S.HeaderLayout>
  );
};

export default Header;
