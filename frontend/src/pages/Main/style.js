import styled from 'styled-components';
import { NameCont } from '../../components/@shared/Name/style';
// import { StickerAlign } from '../../components/@shared/Sticker/style';

export const MainBg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ffe0c2;
`;

export const NameTitle = styled(NameCont)`
    margin-top: 8rem;
    font-family: var(--font-notoSerifKR);
`;

export const WelcomeTitle = styled(NameCont)`
    margin-top: 1rem;
    font-family: var(--font-notoSerifKR);
`;
