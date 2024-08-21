<template>
    <div class="event-form-container relative flex flex-col md:flex-row bg-white rounded-2xl shadow-sm">

        <!-- Sidebar -->
        <Sidebar />



        <!-- Main Content -->
        <div class="main-content flex flex-col w-full gap-y-5 p-4 lg:p-12">

            <h2 class="filterSelected text-xl uppercase text-dsj-yellow font-normal">Add New Event</h2>

            <EventInformation />
            <EventDates />
            <EventLocation />
            <EventDetails />
            <CustomContent />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            published: false
        };
    },
};
</script>

<style scoped></style>
