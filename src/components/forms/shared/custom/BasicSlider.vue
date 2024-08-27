<template>
    <div id="custom-basic-slider" class="border border-dsj-grey2 rounded-xl mx-5">
        <div class="bg-dsj-yellow-15 p-2.5 md:p-5 rounded-t-xl flex md:items-center justify-between md:flex-row flex-col-reverse gap-y-2">
            <h3 class="text-lg text-dsj-grey3">Basic Slider</h3>
            <div class="flex gap-x-3 items-center justify-between flex-row-reverse md:flex-row">
                <div class="flex gap-x-1 md:gap-x-3 items-center">
                    <ArrowUp v-if="index > 0" @click="moveUp" />
                    <ArrowDown v-if="index < lastIndex" @click="moveDown" />
                </div>
                <DeleteButton :index="index" @deleteComponent="deleteComponent" />
            </div>
        </div>

        <div class="flex flex-col gap-y-5 p-2.5 md:p-5">
            <div v-for="(upload, index) in uploads" :key="upload.id" class="flex gap-x-5 items-center justify-between">
                <FileUpload :ref="`customSectSlider_${upload.id}`" mode="basic" :name="`featured[]_${index}`" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" @select="() => onFileSelect(index)" class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm"></FileUpload>
                <Button v-if="upload.fileSelected" label="Delete" icon="pi pi-times" @click="removeImage(index)" class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        lastIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            uploads: [
                { id: this.generateId(), fileSelected: false }
            ]
        };
    },
    methods: {
        generateId() {
            return Math.random().toString(36).substr(2, 9);
        },
        onFileSelect(index) {
            this.uploads[index].fileSelected = true;
            if (index === this.uploads.length - 1) {
                this.uploads.push({ id: this.generateId(), fileSelected: false });
            }
        },
        onUpload(event) {
        },
        removeImage(index) {
            this.uploads.splice(index, 1);
            if (this.uploads.length === 0 || this.uploads[this.uploads.length - 1].fileSelected) {
                this.uploads.push({ id: this.generateId(), fileSelected: false });
            }
        },
        moveUp() {
            this.$emit('moveUp', this.index);
        },
        moveDown() {
            this.$emit('moveDown', this.index);
        },
        deleteComponent() {
            this.$emit('deleteComponent', this.index);
        },
    }
};
</script>

<style scoped></style>
