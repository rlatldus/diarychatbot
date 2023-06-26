import * as Styled from './style';

const Sticker = ({ onClick, ...rest }) => {
    return <Styled.StickerAlign {...rest} onClick={onClick}></Styled.StickerAlign>;
};

export default Sticker;
