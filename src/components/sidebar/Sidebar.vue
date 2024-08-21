<template>
    <component :is="currentSidebar" class="sidebar w-full md:w-56 min-w-56 h-auto" />
</template>

<script>
export default {
    computed: {
        currentSidebar() {
            const path = this.$route.path;
            const fullPath = this.$route.fullPath;

            if (path === '/events/add') {
                return 'SidebarAdd';
            } else if (path === '/events/edit') {
                return 'SidebarEdit';
            } else if (fullPath === '/events/edit/#event-dates') {
                return 'SidebarEdit';
            } else if (path === '/dashboard') {
                return 'SidebarDashboard';
            }

            return null;
        }
    }
};
</script>

<style scoped></style>
