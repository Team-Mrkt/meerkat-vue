<template>
    <diiv>
        <Header />
        <section class="row" style="height: 100vh;">
            <section class="col-md-8 intro">
                <p class="about_meerkat">Meerkat is the fast way to report and explore community incidents</p>
                <p class="more_info_meerkat">With Location GPS, Photos and short descriptions, you can keep your community aware of issues that needs to be addressed and potential harmful incidence.</p>
                <img src="@/assets/img/bigLogo.png" class="big_logo" />
                <button class="quick_report_button">
                    Quick Report
                </button>
                <button class="homepage_signup_button">
                    Sign up
                </button>

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
        </section>
    </diiv>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
    name: "Homepage",
    components: {
        Header
    },
    data() {
        return {

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