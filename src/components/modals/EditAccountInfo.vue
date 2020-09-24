<template>
  <modal
    name="EditAccountInfoModal"
    transition="pop-out"
    :width="450"
    :height="350"
  >
    <div class="edit_account_info_modal profile_modals">
        <h3>Account Information</h3>
        <div class="input_location_holder registerd_location edit_account_info_input">
            <label>Email Address</label>
            <div>
                <input type="text" readonly
                class="profile_input_select" value="agbiayodele@gmail.com">
            </div>
        </div>
        
        <div class="input_location_holder registerd_location edit_account_info_input">
            <label>Username</label>
            <div>
                <input type="text" class="profile_input_select" value="Agbi Ayodele">
            </div>
        </div>

        <button class="btn_2">Save Changes</button>
    </div>
  </modal>
</template>

<script>

// const MODAL_WIDTH = 700;

export default {
    name: 'EditAccountInfoModal',
    props: [],
    data() {
        return {
            // modalWidth: MODAL_WIDTH
        }
    },
    created() {
        // this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
    }, 
}
</script>

<style>

</style>