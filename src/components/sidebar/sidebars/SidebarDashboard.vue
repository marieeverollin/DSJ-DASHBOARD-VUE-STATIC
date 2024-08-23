<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto">
        <div class="sidebar-content top-0 left-0 right-0">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">
                <div class="hidden md:block">
                    <SidebarLogo />
                </div>

                <router-link to="/events/add"
                    class="btn-add-event hidden md:flex items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 rounded-xl text-sm w-full min-w-36 mb-6">
                    <i class="pi pi-plus"></i>Add Event
                </router-link>

                <div class="hidden sidebar-filters md:flex flex-wrap md:flex-col gap-2 md:gap-y-5">
                    <a v-for="(filter, index) in filters" :key="index"
                        :class="['border transition-all border-dsj-grey2 text-dsj-grey3 hover:text-white hover:bg-dsj-grey3 hover:border-dsj-grey3 py-1.5 md:py-2.5 px-3 md:px-6 rounded-lg md:rounded-xl text-sm min-w-36 cursor-pointer', { 'bg-dsj-grey3 border-dsj-grey3 text-white': selectedFilter === filter }]"
                        @click="selectFilter(filter)">{{ filter }}</a>
                </div>
            </div>
        </div>
    </aside>

    <div class="top-links md:hidden flex flex-col gap-5 p-4 relative bg-white rounded-t-xl">
        <SidebarLogo />
        <FiltersMobile :filters="filters" :selectedFilter="selectedFilter" @update:filter="selectFilter"
            @update:date="sendDateToDashboard" @sortOrder="sortEvents" />
    </div>
</template>

<script>
export default {
    props: {
        filters: {
            type: Array,
            required: true
        },
        selectedFilter: {
            type: String,
            required: true
        }
    },
    methods: {
        selectFilter(filter) {
            this.$emit('update:filter', filter);
        },
        sendDateToDashboard(date) {
            this.$emit('update:date', date);
        },
        sortEvents(order) {
            this.$emit('sortOrder', order);
        }
    }
};
</script
