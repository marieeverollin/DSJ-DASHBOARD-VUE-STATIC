<template>
    <div
        class="single-event flex flex-col justify-between gap-y-4 border transition-all border-dsj-grey2 hover:border-dsj-yellow p-3 md:p-4 rounded-xl aspect-square w-1/3">

        <div class="flex flex-col">
            <div class="flex flex-col gap-y-4">
                <div class="flex flex-row w-full justify-between">
                    <div class="event-date text-dsj-yellow">
                        <p class="uppercase text-sm">{{ event.date.month }}</p>
                        <p class="lowercase font-bold text-2xl">{{ event.date.day }}</p>
                        <p class="text-sm">{{ event.date.year }}</p>
                    </div>
                    <EventTag :status="event.status" />
                </div>
                <p class="event-title text-dsj-grey3 text-lg">{{ event.title }}</p>
            </div>

            <Divider class="border border-dsj-grey1" />

            <div class="event-date-time flex gap-x-2 items-center">
                <i class="pi pi-calendar text-dsj-yellow"></i>
                <div class="flex flex-col">
                    <p class="text-dsj-grey4 text-sm">{{ event.date.fullDate }}</p>
                    <p class="text-dsj-grey4 text-sm">from {{ event.time.from }} to {{ event.time.to }}</p>
                </div>
            </div>

            <Divider class="border border-dsj-grey1" />

            <div class="event-location flex gap-x-2 items-center">
                <i class="pi pi-map-marker text-dsj-yellow"></i>
                <p class="text-dsj-grey4 text-sm">{{ event.location.address }} - {{ event.location.type }}</p>
            </div>
        </div>

        <EventButtons :index="index" @delete-event="$emit('delete-event', event.id)" />

    </div>
</template>

<script>
export default {
    props: {
        event: Object,
        index: Number
    },
};
</script>

<style scoped></style>
