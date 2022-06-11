<template lang="">
		<nav class="navBar navbar navbar-expand-lg navbar-light bg-light">
				<ul class="navbar-nav mr-auto navBar_link">
					 <li v-if="!account.status.loggedIn" class="nav-item"><router-link  :to="{name:'login'}">Login</router-link></li>
					 <li v-if="!account.status.loggedIn" class="nav-item"><router-link  :to="{name:'register'}">Register</router-link></li>
					 <li v-if="account.status.loggedIn" class="nav-item"><router-link  :to="{name:'home'}">Todo</router-link></li>
					 <li v-if="account.status.loggedIn" class="nav-item"><router-link  :to="{name:'logout'}" @click.native="LogoutButtonClickHandler">Logout</router-link></li>
				</ul>
		</nav>
</nav>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "navbar",
	computed: {
			...mapState({
					account: state => state.account,
			})
	},
	methods: {
		...mapActions('account', ['logout']),
    LogoutButtonClickHandler(event) {
			this.logout();
    }
  }
};
</script>
<style lang="">
</style>
