<template>
    <div class="container">
        <div class="col-md-6 offset-md-3 mt-4">

            <div v-if="error" class="alert alert-danger mb-2" role="alert">
                Your token appeared to be invalid. Please try again.
            </div>

            <div class="card">
                <div class="card-header">
                    <p class="mb-0">Edit user</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="save">
                        <div class="form-group">
                            <label>Name</label>
                            <input v-model="data.name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" placeholder="Name">
                            <div class="invalid-feedback" v-if="errors.name">
                                {{errors.name[0]}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="data.email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" placeholder="Email">
                            <div class="invalid-feedback" v-if="errors.email">
                                {{errors.email[0]}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="data.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="Password">
                            <div class="invalid-feedback" v-if="errors.password">
                                {{errors.password[0]}}
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Save" class="btn btn-light w-100">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        middleware: 'auth',
        data() {
            return {
                data: [],
                user_id: this.$route.params.user_id,
                error: this.$route.query.error,
            }
        },
        async asyncData(ctx) {
            const data = await ctx.app.$userRepository.show(ctx.params.user_id)

            return { data }
        },
        methods: {
            async save() {
                await this.$userRepository.update(this.user_id, this.data)
                    .then(this.notify('success', 'Bien!', 'El registro se ha guardado correctamente.') )
                    
                this.$router.push({name: 'dashboard'});
            },
        }
    };

</script>