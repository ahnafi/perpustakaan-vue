<template>
    <!-- <AuthPage :auth="'register'" /> -->
    <h1>register page</h1>

    <form action="" method="" @submit.prevent="register">

        <label for="name">name</label>
        <input type="text" id="name" name="name" v-model="name">

        <label for="username">username</label>
        <input type="text" id="username" name="username" v-model="username">

        <label for="password">password</label>
        <input type="password" id="password" name="password" v-model="password">

        <button class="btn ">register</button>
    </form>
</template>

<script>
import AuthPage from '../components/AuthPage.vue';
import authServices from "../services/auth-services"

export default {
    components: {
        AuthPage
    },
    data() {
        return {
            name: "",
            username: "",
            password: ""
        }
    },
    methods: {
        async register() {
            await authServices.register(this.name, this.username, this.password)
        }
    }
}
</script>