<template>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
        <EventSingle v-for="(event, index) in paginatedEvents" :key="index" :event="event" :index="index + first"
            @delete-event="removeEvent" />
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
        selectedFilter: String
    },
    data() {
        return {
            first: 0,
            rowsPerPage: 3,
        };
    },
    computed: {
        totalRecords() {
            return this.filteredEvents.length;
        },
        filteredEvents() {
            if (this.selectedFilter === 'All Events') {
                return this.events;
            }
            const filterText = this.selectedFilter.toLowerCase();
            return this.events.filter((event) => {
                const eventStatus = event.status.toLowerCase();
                return (
                    (filterText === 'upcoming events' && eventStatus === 'upcoming') ||
                    (filterText === 'events in progress' && eventStatus === 'in progress') ||
                    (filterText === 'past events' && eventStatus === 'past')
                );
            });
        },
        paginatedEvents() {
            const start = this.first;
            const end = start + this.rowsPerPage;
            return this.filteredEvents.slice(start, end);
        },
    },
    methods: {
        removeEvent(index) {
            this.events.splice(index, 1);
        }
    }
};
</script>

<style scoped></style>
