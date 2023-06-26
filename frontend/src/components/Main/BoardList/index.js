import { Link } from 'react-router-dom';

import useFormatDate from '../../../hooks/@shared/useFormatdate';

import * as Styled from './style';

const BoardList = ({ id, date, title, desc, color, updatedAt }) => {
    const dateStringForm = useFormatDate(date);
    return (
        <Link to={`Board/${id}`}>
            <Styled.BoardCard>
                <Styled.Sticker small color={color} />
                <Styled.BoardTitleWrapper>
                    <Styled.BoardTitlePin />
                    <Styled.BoardTitle>{title}</Styled.BoardTitle>
                </Styled.BoardTitleWrapper>
                <Styled.BoardDesc>{desc}</Styled.BoardDesc>
                <Styled.BoardDate>
                    {updatedAt === 'updatedAt' ? '수정일 : ' : '생성일 : '}
                    {dateStringForm}
                </Styled.BoardDate>
            </Styled.BoardCard>
        </Link>
    );
};

export default BoardList;
