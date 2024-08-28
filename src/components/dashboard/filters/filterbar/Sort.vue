<template>
    <Button icon="pi pi-sliders-v" @click="visibleRightSort = true"
        :class="['tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer', { 'active-sort-button': visibleRightSort }]" />
    <Drawer v-model:visible="visibleRightSort" header="Sort" position="right">
        <a href="#" @click="sort('recentToOldest')"
            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedSortOrder === 'recentToOldest' }]">
            Recent to Oldest
        </a>
        <a href="#" @click="sort('oldestToRecent')"
            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedSortOrder === 'oldestToRecent' }]">
            Oldest to Recent
        </a>
        <a href="#" @click="sort('ascTitle')"
            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedSortOrder === 'ascTitle' }]">
            A to Z
        </a>
        <a href="#" @click="sort('descTitle')"
            :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedSortOrder === 'descTitle' }]">
            Z to A
        </a>
        <a href="#" @click="clearSort"
            class="border transition-all border-dsj-grey2 text-dsj-light-red hover:text-white hover:bg-dsj-light-red hover:border-dsj-light-red py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer">
            Clear Sorting
        </a>
    </Drawer>
</template>

<script>
export default {
    emits: ['sortOrder'],
    data() {
        return {
            visibleRightSort: false,
            selectedSortOrder: '',
        };
    },
    methods: {
        sort(order) {
            this.selectedSortOrder = order;
            this.$emit('sortOrder', order);
            this.visibleRightSort = false;
        },
        clearSort() {
            this.selectedSortOrder = 'recentToOldest';
            this.$emit('sortOrder', 'recentToOldest');
            this.visibleRightSort = false;
        }
    }
};
</script>


<style scoped></style>
