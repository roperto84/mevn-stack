<template>
    <div class="container">
        <div class="col-md-6 offset-md-3 mt-4">
            
            <div v-if="isErrors" class="alert alert-danger mb-2" role="alert">
                {{ errors }}
            </div>

            <social-login />

            <div class="card">
                <div class="card-header">
                    <p class="mb-0">Register</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="register" novalidate>
                        <div class="form-group">
                            <label>Name</label>
                            <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" placeholder="Name">
                            <div class="invalid-feedback" v-if="errors.name">
                                {{errors.name[0]}}
                            </div>
                        </div>
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
                            <input type="submit" value="Register" class="btn btn-light w-100">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin';

export default {
    middleware: 'guest',
    components: {
        SocialLogin
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
            error: this.$route.query.error,
        }
    },
    mounted() {
        this.$store.dispatch('validation/clearErrors');
    },
    methods: {
        async register() {
            try {
                const create = await this.$userRepository.create(this.form)

                if (create) this.$router.push({path: '/auth/login'});
                
            } catch (error) {
                console.log(error)
                return;
            }

        }
    }
}
</script>
