<template>
    <div id="custom-image" class="border border-dsj-grey2 rounded-xl">
        <div class="bg-dsj-yellow-15 p-5 rounded-t-xl flex items-center justify-between">
            <h3 class="text-lg text-dsj-grey3">Full Image</h3>
            <div class="flex gap-x-3 items-center">
                <Button icon="pi pi-angle-up" severity="secondary"
                    class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />

                <Button icon="pi pi-angle-down" severity="secondary"
                    class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />

                <Button label="Delete" icon="pi pi-times" @click="$emit('deleteComponent', index)" severity="secondary"
                    class="btn-sm-delete items-center justify-center gap-x-2 bg-dsj-light-red text-white p-2 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>

        <div class="flex justify-between items-center gap-x-5 p-5">
            <FileUpload ref="customSectImage" mode="basic" name="featured[]" url="/api/upload" accept="image/*"
                :maxFileSize="1000000" @upload="onUpload" @select="onFileSelect"
                class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
            </FileUpload>

            <Button v-if="fileSelected" label="Delete" icon="pi pi-times" @click="removeImage"
                class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    data() {
        return {
            fileSelected: false,
        };
    },
    methods: {
        onFileSelect(event) {
            this.fileSelected = true;
        },
        onUpload(event) {
            console.log("File uploaded:", event);
        },
        removeImage() {
            this.$refs.customSectImage.clear();
            this.fileSelected = false;
        }
    }
};
</script>

<style scoped></style>
