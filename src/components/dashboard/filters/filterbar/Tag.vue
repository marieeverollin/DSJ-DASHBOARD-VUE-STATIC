<template>
    <Button icon="pi pi-filter" @click="visibleRightFilters = true"
        class="tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer" />
    <Drawer v-model:visible="visibleRightFilters" header="Filters" position="right" class="">
        <a v-for="(filter, index) in filters" :key="index"
            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === filter }]"
            @click="selectFilter(filter)">
            {{ filter }}
        </a>

    </Drawer>
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
            visibleRightFilters: false,
            eventFilters: ['All Events', 'Upcoming Events', 'Events in Progress', 'Past Events'],
        }
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
