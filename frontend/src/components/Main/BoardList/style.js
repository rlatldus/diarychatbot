import styled from 'styled-components';
import { StickerAlign } from '../../@shared/Sticker/style';

export const BoardCard = styled.div`
    position: relative;
    padding: 5rem 3rem;
    width: 25rem;
    height: 35rem;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0.4rem 0.4rem 1rem #00000040;
    @media screen and (max-width: 560px) {
        padding: 4rem 2rem;
        width: 16rem;
        height: 25rem;
    }
    &:hover {
        box-shadow: 0 1rem 3rem #00000040, 0 1rem 1rem #00000038;
    }
`;

export const Sticker = styled(StickerAlign)`
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const BoardTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BoardTitle = styled.h3`
    margin-left: 0.5rem;
    padding-right: 0.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    overflow: hidden;
`;
export const BoardTitlePin = styled.span`
    display: inline-block;
    min-width: 1.2rem;
    height: 1.4rem;
    background-color: #eee;
    box-shadow: inset -0.15rem -0.25rem 0.4rem #52525240;
    border: 1px solid #ddd;
    border-radius: 100%;
`;
export const BoardDesc = styled.p`
    display: -webkit-box;
    margin-top: 1rem;
    padding-right: 0.1rem;
    text-overflow: ellipsis;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    font-size: 1.4rem;
    word-break: break-all;
    overflow: hidden;
    @media screen and (max-width: 560px) {
        -webkit-line-clamp: 5;
    }
`;
export const BoardDate = styled.div`
    position: absolute;
    left: 50%;
    bottom: 2.5rem;
    width: 90%;
    text-align: center;
    font-size: 1.2rem;
    transform: translateX(-50%);
`;
