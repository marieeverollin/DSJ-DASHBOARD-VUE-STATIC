<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto">
        
        <div class="sidebar-content top-0 left-0 right-0">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                <div class="sidebar-header flex gap-4 flex-col-reverse justify-between gap-x-4w w-full">


                    <!-- Filterbar Mobile -->
                    <div
                        class="md:hidden filterbar filters-mobile flex md:flex-row flex-col-reverse items-center justify-center md:justify-between gap-2 flex-wrap">
                        <div class="flex gap-2">
                            <DatePicker v-model="filterDate" showIcon fluid iconDisplay="input" placeholder=" " class="date-picker flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer" />

                            <Button icon="pi pi-sliders-v" @click="visibleRightSort = true" class="tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer" />
                            <Drawer v-model:visible="visibleRightSort" header="Sort" position="right">
                                <a href="#" class="border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer">A to Z</a>
                                <a href="#" class="border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer">Z to A</a>
                            </Drawer>

                            <Button icon="pi pi-filter" @click="visibleRightFilters = true" class="tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer" />
                            <Drawer v-model:visible="visibleRightFilters" header="Filters" position="right" class="">
                                <a v-for="(filter, index) in filters" :key="index" :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === filter }]" @click="selectFilter(filter)">{{ filter }}</a>
                            </Drawer>
                        </div>

                        <IconField
                            class="search-bar flex items-center gap-x-2 border border-dsj-grey2 p-2 max-h-10 w-full rounded-lg text-dsj-yellow text-sm shadow-none">
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="searchBar" placeholder="Search" class="shadow-none" />
                        </IconField>
                    </div>

                    <!-- -------------------------- -->

                    <div class="sidebar-logo w-full flex items-center justify-center md:mb-2">
                        <img src="../../../../images/logos/dsj_logo.png" alt="Logo" class="w-24 md:w-36 h-fit">
                    </div>
                </div>

                <router-link to="/events/add"
                    class="btn-add-event hidden md:flex items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 rounded-xl text-sm w-full min-w-36 mb-6"><i
                        class="pi pi-plus"></i>Add Event</router-link>

                <div class="hidden sidebar-filters md:flex flex-wrap md:flex-col gap-2 md:gap-y-5">
                    <a v-for="(filter, index) in filters" :key="index"
                        :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === filter }]"
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
            azFilter: '',
            searchBar: '',
            filterDate: '',
            visibleRightFilters: false,
            visibleRightSort: false
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
