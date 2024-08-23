<template>
    <DatePicker v-model="filterDate" showIcon fluid iconDisplay="input" placeholder=" "
        class="date-picker flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square min-w-10 max-h-10 rounded-lg text-dsj-yellow text-sm shadow-none cursor-pointer" />
</template>

<script>
export default {
    data() {
        return {
            filterDate: '',
        };
    },
};
</script>

<style scoped></style>
