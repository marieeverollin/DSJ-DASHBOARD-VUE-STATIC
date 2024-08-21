<template>
    <div class="dashboard-container w-full relative flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-visible">

        <!-- Sidebar -->
        <Sidebar :events="events" :selectedFilter="selectedFilter" :value1="value1" :icondisplay="icondisplay"
            @update:filter="selectFilter" />


        <!-- Main Content -->
        <div class="main-content flex flex-col flex-1 gap-y-5 p-4 lg:p-12">
            <div class="filter-row flex md:flex-col-reverse xl:flex-row w-full justify-between gap-4">

                <h2 class="filterSelected text-xl uppercase text-dsj-yellow font-normal">{{ selectedFilter }}</h2>
                <Button label="Add Event" icon="pi pi-plus"
                    class="btn-add-event md:hidden bg-dsj-yellow text-white py-2.5 px-3 rounded-lg text-sm w-fit" />


                <div class="hidden filterbar md:flex justify-end gap-2">
                    <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input"
                        class="date-picker max-w-8 border border-dsj-grey2 rounded-lg px-2" />
                    <IconField
                        class="az-filter flex items-center gap-x-2 border border-dsj-grey2 px-2 max-w-8 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer">
                        <InputIcon class="pi pi-sliders-v" />
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
