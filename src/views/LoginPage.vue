<template>
    <!-- <AuthPage :auth="'register'" /> -->
    <h1>register page</h1>

    <form action="" method="" @submit.prevent="login">

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
            username: "",
            password: ""
        }
    },
    methods: {
        async login() {
            const token = await authServices.login(this.username, this.password)
            localStorage.setItem("token", token);
            this.$router.push('/home');
        },
    }
}
</script>