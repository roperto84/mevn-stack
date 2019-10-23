export const getters = {
    authenticated(state) {
        return state.loggedIn;
    },
    user(state) {
        return state.user;
    }
};

export const mutations = {
    //setUser: (state, user) => state.userLogged = user,
    isLogged: (state, loggedIn) => state.loggedIn = loggedIn,
};

export const state = () => ({
    busy: false,
    loggedIn: false,
    strategy: "local",
    user: false,
    //userLogged: []
});