<template>
    <header class="header">
        <img src="@/assets/img/smallLogo.png" />
        <div class="header_buttons">
            <router-link 
                :to="{ name: 'Homepage' }" 
                class="vue_router_link"
            ><p>Home</p>
            </router-link>
            <router-link 
                :to="{ name: 'About' }" 
                class="vue_router_link"
            ><p>About</p>
            </router-link>
            <router-link 
                :to="{ name: 'QuickReport' }" 
                class="vue_router_link"
            ><p>Quick Report</p>
            </router-link>
            <router-link 
                :to="{ name: 'Homepage' }" 
                class="vue_router_link"
            ><p>Sign In</p>
            </router-link>
            <router-link 
                :to="{ name: 'Homepage' }" 
                class="vue_router_link"
            >
                <button class="header_signup_button">Sign up</button>
            </router-link>
        </div>

    </header>
</template>

<script>
export default {
    name: 'Nav',
}
</script>