import Memo from '../../@shared/Memo';
import { TypingEffect } from '../../@shared/TypingEffect/TypingEffect';

import happy from './../../../assets/happy.png';
import sad from './../../../assets/sad.png';
import smile from './../../../assets/smile.png';
import * as Styled from './style';

const AiMemo = ({ foundDiaryData, isLoading }) => {
    const getIcon = () => {
        const { score } = foundDiaryData;

        return <Styled.Icon src={score > 70 ? smile : score >= 30 ? happy : sad} alt="" />;
    };

    const loadingMessage = (
        <>
            <Styled.Cont></Styled.Cont>
            <Styled.ScoreBg>
                읽기짱 봇이 일기 읽는 <TypingEffect text={'중 입니다..'} />
            </Styled.ScoreBg>
        </>
    );

    const contentMessage = (
        <>
            <Styled.Cont>
                <TypingEffect text={foundDiaryData?.answer} />
            </Styled.Cont>
            <Styled.ScoreBg>
                {foundDiaryData?.score == null ? (
                    <span>읽기짱 봇이 조언과 응원을 해드릴게요</span>
                ) : (
                    <>
                        <Styled.Score>{foundDiaryData?.score}점</Styled.Score>
                        {getIcon()}
                    </>
                )}
            </Styled.ScoreBg>
        </>
    );

    return <Memo>{isLoading ? loadingMessage : contentMessage}</Memo>;
};

export default AiMemo;
