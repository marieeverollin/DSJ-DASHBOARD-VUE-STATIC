<template>
    <div id="custom-video" class="border border-dsj-grey2 rounded-xl mx-5">
        <div
            class="bg-dsj-yellow-15 p-2.5 md:p-5 rounded-t-xl flex md:items-center justify-between md:flex-row flex-col-reverse gap-y-2">
            <h3 class="text-lg text-dsj-grey3">Video (YouTube URL)</h3>

            <div class="flex gap-x-3 items-center justify-between flex-row-reverse md:flex-row">

                <div class="flex gap-x-3 items-center">
                    <Button icon="pi pi-angle-up" severity="secondary"
                        class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />

                    <Button icon="pi pi-angle-down" severity="secondary"
                        class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />
                </div>

                <Button label="Delete" icon="pi pi-times" @click="$emit('deleteComponent', index)" severity="secondary"
                    class="btn-sm-delete items-center justify-center gap-x-2 bg-dsj-light-red text-white p-2 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>

        <div class="flex gap-x-5 p-2.5 md:p-5">
            <InputText type="text" v-model="eventTitle"
                class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-full" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    data() {
        return {
        };
    },
};
</script>

<style scoped></style>
