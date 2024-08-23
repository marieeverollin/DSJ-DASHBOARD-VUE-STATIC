<template>
    <div class="dashboard-container w-full relative flex flex-col md:flex-row bg-white rounded-2xl shadow-sm">
       
        <!-- Sidebar -->
        <SidebarDashboard :filters="eventFilters" :selectedFilter="selectedFilter" @update:filter="selectFilter" @sortOrder="sortEvents" @update:date="filterByDate" />

        <!-- Main Content -->
        <div class="main-content flex flex-col md:w-full gap-y-5 p-4 lg:p-12">
            <div class="filter-row flex md:flex-col lg:flex-row w-full items-center justify-between gap-4">
                <h2 class="filterSelected text-xl uppercase w-max text-dsj-yellow font-normal">{{ selectedFilter }}</h2>
                <Filters @sortOrder="sortEvents" @update:date="filterByDate" />
            </div>
            <EventsGroup :events="filteredAndSortedEvents" :selectedFilter="selectedFilter" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventFilters: ['All Events', 'Upcoming Events', 'Events in Progress', 'Past Events'],
            selectedFilter: 'All Events',
            events: [
                {
                    id: 1,
                    date: {
                        day: '10th',
                        month: 'September',
                        year: 2024,
                        fullDate: 'September 10 2024'
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
                        fullDate: 'August 5 2024'
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
                        fullDate: 'August 5 2024'
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
                        fullDate: 'July 25 2024'
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
                        fullDate: 'July 5 2024'
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
            ],
            sortOrder: 'recentToOldest',
            filterDate: null,
        };
    },
    computed: {
        filteredAndSortedEvents() {
            let filteredEvents = this.events;

            if (this.filterDate) {
                filteredEvents = filteredEvents.filter(event => {
                    const eventDate = new Date(event.date.fullDate);
                    return eventDate.toDateString() === new Date(this.filterDate).toDateString();
                });
            }

            return filteredEvents.sort((a, b) => {
                if (this.sortOrder === 'ascTitle') {
                    return a.title.localeCompare(b.title);
                } else if (this.sortOrder === 'descTitle') {
                    return b.title.localeCompare(a.title);
                } else if (this.sortOrder === 'recentToOldest') {
                    return new Date(b.date.fullDate) - new Date(a.date.fullDate);
                } else if (this.sortOrder === 'oldestToRecent') {
                    return new Date(a.date.fullDate) - new Date(b.date.fullDate);
                }
                return 0;
            });
        }
    },
    methods: {
        selectFilter(event) {
            this.selectedFilter = event;
        },
        sortEvents(order) {
            this.sortOrder = order;
        },
        filterByDate(date) {
            this.filterDate = date;
        },
    }
};
</script>

<style scoped></style>
