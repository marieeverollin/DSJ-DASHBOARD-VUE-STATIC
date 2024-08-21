<template>
    <div id="event-info-block" class="event-information border border-dsj-grey2 rounded-xl">
        <div class="info-header bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Event Information</h3>
        </div>

        <div class="flex flex-col gap-y-4 p-5">
            <div class="input-group flex items-center gap-x-5">
                <label for="event-title" class="text-dsj-grey4 w-3/12"> Event Title </label>
                <InputText type="text" v-model="eventTitle"
                    class="rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-9/12" />
            </div>

            <div class="input-group flex items-center gap-x-5">
                <label for="event-header-img" class="text-dsj-grey4 w-3/12"> Header Image </label>
                <div class="w-9/12">
                    <FileUpload ref="headerFileUpload" mode="basic" name="featured[]" url="/api/upload" accept="image/*"
                        :maxFileSize="1000000" @upload="onUpload"
                        class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                    </FileUpload>
                </div>
            </div>

            <Divider class="border border-dsj-grey1" />

            <div class="input-group flex items-center gap-x-5">
                <label for="featured-img" class="text-dsj-grey4"> Featured Event </label>
                <Checkbox v-model="featuredEvent" inputId="featured" name="featured" value="featured" :binary="true" />
            </div>

            <div :class="{ hidden: !featuredEvent }" class="input-group flex items-center gap-x-5">
                <label for="featured-image-upload" class="text-dsj-grey4 w-3/12"> Featured Image </label>
                <div class="w-9/12">
                    <FileUpload ref="featuredFileUpload" mode="basic" name="featured[]" url="/api/upload"
                        accept="image/*" :maxFileSize="1000000" @upload="onUpload"
                        class="bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm">
                    </FileUpload>
                </div>
            </div>

            <div class="input-group flex items-center gap-x-5">
                <label for="event-header-img" class="text-dsj-grey4 w-3/12"> Short Description <br>(Home Page) </label>
                <Textarea v-model="eventDescription" rows="5" cols="30"
                    class="rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-9/12" />
            </div>
        </div>
    </div>
</template>

<script>
import { onUpdated } from 'vue';

export default {
    data() {
        return {
            eventDescription: '',
            eventTitle: '',
            featuredEvent: false,
            onUpload: '',
        };
    },
};
</script>

<style scoped></style>
