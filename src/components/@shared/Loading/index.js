import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import * as Styled from './style';

const Loading = () => {
    return (
        <Styled.LoadingWrapper>
            <ClockLoader size={80} color="#111" />
        </Styled.LoadingWrapper>
    );
};

export default Loading;
