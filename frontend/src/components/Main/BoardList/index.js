import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';

const BoardList = ({ createDate, daysOfWeek, id, title, desc, color }) => {
    return (
        <Link to={`/Board/${id}`}>
            <Styled.BoardCard>
                <Styled.Sticker small color={color} />
                <Styled.BoardTitleWrapper>
                    <Styled.BoardTitlePin />
                    <Styled.BoardTitle>{title}</Styled.BoardTitle>
                </Styled.BoardTitleWrapper>
                <Styled.BoardDesc>{desc}</Styled.BoardDesc>
                <Styled.BoardDate>{`${createDate[1]}월 ${createDate[2]}일 ${daysOfWeek}`}</Styled.BoardDate>
            </Styled.BoardCard>
        </Link>
    );
};

export default BoardList;
