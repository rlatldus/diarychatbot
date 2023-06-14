import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';

const BoardList = ({ createDate, daysOfWeek, id, title, desc, stickerColor }) => {
    return (
        <Link to={`/{링크}/${id}`}>
            <Styled.BoardCard>
                <Styled.Sticker small stickerColor={stickerColor} />
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
