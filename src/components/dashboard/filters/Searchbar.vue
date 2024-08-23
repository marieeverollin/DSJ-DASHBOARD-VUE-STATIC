<template>
    <IconField class="search-bar flex items-center gap-x-2 border border-dsj-grey2 p-2 w-full max-h-10 lg:max-w-72 rounded-lg text-dsj-yellow text-sm shadow-none">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchBar" placeholder="Search" class="shadow-none" />
    </IconField>
</template>

<script>
export default {
    data() {
        return {
            searchBar: '',
        }
    }
};
</script>

<style scoped></style>
