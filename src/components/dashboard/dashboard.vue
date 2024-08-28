<template>
    <div class="dashboard-container w-full relative flex flex-col md:flex-row bg-white rounded-2xl shadow-sm">
       
        <!-- Sidebar -->
        <SidebarDashboard :filters="eventFilters" :selectedFilter="selectedFilter" @update:filter="selectFilter" @sortOrder="sortEvents" @update:date="filterByDate" />

        <!-- Main Content -->
        <div class="main-content flex flex-col md:w-full gap-y-5 p-4 lg:p-12">
            <div class="filter-row flex flex-col xl:flex-row w-full items-center justify-between gap-4">
                <h2 class="filterSelected text-xl uppercase w-max text-dsj-yellow font-normal">{{ selectedFilter }}</h2>
                <Filters @sortOrder="sortEvents" @update:date="filterByDate" />
            </div>
            <EventsGroup :events="filteredAndSortedEvents" :selectedFilter="selectedFilter" @delete-event="deleteEvent" />
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
                    dates: [
                        {
                            day: '10th',
                            month: 'August',
                            year: 2024,
                            fullDate: 'August 10 2024',
                            time: {
                                from: '10:30:00 am',
                                to: '12:00:00 pm'
                            }
                        }
                    ],
                    status: 'upcoming',
                    title: 'A Learn to Longboard for Women+ with Sphere Adventure Programs',
                    location: {
                        address: '682-702 Main St',
                        type: 'Station One Skate Park'
                    }
                },
                {
                    id: 2,
                    dates: [
                        {
                            day: '5th',
                            month: 'October',
                            year: 2024,
                            fullDate: 'October 5 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                        {
                            day: '5th',
                            month: 'November',
                            year: 2024,
                            fullDate: 'November 5 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        }
                    ],
                    status: 'upcoming',
                    title: 'B Twice! Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },
                {
                    id: 3,
                    dates: [
                        {
                            day: '26th',
                            month: 'August',
                            year: 2024,
                            fullDate: 'August 26 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                        {
                            day: '28th',
                            month: 'August',
                            year: 2024,
                            fullDate: 'August 28 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                        {
                            day: '29th',
                            month: 'August',
                            year: 2024,
                            fullDate: 'August 29 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        }
                    ],
                    status: 'upcoming',
                    title: 'C Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },
                {
                    id: 4,
                    dates: [
                        {
                            day: '26th',
                            month: 'July',
                            year: 2024,
                            fullDate: 'July 26 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                        {
                            day: '26th',
                            month: 'August',
                            year: 2024,
                            fullDate: 'August 26 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                        {
                            day: '26th',
                            month: 'September',
                            year: 2024,
                            fullDate: 'September 26 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        }
                    ],
                    status: 'upcoming',
                    title: 'D Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },
                {
                    id: 5,
                    dates: [
                        {
                            day: '26th',
                            month: 'July',
                            year: 2024,
                            fullDate: 'July 26 2024',
                            time: {
                                from: '2:00:00 pm',
                                to: '5:00:00 pm'
                            }
                        },
                    ],
                    status: 'upcoming',
                    title: 'E Ryan Naismith LIVE at the Five & Dime',
                    location: {
                        address: '40 Grannan Street',
                        type: 'Five & Dime'
                    }
                },
                {
                    id: 6,
                    dates: [
                        {
                            day: '10th',
                            month: 'October',
                            year: 2024,
                            fullDate: 'October 10 2024',
                            time: {
                                from: '10:30:00 am',
                                to: '12:00:00 pm'
                            }
                        }
                    ],
                    status: 'upcoming',
                    title: 'F Learn to Longboard for Women+ with Sphere Adventure Programs',
                    location: {
                        address: '682-702 Main St',
                        type: 'Station One Skate Park'
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
                    return event.dates.some(date => {
                        const eventDate = new Date(date.fullDate);
                        return eventDate.toDateString() === new Date(this.filterDate).toDateString();
                    });
                });
            }
            return filteredEvents.sort((a, b) => {
                const getFirstDate = event => new Date(event.dates[0].fullDate);
                if (this.sortOrder === 'ascTitle') {
                    return a.title.localeCompare(b.title);
                } else if (this.sortOrder === 'descTitle') {
                    return b.title.localeCompare(a.title);
                } else if (this.sortOrder === 'recentToOldest') {
                    return getFirstDate(b) - getFirstDate(a);
                } else if (this.sortOrder === 'oldestToRecent') {
                    return getFirstDate(a) - getFirstDate(b);
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
        deleteEvent(eventId) {
            this.events = this.events.filter(event => event.id !== eventId);
        },
        updateEventStatuses() {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            this.events.forEach(event => {
                const firstDate = new Date(event.dates[0].fullDate);
                const lastDate = new Date(event.dates[event.dates.length - 1].fullDate);
                if (today > lastDate) {
                    event.status = 'past';
                } else if (today >= firstDate && today <= lastDate) {
                    event.status = 'in progress';
                } else {
                    event.status = 'upcoming';
                }
            });
        },
    },
    mounted() {
        this.updateEventStatuses();
    }
};
</script>

<style scoped></style>
