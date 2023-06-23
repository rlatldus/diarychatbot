import React, { useState } from 'react';
import * as Styled from './style';

const Select = ({ options, select, setSelect }) => {
    const [dropdown, setDropDown] = useState(false);

    const handleClick = (opt) => {
        setDropDown(false);
        setSelect(opt);
    };

    return (
        <Styled.Container down={dropdown ? 'true' : 'false'}>
            <Styled.SelectedText
                onClick={() => {
                    setDropDown(!dropdown);
                }}
            >
                {select ? select : options[0]}
                {dropdown ? <Styled.StyledIcon down="true" /> : <Styled.StyledIcon />}
            </Styled.SelectedText>
            {dropdown && (
                <Styled.SelectBox>
                    {options.map((opt, index) => (
                        <li key={index} onClick={() => handleClick(opt)}>
                            <p>{opt}</p>
                        </li>
                    ))}
                </Styled.SelectBox>
            )}
        </Styled.Container>
    );
};

export default Select;
