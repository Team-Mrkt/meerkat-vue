<template>
    <div>
        <SuccessfulReport />
        <Nav />
        <div class="row content_container">
            <section class="side_meerkat_container col-md-4">
                <p class="quick_margin_bottom">We want to help Citizens with insights to reveal regular issues, predict potential incidence and be one step away from danger.</p>
                <div class="quickreport_image_holder">
                </div>
            </section>
            <section class="col-md-8 quick_report_container right_back_color">
                <div class="quick_report_section">
                    <p class="quick_report_text">Quick Report</p>
                    <div class="quick_report_description_holder"> 
                        <textarea placeholder="Give a brief description of the incident" rows="4"/>
                        <div>
                            <button>Upload Photos/Videos</button>
                        </div>
                    </div>
                    <div class="report_quick_report">
                        <div>
                            <input type="checkbox" style="display: none;" />
                            <div class="quick_report_check">
                                <div class="quick_report_inner_check"></div>
                            </div>
                            <p>Quick Reporting</p>
                        </div>
                        <button @click="showSuccessfulModal">Report Incident</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import SuccessfulReport from '@/components/modals/ReportSuccessful.vue'

export default {
    name: "QuickReport",
    components: {
        Nav,
        SuccessfulReport
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
        showSuccessfulModal() {
            this.$modal.show("ReportSuccessfulModal");
        }
    }
}
</script>