const USER_TOKENS = 'USER_TOKENS';

export const userStorage = {
    get() {
        const user = localStorage.getItem(USER_TOKENS);
        if (!user) return null;
        const parsedUser = JSON.parse(user);
        return parsedUser;
    },

    set(user) {
        localStorage.setItem(USER_TOKENS, JSON.stringify(user));
    },

    remove() {
        localStorage.removeItem(USER_TOKENS);
    },
};
