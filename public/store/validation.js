export const state = () => ({
    errors: {},
    isErrors: false
});

export const getters = {
    errors(state) {
        return state.errors;
    },
    isErrors(state) {
        return state.isErrors;
    }
};

export const mutations = {
    SET_VALIDATION_ERRORS(state, errors) {
        state.errors = errors;
    },
    SET_ERRORS(state, error) {
        state.isErrors = error;
    }
};

export const actions = {
    setErrors({ commit }, errors) {
        commit('SET_VALIDATION_ERRORS', errors);
        commit('SET_ERRORS', true);
    },
    clearErrors({ commit }) {
        commit('SET_VALIDATION_ERRORS', {});
        commit('SET_ERRORS', false);
    }
};