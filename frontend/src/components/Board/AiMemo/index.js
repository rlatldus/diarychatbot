import Memo from '../../@shared/Memo';
import { TypingEffect } from '../../@shared/TypingEffect/TypingEffect';
import happy from './../../../assets/happy.png';
import sad from './../../../assets/sad.png';
import smile from './../../../assets/smile.png';
import * as Styled from './style';

const AiMemo = ({ formData, isLoading }) => {
    return (
        <Memo>
            {isLoading ? (
                <>
                    <Styled.Cont></Styled.Cont>
                    <Styled.ScoreBg>
                        읽기짱 봇이 일기 읽는 <TypingEffect text={'중 입니다..'} />
                    </Styled.ScoreBg>
                </>
            ) : (
                <>
                    <Styled.Cont>
                        <TypingEffect text={formData.answer} />
                    </Styled.Cont>
                    {formData.score == null ? (
                        <Styled.ScoreBg>읽기짱 봇이 조언과 응원을 해드릴게요</Styled.ScoreBg>
                    ) : (
                        <Styled.ScoreBg>
                            <Styled.Score>{formData.score}점</Styled.Score>
                            {formData.score > 70 && <Styled.Icon src={smile} alt="" />}
                            {formData.score <= 70 && formData.score >= 30 && (
                                <Styled.Icon src={happy} alt="" />
                            )}
                            {formData.score < 30 && <Styled.Icon src={sad} alt="" />}
                        </Styled.ScoreBg>
                    )}
                </>
            )}
        </Memo>
    );
};

export default AiMemo;
