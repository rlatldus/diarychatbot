import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../../hooks/@query/useLogout';

import Button from '../../@shared/Button';

import * as Styled from './style';

const MainBodyFooter = () => {
    const navigate = useNavigate();

    const { mutate: Logout } = useLogout(navigate);
    return (
        <Styled.ButtonWrapper>
            <Button type="button" small primary onClick={() => navigate('Board')}>
                글쓰기
            </Button>
            <Button type="button" small onClick={Logout}>
                로그아웃
            </Button>
        </Styled.ButtonWrapper>
    );
};

export default MainBodyFooter;
