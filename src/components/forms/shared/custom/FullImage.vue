<template>
    <div id="custom-image" class="border border-dsj-grey2 rounded-xl  mx-5">

        <div class="bg-dsj-yellow-15 p-2.5 md:p-5 rounded-t-xl flex md:items-center justify-between md:flex-row flex-col-reverse gap-y-2">
            <h3 class="text-lg text-dsj-grey3">Full Image</h3>
            <div class="flex gap-x-3 items-center justify-between flex-row-reverse md:flex-row">
                <div class="flex gap-x-1 md:gap-x-3 items-center">
                    <ArrowUp v-if="index > 0" @click="moveUp" />
                    <ArrowDown v-if="index < lastIndex" @click="moveDown" />
                </div>
                <DeleteButton :index="index" @deleteComponent="deleteComponent" />
            </div>
        </div>

        <div class="input-upload flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full p-2.5 md:p-5">
            <FileUpload ref="customSectImage" mode="basic" name="featured[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" @select="onFileSelect" class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm"></FileUpload>
            <Button v-if="fileSelected" label="Delete" icon="pi pi-times" @click="removeImage" class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5  md:p-2 rounded-md text-xs uppercase h-fit w-fit" />
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
