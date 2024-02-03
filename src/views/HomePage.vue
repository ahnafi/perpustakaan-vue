<template>
    home page
    <h1>wolcome back {{ name }}</h1>
    <button @click="logout">logout</button>
</template>

<script>
import authServices from '../services/auth-services';


export default {
    data() {
        return {
            token: localStorage.getItem("token"),
            name: "",
            username: ""
        }
    },

    async mounted() {
        const token = localStorage.getItem("token")
        const user = await authServices.getUser(token)
        if (!user) {
            this.$router.push('/')
            localStorage.removeItem("token")
            return;
        }
        this.name = user.name
        this.username = user.username
    },
    methods: {
        async logout() {
            await authServices.logout(this.token)
            localStorage.removeItem("token")
            this.$router.push('/');
        }
    }
}
</script>