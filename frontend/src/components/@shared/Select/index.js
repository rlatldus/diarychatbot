import React, { useState } from 'react';
import * as Styled from './style';

const Select = ({ options, select, setSelect, dataValue, setFetchDiary }) => {
    const [dropdown, setDropDown] = useState(false);

    const handleClick = (opt, e) => {
        setDropDown(false);
        setSelect(opt);
        setFetchDiary(e.target.dataset.value); /* 추가한 코드 */
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
                        <li
                            key={index}
                            data-value={dataValue[index]} /* 추가한 코드 */
                            onClick={(e) => handleClick(opt, e)}
                        >
                            {opt}
                        </li>
                    ))}
                </Styled.SelectBox>
            )}
        </Styled.Container>
    );
};

export default Select;
