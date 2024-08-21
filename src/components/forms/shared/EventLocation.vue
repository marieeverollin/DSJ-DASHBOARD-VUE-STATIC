<template>
    <div id="event-location-block" class="event-location border border-dsj-grey2 rounded-xl">
        <div class="location-header flex items-center justify-between bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Event Location</h3>
        </div>

        <div class="flex gap-x-5">
            <div class="flex flex-1 w-6/12 flex-col gap-y-5 p-5 pr-0">
                <div class="input-group flex items-center gap-x-5">
                    <label for="address" class="text-dsj-grey4 w-4/12"> Address </label>

                    <!-- <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="Search Places"
                        v-on:placechanged="getAddressData" country="ca" class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12">
                    </vue-google-autocomplete> -->

                    <InputText type="text" v-model="address" placeholder="Search Places"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-5">
                    <label for="locationName" class="text-dsj-grey4 w-4/12"> Name of the location <br>(Arena, Hall,
                        etc.)
                    </label>
                    <InputText type="text" v-model="locationName"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-5">
                    <label for="city" class="text-dsj-grey4 w-4/12"> City </label>
                    <InputText type="text" v-model="city"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-5">
                    <label for="postalCode" class="text-dsj-grey4 w-4/12"> Postal Code </label>
                    <InputText type="text" v-model="postalCode"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-5">
                    <label for="province" class="text-dsj-grey4 w-4/12"> Province </label>
                    <Select v-model="selectedProvince" :options="provinces" optionLabel="name" placeholder="Select"
                        class="rounded-md text-dsj-grey3 border border-dsj-grey2 shadow-none w-8/12" />
                </div>
            </div>

            <div class="flex-1 w-6/12 p-5">
                <div class="rounded-md bg-dsj-grey2 w-full h-full">
                    Google Maps here
                    <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center"
                        :zoom="15">
                        <Marker :options="{ position: center }" />
                    </GoogleMap> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { GoogleMap, Marker } from 'vue3-google-map';
// import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
    // components: { VueGoogleAutocomplete },
    data() {
        return {
            address: "",
            locationName: "",
            city: "",
            postalCode: "",
            selectedProvince: null,
            provinces: [
                { name: 'Alberta', value: 'ab' },
                { name: 'British Columbia', value: 'bc' },
                { name: 'Manitoba', value: 'mb' },
                { name: 'New Brunswick', value: 'nb' },
                { name: 'Newfoundland and Labrador', value: 'nl' },
                { name: 'Northwest Territories', value: 'nt' },
                { name: 'Nova Scotia', value: 'ns' },
                { name: 'Nunavut', value: 'nu' },
                { name: 'Ontario', value: 'on' },
                { name: 'Prince Edward Island', value: 'pe' },
                { name: 'Quebec', value: 'qc' },
                { name: 'Saskatchewan', value: 'sk' },
                { name: 'Yukon', value: 'yt' },
            ],
            //center: { lat: 40.689247, lng: -74.044502 },
        };
    },
    mounted() {
        // this.$refs.address.focus();
    },
    methods: {
        // getAddressData: function (addressData, placeResultData, id) {
        //     this.address = addressData;
        // },
    },
};
</script>

<style scoped></style>
