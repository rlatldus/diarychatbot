import { useState } from 'react';
import useFormatDate from '../../../hooks/@shared/useFormatdate';

import Sticker from '../../@shared/Sticker';
import Memo from '../../@shared/Memo';

import * as Styled from './style';

const DairyMemo = ({ register, setValue, updatedAt, foundDiaryData }) => {
    const dateStringForm = useFormatDate(foundDiaryData?.[updatedAt]);
    const [selectedSticker, setSelectedSticker] = useState(foundDiaryData?.color);

    const stickers = [
        { colorName: 'scarlet', colorCode: '#dfb1a3' },
        { colorName: 'gray', colorCode: '#A5A2AA' },
        { colorName: 'orange', colorCode: '#F3AC7F' },
    ];

    const startColorName = stickers.find(
        (sticker) => sticker.colorCode === foundDiaryData?.color,
    )?.colorName;

    const handleClickSetValue = (name, value, colorCode) => {
        setSelectedSticker(colorCode);
        setValue(name, value);
    };

    return (
        <Memo>
            <Styled.Date>{dateStringForm}</Styled.Date>
            <Styled.TitleBg>
                <Styled.Tilte>제목</Styled.Tilte>
                <Styled.TitleCont
                    name="title"
                    placeholder="오늘 하루의 일기의 제목을 입력해주세요"
                    defaultValue={foundDiaryData?.title}
                    {...register('title')}
                />
            </Styled.TitleBg>
            <Styled.Cont
                name="ask"
                placeholder="오늘 하루의 일기의 내용을 입력해주세요"
                defaultValue={foundDiaryData?.ask}
                {...register('ask')}
            />
            <Styled.Text>원하시는 스티커 색상을 선택해주세요</Styled.Text>
            <Styled.Palette>
                <input type="hidden" value={startColorName || ''} {...register('color')} />
                {stickers.map((sticker, index) => (
                    <Sticker
                        key={index}
                        color={sticker.colorCode}
                        data-value={sticker.colorName}
                        isSelected={sticker.colorCode === selectedSticker}
                        onClick={(e) =>
                            handleClickSetValue(
                                'color',
                                e.target.dataset.value,
                                e.target.getAttribute('color'),
                            )
                        }
                    />
                ))}
            </Styled.Palette>
        </Memo>
    );
};

export default DairyMemo;
