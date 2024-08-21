<template>
    <div
        class="event-form-container relative flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-visible">

        EDIT EVENT

        <!-- Sidebar -->
        <aside class="sidebar w-full md:w-56 h-auto">
            <div class="sticky top-0 left-0 right-0">
                <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                    <div class="sidebar-header flex gap-4 flex-col-reverse justify-between gap-x-4w w-full">

                        <div
                            class="md:hidden filterbar flex flex-col-reverse items-center sm:flex-row justify-between md:justify-end gap-2 w-full md:w-auto">
                            <div class="flex gap-2">
                                <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input"
                                    class="date-picker max-w-8 border border-dsj-grey2 rounded-lg px-2" />
                                <IconField
                                    class="az-filter flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                                    <InputIcon class="pi pi-sort-alpha-down h-4" />
                                    <InputText v-model="value1" />
                                </IconField>
                                <IconField
                                    class="mobile-filters flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                                    <InputIcon class="pi pi-filter" />
                                    <InputText v-model="value1" />
                                </IconField>
                            </div>

                            <IconField
                                class="search-bar flex items-center gap-x-2 border border-dsj-grey2 p-2 max-h-10 max-w-72 rounded-lg text-dsj-yellow text-sm shadow-none">
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="value1" placeholder="Search" class="shadow-none" />
                            </IconField>
                        </div>

                        <div class="sidebar-logo w-full flex items-center justify-center md:mb-2">
                            <img src="../../../images/logos/dsj_logo.png" alt="Logo" class="w-24 md:w-36 h-fit">
                        </div>
                    </div>

                    <Button label="Add Event" icon="pi pi-plus"
                        class="btn-add-event hidden md:flex bg-dsj-yellow text-white py-2.5 rounded-xl text-sm w-full mb-6" />

                    <div class="hidden sidebar-filters md:flex flex-wrap md:flex-col gap-2 md:gap-y-5">
                        <a v-for="(event, index) in events" :key="index"
                            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-7 rounded-lg md:rounded-xl text-sm cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === event }]"
                            @click="selectFilter(event)">{{ event }}</a>
                    </div>
                </div>
            </div>
        </aside>


        <!-- Main Content -->
        <div class="main-content flex flex-col flex-1 gap-y-5 p-4 lg:p-12">
            <div class="filter-row flex md:flex-col-reverse xl:flex-row w-full justify-between gap-4">

                <h3 class="filterSelected text-2xl uppercase text-dsj-yellow font-normal">{{ selectedFilter }}</h3>
                <Button label="Add Event" icon="pi pi-plus"
                    class="btn-add-event md:hidden bg-dsj-yellow text-white py-2.5 px-3 rounded-lg text-sm w-fit" />


                <div class="hidden filterbar md:flex justify-end gap-2">
                    <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input"
                        class="date-picker max-w-8 border border-dsj-grey2 rounded-lg px-2" />
                    <IconField
                        class="az-filter flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                        <InputIcon class="pi pi-sort-alpha-down" />
                        <InputText v-model="value1" />
                    </IconField>
                    <IconField
                        class="search-bar flex items-center gap-x-2 border border-dsj-grey2 px-2 max-h-10 max-w-72 rounded-lg text-dsj-yellow text-sm shadow-none">
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="value1" placeholder="Search" class="shadow-none" />
                    </IconField>
                </div>
            </div>

            <EventsGroup />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: ['All Events', 'Events in Progress', 'Upcoming Events', 'Past Events'],
            selectedFilter: 'All Events',
        };
    },
    methods: {
        selectFilter(event) {
            this.selectedFilter = event;
        }
    }
};
</script>

<style scoped></style>
