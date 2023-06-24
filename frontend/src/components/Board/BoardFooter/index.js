import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateDiary } from '../../../hooks/@query/useCreateDiary';
import { useDeleteDiary } from '../../../hooks/@query/useDeleteDiary';
import { useUpdateDiary } from '../../../hooks/@query/useUpdateDiary';
import Button from '../../@shared/Button';
import * as Styled from './style';
const BoardFooter = ({ formData, isBoardURL, setFormData, setIsLoading }) => {
    const navigate = useNavigate();
    const [isAvailable, setIsAvailable] = useState(false);
    const { mutate: deleteMyDiary } = useDeleteDiary(setIsLoading, navigate);
    const createDiaryMutation = useCreateDiary(setIsLoading);
    const UpdateMyDiaryMutation = useUpdateDiary(setIsLoading);

    const CreateDiary = async () => {
        setIsLoading(true);
        const response = await createDiaryMutation.mutateAsync(formData);
        if (response.data.errors == null) {
            setFormData(response.data.data.createDiary);
        } else {
            alert('길이가 너무 길어서 작성이 어려워요');
        }
    };

    const UpdateMyDiary = async () => {
        setIsLoading(true);
        const response = await UpdateMyDiaryMutation.mutateAsync(formData);
        if (response.data.errors == null) {
            setFormData(response.data.data.updateMyDiary);
        } else {
            alert('길이가 너무 길어서 수정이 어려워요');
        }
    };

    const DeleteMyDiary = () => {
        setIsLoading(true);
        deleteMyDiary({ id: formData.id });
    };

    useEffect(() => {
        setIsAvailable(formData.title && formData.ask && formData.color);
    }, [formData.title, formData.ask, formData.color]);

    return (
        <Styled.ButtonWrapper>
            {!isBoardURL && (
                <Button small primary onClick={UpdateMyDiary}>
                    수정하기
                </Button>
            )}
            {isBoardURL && (
                <Button small primary onClick={CreateDiary} disabled={!isAvailable}>
                    제출하기
                </Button>
            )}
            {!isBoardURL && (
                <Button small primary onClick={DeleteMyDiary}>
                    삭제하기
                </Button>
            )}
            <Link to="/main/:userId">
                <Button type="button" small>
                    돌아가기
                </Button>
            </Link>
        </Styled.ButtonWrapper>
    );
};

export default BoardFooter;
