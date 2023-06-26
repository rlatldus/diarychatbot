import { useParams } from 'react-router';
import { useGetUser } from '../../hooks/@query/useGetUser';

import Header from '../../components/@shared/Header';
import MainBody from '../../components/Main/MainBody';
import Loading from '../../components/@shared/Loading';
import AccessDenied from '../../components/@shared/AccessDenied';

import * as Styled from './style';

const Main = () => {
    const { isLoading: userLoading, data: userData } = useGetUser();
    const { userId } = useParams();

    if (userLoading) {
        return <Loading />;
    }

    const {
        data: {
            data: {
                fetchUser: { name, id },
            },
        },
    } = userData;

    if (userId !== id) return <AccessDenied />;

    return (
        <Styled.MainBg>
            <Header />
            <Styled.NameTitle>{name} 님</Styled.NameTitle>
            <Styled.WelcomeTitle>오신걸 환영합니다.</Styled.WelcomeTitle>
            <MainBody />
        </Styled.MainBg>
    );
};

export default Main;
