import { useMemo } from 'react';

const useFormatDate = (dateString) => {
    return useMemo(() => {
        const offset = 1000 * 60 * 60 * 9;
        const date = dateString ? new Date(new Date(dateString).getTime() - offset) : new Date();
        const adjustISODate = new Date(new Date(date).getTime() + offset).toISOString();
        const dateForm = adjustISODate.split('T')[0].split('-');

        const dayOfWeek = date.getDay();
        const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const dayOfWeekString = daysOfWeek[dayOfWeek];

        const dayStringForm = `${dateForm[1]}월 ${dateForm[2]}일 ${dayOfWeekString}`;

        return dayStringForm;
    }, [dateString]);
};

export default useFormatDate;
