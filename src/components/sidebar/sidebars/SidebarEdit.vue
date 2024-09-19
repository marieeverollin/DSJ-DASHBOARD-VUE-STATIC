<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto relative">
        <div class="sidebar-content top-0 left-0 right-0 sticky">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                <SidebarLogo />
                <ReturnButton />
                <FrenchButton />
                <ViewEventButton />
                <SaveChangesButton />
                <Published :published="published" />

            </div>
        </div>
    </aside>
</template>

<script>
import FrenchButton from './shared/FrenchButton.vue';
import SaveChangesButton from './shared/SaveChangesButton.vue';
import ViewEventButton from './shared/ViewEventButton.vue';

export default {
    data() {
        return {
            published: false
        };
    },
};
</script>

<style scoped></style>
