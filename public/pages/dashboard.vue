<template>
    <div class="container">
        <h1>Welcome {{ user.name }}</h1>
        <ul>
            <li v-for="(item, index) in users" :key="item._id">
                <strong> <nuxt-link :to="`/${item._id}/edit`">{{ item.name }}</nuxt-link> </strong> - {{ item.email }}
                <button @click.prevent="borrar(item._id, index)">Borrar</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        middleware: 'auth',
        data() {
            return {
                users: []
            }
        },
        async asyncData(ctx) {
            const users = await ctx.app.$userRepository.index();
            
            return { users }
        },
        methods: {
            borrar(id, index) {
                this.$dialog.confirm('Please confirm to continue')
                .then(async(dialog) => {
                    await this.$userRepository.delete(id)
                    this.users.splice(index, 1)
                })
                .then(this.notify('success', 'Bien!', 'El registro se ha borrado correctamente.'))
                .catch(e => console.log(e));
            }
        }
    };

</script>
