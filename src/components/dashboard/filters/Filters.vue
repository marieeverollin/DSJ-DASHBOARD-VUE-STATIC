<template>
    <!-- Filters Desktop -->
    <router-link to="/events/add" class="btn-add-event md:hidden bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm w-fit flex gap-2"><i class="pi pi-plus"></i>Add Event </router-link>
        <div class="filters-desktop filterbar hidden md:w-full lg:w-fit md:flex md:justify-between lg:justify-end gap-2">
        <div class='flex gap-x-2'>
            <Calendar @update:date="filterByDate" />
            <Sort @sortOrder="handleSortOrder" />
        </div>
        <Searchbar />
    </div>
</template>

<script>
export default {
    props: {
        filters: Array,
        selectedFilter: String,
        icondisplay: String,
        filterText: String,
    },
    emits: ['update:date', 'sortOrder'],
    data() {
        return {
            eventFilters: ['All Events', 'Upcoming Events', 'Events in Progress', 'Past Events'],
        };
    },
    methods: {
        filterByDate(date) {
            this.$emit('update:date', date);
        },
        selectFilter(filter) {
            this.$emit('update:filter', filter);
        },
        updateFilterText(value) {
            this.$emit('update:filterText', value);
        },
        updateIconDisplay(value) {
            this.$emit('update:iconDisplay', value);
        },
        sortEvents(order) {
            this.$emit('sortOrder', order);
        },
        handleSortOrder(order) {
            this.$emit('sortOrder', order);
        }
    }
};
</script>

<style scoped></style>
