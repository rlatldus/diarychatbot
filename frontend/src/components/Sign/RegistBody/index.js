import React from 'react';
import RegistForm from '../RegistForm';

import * as Styled from './style';

const RegistBody = () => {
    return (
        <Styled.ContentWrapper>
            <div>
                <Styled.Title>회원가입</Styled.Title>
                <RegistForm />
            </div>
        </Styled.ContentWrapper>
    );
};

export default RegistBody;
