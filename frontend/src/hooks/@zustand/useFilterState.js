import { create } from 'zustand';

const useFilterState = create((set, get) => ({
    basicState: 'fetchMyDiary',
    basicOption: '최근 생성일 순',
    dateValidate: () =>
        ['fetchMyDiary', 'fetchMyDiaryACS'].includes(get().basicState) ? 'createdAt' : 'updatedAt',
    changeState: (changeState) => set({ basicState: changeState }),
    changeOption: (changeOption) => set({ basicOption: changeOption }),
}));

export default useFilterState;
