<template>
    <div>
        <Nav />
        <div class="row content_container">
            <section class="side_meerkat_container col-md-4">
                <div class="side_meerkat_text_container">
                    <p class="side_meerkat_text">“Community Safety is essential for peoples’ quality of life and it is on of the first things people check when judging a city”</p>
                    <p class="quick_margin_bottom quote_author side_meerkat_text">-STEVE FRADY</p>
                </div>
                <div class="quickreport_image_holder">
                </div>
            </section>
            <section class="col-md-8 about_content_container right_back_color">
                <h3>Meekart wants you to help keep the community safer.</h3>
                <p>Quick and easy way to report any <b>recent</b> or <b>potential</b> incidence or issues that needs addressing in you community. You can report annonymously or Sign Up to become a Meerkarter in your community.</p>
                <!-- <button class="btn_1">Report Incident</button> -->
                <router-link :to="{ name: 'QuickReport' }" class="quick_report_button btn_1 vue_router_link">
                    Report Incident
                </router-link>
            </section>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
    name: "About",
    components: {
        Nav,
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

<style>

</style>