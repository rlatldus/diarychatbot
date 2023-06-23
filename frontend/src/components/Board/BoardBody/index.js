import { useEffect, useState } from 'react';
import AiMemo from '../AiMemo';
import BoardFooter from '../BoardFooter';
import DairyMemo from '../DairyMemo';
import * as Styled from './style';

const BoardBody = ({ fetchMyDiary, updatedAt }) => {
    const [isLoading, setIsLoading] = useState(false);
    const currentURL = window.location.href;
    const isBoardURL = currentURL.endsWith('/Board/1');
    const id = currentURL.split('/').pop();
    const [formData, setFormData] = useState({
        id: '',
        answer: '',
        title: '',
        ask: '',
        color: '',
        createAt: '',
        updatedAt: '',
    });

    useEffect(() => {
        if (fetchMyDiary) {
            const foundDiary = fetchMyDiary.find((diary) => diary.id === id);
            if (foundDiary) {
                setFormData(foundDiary);
            }
        }
    }, [fetchMyDiary, id]);

    const getBackgroundColor = (score) => {
        if (score > 70) {
            return '#FFAB99';
        } else if (score <= 70 && score >= 30) {
            return '#FFE0C2';
        } else if (score < 30) {
            return '#ACACAC';
        }
    };

    return (
        <>
            <Styled.GlobalStyle backgroundColor={getBackgroundColor(formData.score)} />
            <Styled.BoardBodyBg>
                <DairyMemo formData={formData} setFormData={setFormData} updatedAt={updatedAt} />
                <AiMemo formData={formData} isLoading={isLoading} />
            </Styled.BoardBodyBg>
            <BoardFooter
                formData={formData}
                setFormData={setFormData}
                isBoardURL={isBoardURL}
                setIsLoading={setIsLoading}
            />
        </>
    );
};

export default BoardBody;
