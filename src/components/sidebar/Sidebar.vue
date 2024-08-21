<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto">
        <div class="sticky top-0 left-0 right-0">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                <div class="sidebar-header flex gap-4 flex-col-reverse justify-between gap-x-4w w-full">

                    <div
                        class="md:hidden filterbar flex flex-col-reverse items-center sm:flex-row justify-between md:justify-end gap-2 w-full md:w-auto">
                        <div class="flex gap-2">
                            <DatePicker :model-value="icondisplay" @update:model-value="updateIconDisplay" showIcon
                                fluid iconDisplay="input"
                                class="date-picker max-w-8 border border-dsj-grey2 rounded-lg px-2" />
                            <IconField
                                class="az-filter flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                                <InputIcon class="pi pi-sliders-v h-4" />
                                <InputText :model-value="filterText" @input="updateFilterText" />
                            </IconField>
                            <IconField
                                class="mobile-filters flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                                <InputIcon class="pi pi-filter" />
                                <InputText :model-value="filterText" @input="updateFilterText" />
                            </IconField>
                        </div>

                        <IconField
                            class="search-bar flex items-center gap-x-2 border border-dsj-grey2 p-2 max-h-10 max-w-72 rounded-lg text-dsj-yellow text-sm shadow-none">
                            <InputIcon class="pi pi-search" />
                            <InputText :model-value="filterText" @input="updateFilterText" placeholder="Search"
                                class="shadow-none" />
                        </IconField>
                    </div>

                    <div class="sidebar-logo w-full flex items-center justify-center md:mb-2">
                        <img src="../../../images/logos/dsj_logo.png" alt="Logo" class="w-24 md:w-36 h-fit">
                    </div>
                </div>

                <router-link to="/events/add"
                    class="btn-add-event hidden md:flex items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 rounded-xl text-sm w-full mb-6"><i
                        class="pi pi-plus"></i>Add Event</router-link>

                <div class="hidden sidebar-filters md:flex flex-wrap md:flex-col gap-2 md:gap-y-5">
                    <a v-for="(filter, index) in filters" :key="index"
                        :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-7 rounded-lg md:rounded-xl text-sm cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === filter }]"
                        @click="selectFilter(filter)">{{ filter }}</a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    props: {
        filters: Array,
        selectedFilter: String,
        icondisplay: String,
        filterText: String,
        },
    data() {
        return {
        }
    },
    methods: {
        selectFilter(filter) {
            this.$emit('update:filter', filter);
        },
        updateFilterText(value) {
            this.$emit('update:filterText', value);
        },
        updateIconDisplay(value) {
            this.$emit('update:iconDisplay', value);
        }
    }
};
</script>

<style scoped></style>
