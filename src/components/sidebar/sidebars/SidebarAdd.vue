<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto">

        <div class="sidebar-content top-0 left-0 right-0">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                <SidebarLogo />
                <ReturnButton />
                <SaveNewEventButton />
                <Published :published="published" />

            </div>
        </div>
    </aside>
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