export default $axios => resource => ({
    index() {
        return $axios.$get(`${resource}`)
    },
  
    show(id) {
        return $axios.$get(`${resource}/${id}`)
    },
  
    create(payload) {
        return $axios.$post(`${resource}/create`, payload)
    },

    login(payload) {
        return $axios.$post(`${resource}/login`, payload)
    },
  
    update(id, payload) {
        return $axios.$put(`${resource}/${id}`, payload)
    },
  
    delete(id) {
        return $axios.$delete(`${resource}/${id}`)
    },

})