import * as Styled from './style';

const Button = ({ children, type, onClick, disabled, ...rest }) => {
    return (
        <Styled.ButtonBg {...rest}>
            <Styled.ButtonShadow {...rest}>
                <Styled.ButtonCont type={type} onClick={onClick} disabled={disabled} {...rest}>
                    {children}
                </Styled.ButtonCont>
            </Styled.ButtonShadow>
        </Styled.ButtonBg>
    );
};

export default Button;
