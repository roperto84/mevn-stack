<template>
    <div class="container">
        <div class="col-md-6 offset-md-3 mt-4">

            <div v-if="isErrors" class="alert alert-danger mb-2" role="alert">
                {{ errors }}
            </div>

            <div class="card">
                <div class="card-header">
                    <p class="mb-0">Login</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="login" novalidate>
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" placeholder="Email">
                            <div class="invalid-feedback" v-if="errors.email">
                                {{errors.email[0]}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="Password">
                            <div class="invalid-feedback" v-if="errors.password">
                                {{errors.password[0]}}
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Login" class="btn btn-light w-100">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    middleware: 'guest',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: this.$route.query.error
        }
    },
    mounted() {
        this.$store.dispatch('validation/clearErrors');
    },
    methods: {
        async login() {
            try {
                const login = await this.$auth.login({data: this.form});
                
                if (login) {
                    this.$store.commit('auth/isLogged', true)
                    this.$router.push('/dashboard')
                }
                
            } catch(e) {
                console.log(e)
            }
            
        }
    }
}
</script>
