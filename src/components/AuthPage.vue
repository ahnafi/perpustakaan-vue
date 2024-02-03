<template>
    <div>
        <h1>{{ auth }}</h1>
        <form @submit.prevent>
            <label v-if="auth == 'register'" for="" >name</label>
            <input v-if="auth == 'register'" type="text" v-bind="name">
            <label for="">username</label>
            <input type="text" v-bind="username">
            <label for="">password</label>
            <input type="text">
            <label v-if="auth == 'register'" for="" v-bind="passwordF">password</label>
            <input v-if="auth == 'register'" type="text">
            <button class="btn" @click="submit + auth">{{ auth }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["auth"],
    data() {
        return {
            name,
            username,
            password
        }
    },
    emits: ["register", "login"],
    methods: {
        submitregister() {
            console.log("register")
            // this.$emit(this.auth,)
        },
        submitlogin(){
            console.log("login")
        }
    }
}
</script>