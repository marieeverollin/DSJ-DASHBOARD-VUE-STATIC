<template>
    <!-- Filterbar Mobile -->
    <div
        class="filterbar filters-mobile md:hidden flex md:flex-row flex-col-reverse items-center justify-center md:justify-between gap-2 flex-wrap">
        <div class="flex gap-2">
            <Calendar />
            <Sort />
            <Tag :filters="filters" :selectedFilter="selectedFilter" @update:filter="selectFilter" />
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
    data() {
        return {
            eventFilters: ['All Events', 'Upcoming Events', 'Events in Progress', 'Past Events'],
        };
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
        },
    }
};
</script>

<style scoped></style>
