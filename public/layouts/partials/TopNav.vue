<template>
    <div>
        <b-navbar type="light" variant="light" toggleable="lg">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">vue</nuxt-link>

                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_dropdown_collapse">
                    <b-navbar-nav>
                        <li v-if="authenticated" class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
                        </li>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <template v-if="authenticated">
                            <b-nav-item-dropdown>
                                <template slot="button-content">
                                    Hola {{user.name}}
                                </template>
                                <b-dropdown-item @click.prevent="signOut">Signout</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                            </li>
                        </template>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Logo from "@/components/Logo.vue";

    export default {
        components: {
            Logo
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated'
            })
        },
        methods: {
            signOut() {
                this.$store.commit('auth/isLogged', false)
                this.$auth.logout();
            }
        }
    }
</script>
