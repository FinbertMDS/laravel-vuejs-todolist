<template lang="">
    <div class="app">
        <Navbar></Navbar>
        <div class="row">
            <div class="col-sm-4 offset-sm-4">
                <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    components: {
        Navbar: () => import('./Components/Header/Navbar.vue')
    },
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
}
</script>
