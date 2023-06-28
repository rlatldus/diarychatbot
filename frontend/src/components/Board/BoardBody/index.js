import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import AiMemo from '../AiMemo';
import AccessDenied from '../../@shared/AccessDenied';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';

import * as Styled from './style';

const BoardBody = ({ fetchMyDiary, updatedAt }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { userId, boardId } = useParams();
    const { register, handleSubmit, setValue, watch } = useForm();
    const foundDiaryData = fetchMyDiary?.find((diary) => diary.id === boardId);

    if (boardId !== foundDiaryData?.id) return <AccessDenied />;

    const getBackgroundColor = (score) => {
        if (score > 70) {
            return '#FFAB99';
        }
        if (score >= 30) {
            return '#FFE0C2';
        }
        return '#ACACAC';
    };

    return (
        <>
            <Styled.GlobalStyle backgroundColor={getBackgroundColor(foundDiaryData?.score)} />
            <Styled.BoardBodyBg>
                <DairyMemo
                    register={register}
                    foundDiaryData={foundDiaryData}
                    setValue={setValue}
                    updatedAt={updatedAt}
                />
                <AiMemo foundDiaryData={foundDiaryData} isLoading={isLoading} />
            </Styled.BoardBodyBg>
            <BoardFooter
                fetchMyDiary={fetchMyDiary}
                foundDiaryData={foundDiaryData}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                userId={userId}
                boardId={boardId}
                handleSubmit={handleSubmit}
                watch={watch}
            />
        </>
    );
};

export default BoardBody;
