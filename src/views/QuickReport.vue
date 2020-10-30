<template>
    <div>
        <SuccessfulReport />
        <Nav />
        <div class="row content_container">
            <section class="side_meerkat_container col-md-4">
                <div class="side_meerkat_text_container">
                    <p class="quick_margin_bottom side_meerkat_text">We want to help Citizens with insights to reveal regular issues, predict potential incidence and be one step away from danger.</p>
                </div>
                <div class="quickreport_image_holder">
                </div>
            </section>
            <section class="col-md-8 quick_report_container right_back_color">
                <div class="quick_report_section">
                    <p class="quick_report_text">Quick Report</p>
                    <div class="quick_report_description_holder"> 
                        <textarea placeholder="Uploaded By" v-model="incidentDetails.uploadedBy" rows="1"/>
                        <textarea placeholder="Title of incident" v-model="incidentDetails.title" rows="1"/>
                        <textarea placeholder="Give a brief description of the incident" v-model="incidentDetails.description"  rows="4"/>
                        <div>
                            <b-form-file
                                v-model="incidentDetails.images"
                                placeholder="Upload Photos/Videos"
                                accept="image/jpeg, image/png, image/gif"
                                multiple
                            >
                            </b-form-file>
                        </div>
                    </div>
                    <div class="report_quick_report">
                        <div class="report_quick_report_content">
                            <input type="checkbox" value="isChecked" v-model="incidentDetails.quickReporting" />
                            <div class="quick_report_check" @click="toggleCheck">
                                <div class="quick_report_inner_check" :class="incidentDetails.quickReporting ? 'quick_report_inner_check_right' : ''"></div>
                            </div>
                            <p>Quick Reporting</p>
                        </div>
                        <button @click="submitReport">
                            <p v-if="!loading">Report Incident</p>
                            <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import configObject from "@/config";
import Nav from '@/components/Nav.vue'
import SuccessfulReport from '@/components/modals/ReportSuccessful.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    name: "QuickReport",
    components: {
        Nav,
        SuccessfulReport,
        ClipLoader
    },
    data() {
        return {
            size: '25px',
            color: 'white',
            loading: false,
            incidentDetails: {
                title: '',
                description: '',
                uploadedBy: '',
                images: [],
                quickReporting: false,
                contentURL: 'url',
                contentType: 'type',
                location: {
                    type: 'point',
                    coordinates: [2, 3]
                }
            }
        }
    }, 
    created() {

    },
    mounted() {
        this.getLocation()
        console.log(JSON.stringify(this.incidentDetails.location))
    },
    methods: {
        toggleCheck() {
            this.incidentDetails.quickReporting = !this.incidentDetails.quickReporting
        },
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.incidentDetails.location.coordinates.push(position.coords.latitude)
                    this.incidentDetails.location.coordinates.push(position.coords.longitude)
                });
            } 
        },
        submitReport() {
            if (!this.incidentDetails.title) {
                this.$toast('Please input a title', {
                    type: "error",
                    timeout: 3000
                });
                return
            }
            if (!this.incidentDetails.description) {
                this.$toast('Please input a description', {
                    type: "error",
                    timeout: 3000
                });
                return
            }
            this.loading = true
            console.log(this.incidentDetails)

            this.axios
                .post(`${configObject.apiBaseUrl}/entry`, this.incidentDetails, configObject.authConfig)
                .then(response => {
                    this.loading = false
                    this.$toast('Successfully Added Entry', {
                        type: "success",
                        timeout: 3000
                    });
                    this.$modal.show("ReportSuccessfulModal");
                })
                .catch(error => {
                    this.loading = false
                    this.$toast(error.response.data.message, {
                        type: "error",
                        timeout: 3000
                    });
                })
        }
    }
}
</script>