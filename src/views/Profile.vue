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
            </div>
        </section>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import AddNewLocation from '@/components/modals/AddNewLocation.vue'
import EditAccountInfo from '@/components/modals/EditAccountInfo.vue'

export default {
    name: 'Profile',
    components: {
        Sidebar,
        AddNewLocation,
        EditAccountInfo
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
        showAddLocationModal() {
            this.$modal.show("AddNewLocationModal");
        },
        showEditAccountInfoModal() {
            this.$modal.show("EditAccountInfoModal");
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