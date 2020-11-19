<template>
    <div>
        <h1>Acá no hay nada</h1>
        <p v-if="userLogged">User logged: {{userLogged}}</p>
    </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
    name: 'Home',
    computed:{
        userLogged(){

            return auth.getUserLogged();
        }
    }
}
</script>

<style scoped>

</style>