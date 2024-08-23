<template>
    <Button label="Delete" icon="pi pi-times" @click="handleDelete" severity="secondary" class="btn-sm-delete items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2 py-1 md:p-2 rounded-md text-xs uppercase h-fit" />
</template>

<script>
export default {
    props: ['index'],
    methods: {
        handleDelete() {
            this.$emit('deleteComponent', this.index);
        }
    }
};
</script>

<style scoped></style>
