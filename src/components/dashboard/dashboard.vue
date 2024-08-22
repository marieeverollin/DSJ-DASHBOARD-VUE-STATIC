<template>
    <div class="dashboard-container w-full relative flex flex-col md:flex-row bg-white rounded-2xl shadow-sm">

        <!-- Sidebar -->
        <Sidebar :filters="eventFilters" :selectedFilter="selectedFilter" @update:filter="selectFilter" />

        <!-- Main Content -->
        <div class="main-content flex flex-col md:w-full gap-y-5 p-4 lg:p-12">
            <div class="filter-row flex md:flex-col lg:flex-row w-full items-center justify-between gap-4">
                <h2 class="filterSelected text-xl uppercase w-max  text-dsj-yellow font-normal">{{ selectedFilter }} </h2>

                <!-- Filters Desktop -->
                <router-link to="/events/add"
                    class="btn-add-event md:hidden bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm w-fit flex gap-2"><i
                        class="pi pi-plus"></i>Add Event</router-link>
                <div class="hidden filterbar md:w-full lg:w-fit md:flex md:justify-between lg:justify-end gap-2">
                    <div class='flex gap-x-2'>
                        <DatePicker v-model="filterDate" showIcon fluid iconDisplay="input" placeholder=" " class="date-picker flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square min-w-10 max-h-10 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer" />
                        <Button icon="pi pi-sliders-v" class="tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer" />
                    </div>
                    <IconField
                        class="search-bar flex items-center gap-x-2 border border-dsj-grey2 p-2 w-full max-h-10 lg:max-w-72 rounded-lg text-dsj-yellow text-sm shadow-none">
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="searchBar" placeholder="Search" class="shadow-none" />
                    </IconField>
                </div>
                <!-- ----------------- -->
            </div>

            <EventsGroup :events="events" :selectedFilter="selectedFilter" />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventFilters: ['All Events', 'Upcoming Events', 'Events in Progress', 'Past Events'],
            selectedFilter: 'All Events',
            azFilter: '',
            searchBar: '',
            filterDate: '',
            events: [
                {
                    id: 1,
                    date: {
                        day: '10th',
                        month: 'September',
                        year: 2024,
                        fullDate: 'September 10th 2024'
                    },
                    time: {
                        from: '10:30:00 am',
                        to: '12:00:00 pm'
                    },
                    status: 'upcoming',
                    title: 'Learn to Longboard for Women+ with Sphere Adventure Programs',
                    location: {
                        address: '682-702 Main St',
                        type: 'Station One Skate Park'
                    }
                },
                {
                    id: 2,
                    date: {
                        day: '5th',
                        month: 'August',
                        year: 2024,
                        fullDate: 'August 5th 2024'
                    },
                    time: {
                        from: ' 2:00:00 pm',
                        to: ' 5:00:00 pm'
                    },
                    status: 'in progress',
                    title: 'Celebrate New Brunswick Day at the Fundy Trail Provincial Park',
                    location: {
                        address: '3 Fundy Trail Parkway',
                        type: 'Long Beach'
                    }
                },
                {
                    id: 3,
                    date: {
                        day: '5th',
                        month: 'August',
                        year: 2024,
                        fullDate: 'August 5th 2024'
                    },
                    time: {
                        from: ' 2:00:00 pm',
                        to: ' 5:00:00 pm'
                    },
                    status: 'in progress',
                    title: 'Celebrate New Brunswick Day at the Fundy Trail Provincial Park',
                    location: {
                        address: '3 Fundy Trail Parkway',
                        type: 'Long Beach'
                    }
                },
                {
                    id: 4,
                    date: {
                        day: '25th',
                        month: 'July',
                        year: 2024,
                        fullDate: 'July 25th 2024'
                    },
                    time: {
                        from: ' 2:00:00 pm',
                        to: ' 5:00:00 pm'
                    },
                    status: 'past',
                    title: 'Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },

                {
                    id: 5,
                    date: {
                        day: '5th',
                        month: 'July',
                        year: 2024,
                        fullDate: 'July 5th 2024'
                    },
                    time: {
                        from: ' 2:00:00 pm',
                        to: ' 5:00:00 pm'
                    },
                    status: 'past',
                    title: 'Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },
            ]
        };
    },
    methods: {
        selectFilter(event) {
            this.selectedFilter = event;
            console.log('Selected Filter:', event);
            this.selectedFilter = event;
        }
    }
};
</script>

<style scoped></style>
