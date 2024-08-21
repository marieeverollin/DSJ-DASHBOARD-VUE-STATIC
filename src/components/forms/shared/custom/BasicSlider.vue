<template>
    <div id="custom-basic-slider" class="border border-dsj-grey2 rounded-xl">
        <div class="bg-dsj-yellow-15 p-5 rounded-t-xl flex items-center justify-between">
            <h3 class="text-lg text-dsj-grey3">Basic Slider</h3>
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
            <FileUpload ref="customSectSlider" mode="basic" name="featured[]" url="/api/upload" accept="image/*"
                :maxFileSize="1000000" @upload="onUpload"
                class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
            </FileUpload>
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
