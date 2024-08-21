<template>
    <div id="custom-video" class="border border-dsj-grey2 rounded-xl">
        <div class="bg-dsj-yellow-15 p-5 rounded-t-xl flex items-center justify-between">
            <h3 class="text-lg text-dsj-grey3">Video (YouTube URL)</h3>

            <div class="flex gap-x-3 items-center">
                <InputIcon
                    class="pi pi-angle-down items-center justify-center gap-x-2 bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit cursor-pointer" />
                <InputIcon
                    class="pi pi-angle-up items-center justify-center gap-x-2 bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit cursor-pointer" />

                <Button label="Delete" icon="pi pi-times" @click="$emit('deleteComponent', index)" severity="secondary"
                    class="btn-sm-delete items-center justify-center gap-x-2 bg-dsj-light-red text-white p-2 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>

        <div class="flex gap-x-5 p-5">
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
