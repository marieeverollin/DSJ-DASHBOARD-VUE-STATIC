<template>
    <!-- Filterbar Mobile -->
    <div
        class="filterbar filters-mobile md:hidden flex md:flex-row flex-col-reverse items-center justify-center md:justify-between gap-2 flex-wrap">
        <div class="flex gap-2">
            <Calendar @update:date="filterByDate" />
            <Sort @sortOrder="handleSortOrder" />
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
    },
    emits: ['sortOrder', 'update:filter'],
    methods: {
        selectFilter(filter) {
            this.$emit('update:filter', filter);
        },
        handleSortOrder(order) {
            this.$emit('sortOrder', order);
        },
        filterByDate(date) {
            this.$emit('update:date', date);
        },
    }
};
</script>

<style scoped></style>
