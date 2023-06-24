import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';

// props updatedAt 추가
const BoardList = ({ createDate, daysOfWeek, id, title, desc, color, updatedAt }) => {
    return (
        <Link to={`/Board/${id}`}>
            <Styled.BoardCard>
                <Styled.Sticker small color={color} />
                <Styled.BoardTitleWrapper>
                    <Styled.BoardTitlePin />
                    <Styled.BoardTitle>{title}</Styled.BoardTitle>
                </Styled.BoardTitleWrapper>
                <Styled.BoardDesc>{desc}</Styled.BoardDesc>
                <Styled.BoardDate>
                    {updatedAt ? '수정일 : ' : '생성일 : '} {/* 새로 넣은 코드 */}
                    {`${createDate[1]}월 ${createDate[2]}일 ${daysOfWeek}`}
                </Styled.BoardDate>
            </Styled.BoardCard>
        </Link>
    );
};

export default BoardList;
