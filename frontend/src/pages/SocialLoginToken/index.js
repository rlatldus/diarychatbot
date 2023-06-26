import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { userStorage } from '../../util/userStorage';
import { getToken } from '../../api/auth';

import Loading from '../../components/@shared/Loading';

const SocialLoginToken = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        getToken()
            .then((response) => {
                if (response?.data?.errors) {
                    return navigate('/');
                }

                const newAccessToken = response?.data?.data?.restoreAccessToken;
                userStorage.set(newAccessToken);
                return navigate(`/main/${userId}`);
            })
            .catch((error) => {
                navigate('/');
            });
    }, [navigate, userId]);

    return <Loading />;
};

export default SocialLoginToken;
