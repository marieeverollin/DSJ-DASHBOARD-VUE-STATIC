<template>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
        <EventSingle v-for="(event, index) in paginatedEvents" :key="event.id" :event="event" :index="index + first" @delete-event="$emit('delete-event', $event)" />
    </div>

    <Paginator v-model:first="first" :rows="rowsPerPage" :totalRecords="totalRecords" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{currentPage}" class="text-xs" />
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
            rowsPerPage: 6,
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
    emits: ['delete-event'],
    methods: {
        removeEvent(id) {
            this.$emit('delete-event', id);
        },
        generateId() {
            return Math.random().toString(36).substr(2, 9);
        }
    },
    created() {
        this.events.forEach(event => {
            if (!event.id) {
                event.id = this.generateId();
            }
        });
    }
};
</script>
