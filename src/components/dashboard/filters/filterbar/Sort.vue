<template>
    <Button icon="pi pi-sliders-v" @click="visibleRightSort = true"
        class="tag-filter flex items-center gap-x-2 border border-dsj-grey2 p-2 aspect-square max-h-10 h-10 rounded-lg text-dsj-yellow shadow-none cursor-pointer" />
    <Drawer v-model:visible="visibleRightSort" header="Sort" position="right">
        <a href="#"
            class="border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer">A
            to Z</a>
        <a href="#"
            class="border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer">Z
            to A</a>
    </Drawer>
</template>

<script>
export default {
    data() {
        return {
            visibleRightSort: false,
        };
    },
};
</script>

<style scoped></style>
