import { useSignUp } from '../../../hooks/@query/useSignUp';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import React, { useState } from 'react';
import LabelInput from '../../@shared/LabelInput';
import Button from '../../@shared/Button';

import * as Styled from './style';

const RegistForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const setCustomValue = (id, value) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const setPattern = {
        value: {
            name: null,
            email: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.com+$/,
            password: /^\w{3,20}$/gi,
            // 배포 후 사용할 정규식(예비)
            // password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{3,20}$/gi,
        },
        message: {
            name: null,
            email: '@ 와 .com이 포함된 이메일을 입력해주세요.',
            password: '3~20자를 입력해주세요.',
            // 배포 후 사용할 메세지(예비)
            // password: '문자, 숫자, 기호를 포함한 3~20자를 입력해주세요.',
        },
    };

    const { mutate: SignUp } = useSignUp(setIsLoading, reset, navigate);

    const onSubmit = (data) => {
        setIsLoading(true);
        SignUp(data);
    };
    return (
        <Styled.StyleForm onSubmit={handleSubmit(onSubmit)}>
            <LabelInput
                id="name"
                label="닉네임"
                required
                disabled={isLoading}
                register={register}
                errors={errors}
                setCustomValue={setCustomValue}
                setPattern={setPattern}
            />
            <LabelInput
                id="email"
                type="email"
                label="이메일"
                required
                disabled={isLoading}
                register={register}
                errors={errors}
                setCustomValue={setCustomValue}
                setPattern={setPattern}
            />
            <LabelInput
                id="password"
                type="password"
                label="비밀번호"
                required
                disabled={isLoading}
                register={register}
                errors={errors}
                setCustomValue={setCustomValue}
                setPattern={setPattern}
            />
            <Button disabled={isLoading} primary margin="6rem 0 0 0">
                가입 완료
            </Button>
            <Link to="/">
                <Button>뒤로가기</Button>
            </Link>
        </Styled.StyleForm>
    );
};

export default RegistForm;
