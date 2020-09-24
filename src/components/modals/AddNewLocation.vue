<template>
  <modal
    name="AddNewLocationModal"
    transition="pop-out"
    :width="modalWidth"
    :height="450"
  >
    <div class="add_new_location_modal profile_modals">
        <h3>Add new location</h3>
        <div class="input_location_holder registerd_location">
            <label>Registered Location</label>
            <div>
                <input type="text" class="profile_input_select" readonly value="Alimosho, Lagos Nigeria">
                <p>Remove</p>
            </div>
        </div>
        <div class="input_location_holder">
            <label>Add Secondary Address</label>
            <div>
                <select class="profile_input_select">
                    <option>Nigeria</option>
                </select>
                <select class="profile_input_select">
                    <option>Select State</option>
                </select>
                <select class="profile_input_select">
                    <option>L.G.A</option>
                </select>
            </div>
        </div>
        <div class="input_location_holder">
            <label>Add Secondary Address</label>
            <div>
                <select class="profile_input_select">
                    <option>Nigeria</option>
                </select>
                <select class="profile_input_select">
                    <option>Select State</option>
                </select>
                <select class="profile_input_select">
                    <option>L.G.A</option>
                </select>
            </div>
        </div>
        <div class="input_location_holder">
            <label>Add Secondary Address</label>
            <div>
                <select class="profile_input_select">
                    <option>Nigeria</option>
                </select>
                <select class="profile_input_select">
                    <option>Select State</option>
                </select>
                <select class="profile_input_select">
                    <option>L.G.A</option>
                </select>
            </div>
        </div>

        <button class="btn_2">Save Locations</button>
    </div>
  </modal>
</template>

<script>

const MODAL_WIDTH = 700;

export default {
    name: 'AddNewLocationModal',
    props: [],
    data() {
        return {
            modalWidth: MODAL_WIDTH
        }
    },
    created() {
        this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
    }, 
}
</script>

<style>

</style>