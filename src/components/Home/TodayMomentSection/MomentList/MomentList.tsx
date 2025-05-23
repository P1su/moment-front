import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/home/IcClip';
import IcClipOff from '../../../../assets/svg/home/IcClipOff';
import { MomentItemType } from './../../../../types/home/index.d';
import useGetTodayMoments from '../../../../hooks/queries/home/useGetTodayMoments';
import formatMomentList from '../../../../utils/formatMomentList';
import IcStamp from '../../../../assets/svg/home/IcStamp';

const MomentList = () => {
  const { data: todayData } = useGetTodayMoments();
  const moments: MomentItemType[] = (todayData?.moments || []).map(
    (moment) => ({
      id: moment.momentID, // string으로 매핑
      title: moment.content,
      isCompleted: moment.isCompleted,
    }),
  );

  const momentItems: MomentItemType[] = formatMomentList(moments);

  return (
    <S.MomentListLayout>
      {momentItems.map(({ id, title, isCompleted }) => (
        <S.MomentBox key={id} $isCompleted={isCompleted}>
          <S.IconWrapper>
            {isCompleted ? <IcClipOff /> : <IcClip />}
          </S.IconWrapper>
          {isCompleted && (
            <S.ClearBadgeSpan>
              <IcStamp />
            </S.ClearBadgeSpan>
          )}
          <S.MomentTitleSpan>{title}</S.MomentTitleSpan>
        </S.MomentBox>
      ))}
    </S.MomentListLayout>
  );
};

export default MomentList;
