import React from 'react';
import * as Styled from './style';

const LabelInput = ({ children }) => {
    return (
        <Styled.Field>
            <Styled.Label>{children}</Styled.Label>
            <Styled.Input />
        </Styled.Field>
    );
};

export default LabelInput;
