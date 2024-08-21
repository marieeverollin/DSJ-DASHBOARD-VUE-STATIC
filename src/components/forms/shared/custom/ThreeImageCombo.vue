<template>
    <div id="custom-image-combo" class="border border-dsj-grey2 rounded-xl">
        <div class="bg-dsj-yellow-15 p-5 rounded-t-xl flex items-center justify-between">
            <h3 class="text-lg text-dsj-grey3">3 Image Combo</h3>
            <div class="flex gap-x-3 items-center">
                <Button icon="pi pi-angle-up" severity="secondary"
                    class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />

                <Button icon="pi pi-angle-down" severity="secondary"
                    class="btn-sm-arrow items-center justify-center bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit w-8" />

                <Button label="Delete" icon="pi pi-times" @click="$emit('deleteComponent', index)" severity="secondary"
                    class="btn-sm-delete items-center justify-center gap-x-2 bg-dsj-light-red text-white p-2 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>

        <div class="flex gap-x-5 p-5">
            <div class="flex flex-col gap-y-2 w-1/3">
                <FileUpload ref="customSectCombo1" mode="basic" name="comboImage1[]" url="/api/upload" accept="image/*"
                    :maxFileSize="1000000" @upload="onUpload" @select="onFileSelect(1)"
                    class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                </FileUpload>
                <Button v-if="fileSelected1" label="Delete" icon="pi pi-times" @click="removeImage(1)"
                    class="delete-date w-fit items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit" />
            </div>

            <div class="flex flex-col gap-y-2 w-1/3">
                <FileUpload ref="customSectCombo2" mode="basic" name="comboImage2[]" url="/api/upload" accept="image/*"
                    :maxFileSize="1000000" @upload="onUpload" @select="onFileSelect(2)"
                    class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                </FileUpload>
                <Button v-if="fileSelected2" label="Delete" icon="pi pi-times" @click="removeImage(2)"
                    class="delete-date w-fit items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit" />
            </div>

            <div class="flex flex-col gap-y-2 w-1/3">
                <FileUpload ref="customSectCombo3" mode="basic" name="comboImage3[]" url="/api/upload" accept="image/*"
                    :maxFileSize="1000000" @upload="onUpload" @select="onFileSelect(3)"
                    class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                </FileUpload>
                <Button v-if="fileSelected3" label="Delete" icon="pi pi-times" @click="removeImage(3)"
                    class="delete-date w-fit items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    data() {
        return {
            fileSelected1: false,
            fileSelected2: false,
            fileSelected3: false,
        };
    },
    methods: {
        onFileSelect(imageNumber) {
            if (imageNumber === 1) {
                this.fileSelected1 = true;
            } else if (imageNumber === 2) {
                this.fileSelected2 = true;
            } else if (imageNumber === 3) {
                this.fileSelected3 = true;
            }
        },
        onUpload(event) {
            console.log("File uploaded:", event);
        },
        removeImage(imageNumber) {
            if (imageNumber === 1) {
                this.$refs.customSectCombo1.clear();
                this.fileSelected1 = false;
            } else if (imageNumber === 2) {
                this.$refs.customSectCombo2.clear();
                this.fileSelected2 = false;
            } else if (imageNumber === 3) {
                this.$refs.customSectCombo3.clear();
                this.fileSelected3 = false;
            }
        }
    }
};
</script>

<style scoped></style>
