import * as Styled from './style';

const Button = ({ children, ...rest }) => {
    return (
        <Styled.ButtonBg {...rest}>
            <Styled.ButtonShadow {...rest}>
                <Styled.ButtonCont {...rest}>{children}</Styled.ButtonCont>
            </Styled.ButtonShadow>
        </Styled.ButtonBg>
    );
};

export default Button;
