import * as Styled from './style';

const AccessDenied = () => {
    return (
        <Styled.AccessDeniedContainer>
            <Styled.AccessDeniedTitle>접근 권한이 없습니다.</Styled.AccessDeniedTitle>
            <Styled.AccessDeniedMessage>
                더 권한을 요청하려면 관리자에게 문의하세요.
            </Styled.AccessDeniedMessage>
        </Styled.AccessDeniedContainer>
    );
};

export default AccessDenied;
