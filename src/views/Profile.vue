<template>
    <div class="general_container">
        <AddNewLocation />
        <EditAccountInfo />
        <Sidebar />
        <section class="right_content_container">
            <div class="profile_container">
                <p class="profile_header_text">Account Information</p>
                <div class="information_holder">
                    <div class="personal_info_holder">
                        <img />
                        <div class="name_location_holder">
                            <p class="user_name">Agbi Ayodele</p>
                            <p class="user_location">Alimosho, Lagos Nigeria</p>
                        </div>
                    </div>
                    <div class="profile_buttons_holder">
                        <button class="add_location_button btn_3" @click="showAddLocationModal">Add new location</button>
                        <button class="edit_account_button btn_3" @click="showEditAccountInfoModal">Edit account information</button>
                    </div>
                </div>

                <div v-if="feeds.length > 0 && !loading">
                    <div v-for="(feed, i) in feeds" :key='i'>
                        <Post :feed="feed" :user="true" @refresh="removePost"/>
                    </div>
                </div>

                <clip-loader v-if="loading" :color="color" size="55px"></clip-loader>
            </div>
        </section>
    </div>
</template>

<script>

import configObject from "@/config";
import Sidebar from '@/components/Sidebar.vue'
import AddNewLocation from '@/components/modals/AddNewLocation.vue'
import EditAccountInfo from '@/components/modals/EditAccountInfo.vue'
import Post from '@/components/Post.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    name: 'Profile',
    components: {
        Sidebar,
        AddNewLocation,
        EditAccountInfo,
        Post,
        ClipLoader
    },
    data() {
        return {
            size: '25px',
            color: '#544743',
            loading: false,
            feeds: [],
        }
    }, 
    created() {
        this.getAllEntries()
    },
    mounted() {

    },
    methods: {
        showAddLocationModal() {
            this.$modal.show("AddNewLocationModal");
        },
        showEditAccountInfoModal() {
            this.$modal.show("EditAccountInfoModal");
        },
        getAllEntries() {
            this.loading = true
            this.axios
                .get(`${configObject.apiBaseUrl}/users/entry`, configObject.authConfig)
                .then(response => {
                    console.log(response.data.data)
                    this.feeds = response.data.data
                    this.loading = false
                })
                .catch(e => {
                    this.loading = false
                })
        },
        removePost(id) {
            this.feeds = this.feeds.filter(cur => cur._id != id)
        }
    }
}
</script>

<style>
    .add_new_location_modal {
        overflow-y: auto;
    }

    @media screen and (max-width: 602px) {
        .add_new_location_modal {
            /* top: 88px !important; */
            /* margin: 0 auto !important;
            width: 90% !important;
            height: 379px !important;
            left: 0 !important; */
        }
    }
</style>