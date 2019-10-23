
export default function({ $axios, store }) {
    
    $axios.onRequest(() => {
        store.dispatch('validation/clearErrors');
    });

    $axios.onError(error => {
        
        if (error.response.status === 400) {
            store.dispatch('validation/setErrors', error.response.data.errors);
        }

        return Promise.reject(error);
    });
}