import styled from 'styled-components';
import { StickerAlign } from '../../@shared/Sticker/style';

export const BoardCard = styled.div`
    position: relative;
    width: 25rem;
    height: 35rem;
    padding: 5rem 3rem;
    background-color: #fff;
    box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.25);
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 0.5rem;
    padding-right: 0.1rem;
    font-size: 1.6rem;
`;
export const BoardTitlePin = styled.span`
    display: inline-block;
    min-width: 1.2rem;
    height: 1.4rem;
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 100%;
    box-shadow: inset -0.15rem -0.25rem 0.4rem rgba(82, 82, 82, 0.25);
`;
export const BoardDesc = styled.p`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    margin-top: 1rem;
    padding-right: 0.1rem;
    font-size: 1.4rem;
    word-break: break-all;
`;
export const BoardDate = styled.div`
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
`;
