<template>
    <div id="event-info-block" class="event-information border border-dsj-grey2 rounded-xl">
        <div class="info-header bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Event Information</h3>
        </div>

        <div class="flex flex-col gap-y-4 p-5">
            <div class="input-group flex flex-col lg:flex-row lg:items-center gap-5">
                <label for="event-title" class="text-dsj-grey4 w-full lg:w-3/12"> Event Title </label>
                <InputText type="text" v-model="eventTitle"
                    class="rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-full lg:w-9/12" />
            </div>

            <div class="input-group flex flex-col lg:flex-row lg:items-center gap-5">
                <label for="event-header-img" class="text-dsj-grey4 w-full lg:w-3/12"> Header Image </label>
                <div class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full lg:w-9/12">
                    <FileUpload ref="headerFileUpload" mode="basic" name="headerImage" url="/api/upload"
                        accept="image/*" :maxFileSize="1000000" @upload="onUpload" @select="onFileSelectHeaderImg"
                        class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                    </FileUpload>
                    <Button v-if="fileSelectedHeaderImg" label="Delete" icon="pi pi-times" @click="removeImageHeaderImg"
                        class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit w-fit" />
                </div>
            </div>

            <Divider class="border border-dsj-grey1" />

            <div class="input-group flex flex-row lg:items-center gap-5">
                <label for="featured-img" class="text-dsj-grey4"> Featured Event </label>
                <Checkbox v-model="featuredEvent" inputId="featured" name="featured" value="featured" :binary="true" />
            </div>

            <div :class="{ hidden: !featuredEvent }"
                class="input-group flex flex-col lg:flex-row lg:items-center gap-5">
                <label for="featured-image-upload" class="text-dsj-grey4 w-full lg:w-3/12"> Featured Image </label>
                <div class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full lg:w-9/12">
                    <FileUpload ref="featuredFileUpload" mode="basic" name="featuredImage" url="/api/upload"
                        accept="image/*" :maxFileSize="1000000" @upload="onUpload" @select="onFileSelectFeaturedImg"
                        class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                    </FileUpload>
                    <Button v-if="fileSelectedFeaturedImg" label="Delete" icon="pi pi-times"
                        @click="removeImageFeaturedImg"
                        class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white px-2.5 py-1.5 rounded-md text-xs uppercase h-fit w-fit" />
                </div>
            </div>

            <div class="input-group flex flex-col lg:flex-row lg:items-center gap-x-5">
                <label for="event-header-img" class="text-dsj-grey4 w-full lg:w-3/12"> Short Description <br>(Home Page)
                </label>
                <Textarea v-model="eventDescription" rows="5" cols="30"
                    class="rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-full lg:w-9/12" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventDescription: '',
            eventTitle: '',
            featuredEvent: false,
            fileSelectedHeaderImg: false,
            fileSelectedFeaturedImg: false,

        };
    },
    methods: {
        onFileSelectHeaderImg(event) {
            this.fileSelectedHeaderImg = true;
        },
        onFileSelectFeaturedImg(event) {
            this.fileSelectedFeaturedImg = true;
        },
        onUpload(event) {
            console.log("File uploaded:", event);
        },
        removeImageHeaderImg() {
            this.$refs.headerFileUpload.clear();
            this.fileSelectedHeaderImg = false;
        },
        removeImageFeaturedImg() {
            this.$refs.featuredFileUpload.clear();
            this.fileSelectedFeaturedImg = false;
        }
    }
};
</script>

<style scoped></style>
