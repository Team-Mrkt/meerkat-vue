<template>
    <div>
        <Nav />
        <div class="row content_container">
            <section class="col-md-8 intro">
                <p class="about_meerkat">Meerkat is the fast way to report and explore community incidents</p>
                <p class="more_info_meerkat">With Location GPS, Photos and short descriptions, you can keep your community aware of issues that needs to be addressed and potential harmful incidence.</p>
                <div class="homepage_button_holder">
                    <!-- <button class="quick_report_button btn_1">
                        Quick Report
                    </button> -->
                    <router-link :to="{ name: 'QuickReport' }" class="quick_report_button btn_1 vue_router_link">
                        Quick Report
                    </router-link>
                    <router-link :to="{ name: 'SignUp' }" class="homepage_signup_button vue_router_link">
                        Sign Up
                    </router-link>
                </div>
                

            </section>
            <section class="col-md-4 homepage_inputs">
                <p class="trending_text">Trending incidents/ tags/ locations</p>
                <input class="search_incident_input" placeholder="Search incidents / tags/ locations" />
                <div class="areas">
                    <div class="areas_1">
                        <p>Covid-19</p>
                        <p>Ikoyi, Lagos</p>
                    </div>
                    <div class="areas_2">

                    </div>
                </div>
                <div class="areas">
                    <div class="areas_1">
                        <p>Covid-19</p>
                        <p>Ikoyi, Lagos</p>
                    </div>
                    <div class="areas_2">

                    </div>
                </div>
                <div class="areas">
                    <div class="areas_1">
                        <p>Covid-19</p>
                        <p>Ikoyi, Lagos</p>
                    </div>
                    <div class="areas_2">

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import bigLogo from '@/assets/img/bigLogo.png'

export default {
    name: "Homepage",
    components: {
        Nav,
    },
    data() {
        return {
            bigLogo
        }
    }, 
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>