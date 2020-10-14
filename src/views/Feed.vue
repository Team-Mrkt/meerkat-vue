<template>
    <div class="general_container">
        <Sidebar />
        <section class="right_content_container">
            <div class="feed_container_info">
                <div class="feed_search_input">
                    <img src="@/assets/img/search.png" />
                    <input type="search" placeholder="Search incidents/tags" class="search_incidents" />
                </div>
                
                <div class="feed_incident_description">
                    <div class="feed_upload_button_holder">
                        <b-form-file
                            v-model="incidentDetails.images"
                            placeholder="Upload Photos/Videos"
                            accept="image/jpeg, image/png, image/gif"
                            multiple
                        >
                        </b-form-file>
                    </div>
                    
                    <textarea placeholder="Uploaded By" v-model="incidentDetails.uploadedBy" rows="1"/>
                    <textarea placeholder="Title of incident" v-model="incidentDetails.title" rows="1"/>
                    <textarea placeholder="Give a brief description of the incident" v-model="incidentDetails.description" class="mt-3" rows="4"/>
                        
                    <div class="report_quick_report">
                        <div class="report_quick_report_content">
                            <input type="checkbox" value="isChecked" v-model="incidentDetails.quickReporting" />
                            <div class="quick_report_check" @click="toggleCheck">
                                <div class="quick_report_inner_check" :class="incidentDetails.quickReporting ? 'quick_report_inner_check_right' : ''"></div>
                            </div>
                            <p>Quick Reporting</p>
                        </div>
                        <button @click="submitReport" :class="loading ? 'loading' : null" :disabled="loading">
                            <p v-if="!loading">Report Incident</p>
                            <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
                        </button>
                    </div>
                </div>

                <div v-if="feeds.length > 0">
                    <div v-for="(feed, i) in feeds" :key='i'>
                        <Post :feed="feed" :user="false"/>
                    </div>
                </div>

                <clip-loader v-if="!feeds.length" :color="color" size="55px"></clip-loader>
            </div>
        </section>
    </div>
</template>

<script>

import configObject from "@/config";
import Sidebar from '@/components/Sidebar.vue'
import Post from '@/components/Post.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    name: 'Feed',
    data() {
        return {
            feeds: [],
            size: '25px',
            color: '#544743',
            loading: false,
            incidentDetails: {
                title: '',
                description: '',
                uploadedBy: '',
                images: [],
                quickReporting: false,
                location: {
                    latitude: '',
                    longitude: ''
                }
            }
        }
    },
    components: {
        Sidebar,
        Post,
        ClipLoader
    },
    created() {
        this.getAllEntries()
    },
    mounted() {
        this.getLocation()
    },
    methods: {
        showSuccessfulModal() {

        },
        toggleCheck() {
            this.incidentDetails.quickReporting = !this.incidentDetails.quickReporting
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

            this.axios
                .post(`${configObject.apiBaseUrl}/entry`, this.incidentDetails, configObject.authConfig)
                .then(response => {
                    this.loading = false
                    this.$toast('Successfully Added Entry', {
                        type: "success",
                        timeout: 3000
                    });
                })
                .catch(error => {
                    this.loading = false
                    this.$toast(error.response.data.message, {
                        type: "error",
                        timeout: 3000
                    });
                })
        },

        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.incidentDetails.location.latitude = position.coords.latitude
                    this.incidentDetails.location.longitude = position.coords.longitude
                });
            } 
        },

        getAllEntries() {
            this.axios
                .get(`${configObject.apiBaseUrl}/entry`, configObject.authConfig)
                .then(response => {
                    this.feeds = response.data.data
                })
                .catch(error => {
                })
        }
    }

}
</script>

<style>

</style>