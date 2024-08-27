<template>
    <div id="custom-video" class="border border-dsj-grey2 rounded-xl mx-5">
        
        <div class="bg-dsj-yellow-15 p-2.5 md:p-5 rounded-t-xl flex md:items-center justify-between md:flex-row flex-col-reverse gap-y-2">
            <h3 class="text-lg text-dsj-grey3">Video (YouTube URL)</h3>
            <div class="flex gap-x-3 items-center flex-row-reverse justify-between md:flex-row">
                <div class="flex gap-x-1 md:gap-x-3 items-center">
                    <ArrowUp v-if="index > 0" @click="moveUp" />
                    <ArrowDown v-if="index < lastIndex" @click="moveDown" />
                </div>
                <DeleteButton :index="index" @deleteComponent="deleteComponent" />
            </div>
        </div>
        <div class="flex gap-x-5 p-2.5 md:p-5">
            <InputText type="text" v-model="eventVideo" class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-full" />
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
            eventVideo: '',
        };
    },
    methods: {
        moveUp() {
            this.$emit('moveUp', this.index);
        },
        moveDown() {
            this.$emit('moveDown', this.index);
        },
        deleteComponent() {
            this.$emit('deleteComponent', this.index);
        },
    },
};
</script>

<style scoped></style>
