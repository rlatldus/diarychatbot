import { useState } from 'react';
import * as Styled from './style';

const Select = ({ options, dataValue, filterState }) => {
    const [dropdown, setDropDown] = useState(false);

    const handleClick = (opt, e) => {
        setDropDown(false);
        filterState.changeOption(opt);
        filterState.changeState(e.target.dataset.value);
    };

    return (
        <Styled.Container down={dropdown ? 'true' : 'false'}>
            <Styled.SelectedText
                onClick={() => {
                    setDropDown(!dropdown);
                }}
            >
                {filterState.basicOption}
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
