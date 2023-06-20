import React from 'react';
import * as Styled from './style';

const LabelInput = ({
    id,
    label,
    type = 'text',
    disabled,
    register,
    errors,
    setCustomValue,
    setPattern,
}) => {
    return (
        <Styled.Field>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input
                id={id}
                type={type}
                disabled={disabled}
                {...register(id, {
                    required: `${label}을 입력해주세요.`,
                    onChange: (e) => setCustomValue(id, e.target.value),
                    pattern: {
                        value: setPattern.value[id],
                        message: setPattern.message[id],
                    },
                })}
                errors={errors}
            />
            <p>{errors[id]?.message}</p>
        </Styled.Field>
    );
};

export default LabelInput;
