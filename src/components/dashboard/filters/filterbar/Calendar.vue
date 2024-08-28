<template>
    <button v-if="filterDate" @click="clearDate" class="clear-date-btn border border-dsj-grey2 text-dsj-light-red px-3 py-1 rounded-lg text-sm">
        Clear
    </button>

    <DatePicker v-model="filterDate" showIcon fluid iconDisplay="input" placeholder=" " class="date-picker flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square min-w-10 max-h-10 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer" />
</template>

<script>
export default {
    data() {
        return {
            filterDate: null,
        };
    },
    watch: {
        filterDate(newVal) {
            this.$emit('update:date', newVal);
        },
    },
    methods: {
        clearDate() {
            this.filterDate = null;
            this.$emit('update:date', null);
        }
    }
};
</script>

<style scoped></style>