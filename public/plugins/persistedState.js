import createPersistedState from 'vuex-persistedstate'
//import Cookies from 'vue-js-cookie'

export default ({ store }) => {
    createPersistedState({
         key: 'vuex',
         storage: window.localStorage,
        //  storage: {
        //      getItem: key => Cookies.get(key),
        //      setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false }),
        //      removeItem: key => Cookies.remove(key),
        //  },
     })(store);
}
