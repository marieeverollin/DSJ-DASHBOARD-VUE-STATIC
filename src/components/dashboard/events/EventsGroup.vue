<template>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
        <EventSingle v-for="event in paginatedEvents" :key="event.id" :event="event" />
    </div>

    <Paginator v-model:first="first" :rows="rowsPerPage" :totalRecords="totalRecords"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{currentPage}" class="text-xs" />
</template>

<script>
export default {
    props: {
        events: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            first: 0,
            rowsPerPage: 3,
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
    computed: {
        totalRecords() {
            return this.events.length;
        },
        paginatedEvents() {
            const start = this.first;
            const end = start + this.rowsPerPage;
            return this.events.slice(start, end);
        }
    },
};
</script>

<style scoped></style>
