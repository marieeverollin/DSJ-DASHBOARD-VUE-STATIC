<template>
    <router-link to="/dashboard"
        class="btn-add-event min-w-36 hidden md:flex items-center gap-x-2 bg-dsj-yellow text-white py-2.5 md:px-4 rounded-xl text-sm w-full"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5">
            <path fill-rule="evenodd"
                d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Zm0 4.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM10 9a.75.75 0 0 1 .75.75v2.546l.943-1.048a.75.75 0 1 1 1.114 1.004l-2.25 2.5a.75.75 0 0 1-1.114 0l-2.25-2.5a.75.75 0 1 1 1.114-1.004l.943 1.048V9.75A.75.75 0 0 1 10 9Z"
                clip-rule="evenodd" />
        </svg>
        Save New Event</router-link>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style scoped></style>