import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateDiary } from '../../../hooks/@query/useCreateDiary';
import { useDeleteDiary } from '../../../hooks/@query/useDeleteDiary';
import { useUpdateDiary } from '../../../hooks/@query/useUpdateDiary';
import Button from '../../@shared/Button';
import * as Styled from './style';
const BoardFooter = ({ formData, isBoardURL, setFormData }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);
    const { mutate: updateMyDiary } = useUpdateDiary(setIsLoading);
    const { mutate: deleteMyDiary } = useDeleteDiary(setIsLoading, navigate);
    const { mutate: createMyDiary } = useCreateDiary(setIsLoading, setFormData);
    const createDiaryMutation = useCreateDiary(setIsLoading);

    const CreateDiary = async () => {
        setIsLoading(true);
        const response = await createDiaryMutation.mutateAsync(formData);
        setFormData(response.data.data.createDiary);
    };

    const UpdateMyDiary = () => {
        setIsLoading(true);
        updateMyDiary({
            id: formData.id,
            title: formData.title,
            ask: formData.ask,
            color: formData.color,
        });
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
