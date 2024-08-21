<template>
    <div class="event-buttons flex flex-wrap gap-2 justify-between">
        <router-link to="/events/edit"
            class="event-buttons flex gap-x-2 rounded-md text-xs text-dsj-grey4 bg-dsj-grey1 hover:bg-dsj-yellow hover:text-white transition-all px-2 py-1 uppercase">
            <i class="pi pi-plus"></i> Date
        </router-link>

        <div class="flex flex-wrap gap-2">
            <router-link to="/events/edit"
                class="event-buttons flex gap-x-2 rounded-md text-xs text-dsj-grey4 bg-dsj-grey1 hover:bg-dsj-yellow hover:text-white transition-all px-2 py-1 uppercase">
                <i class="pi pi-pencil"></i> Edit
            </router-link>

            <router-link to="/events/id"
                class="event-buttons flex gap-x-2 rounded-md text-xs text-dsj-grey4 bg-dsj-grey1 hover:bg-dsj-yellow hover:text-white transition-all px-2 py-1 uppercase">
                <i class="pi pi-eye"></i> View
            </router-link>

            <Button label="Delete" icon="pi pi-times"
                class="text-xs text-dsj-grey4 bg-dsj-grey1 hover:bg-dsj-yellow hover:text-white transition-all px-2 py-1 uppercase"
                @click="deleteEvent" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteEvent() {
            this.$emit('delete-event', this.index);
        }
    }
};
</script>

<style scoped></style>
