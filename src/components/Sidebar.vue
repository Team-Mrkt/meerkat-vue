<template>
    <div class="sidebar_container">
        <img src="@/assets/img/smallLogo.png" />
        <div class="sidebar_links_container">
            <div>
                <router-link :to="{ name: 'Feed' }" class="vue_router_link sidebar_links">
                    Live Feed
                </router-link>
            </div>
            <div>
                <router-link :to="{ name: 'Profile' }" class="vue_router_link sidebar_links">
                    Profile
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Sidebar'

}
</script>

<style>

</style>