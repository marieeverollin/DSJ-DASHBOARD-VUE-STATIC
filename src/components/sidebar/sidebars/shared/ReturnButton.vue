<template>
    <router-link to="/dashboard"
        class="btn-add-event min-w-36 hidden md:flex items-center gap-x-2 text-dsj-grey3 transition-all border border-dsj-grey2 hover:bg-dsj-yellow hover:text-white hover:border-dsj-yellow py-2.5 md:px-4 rounded-xl text-sm w-full"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5">
            <g clip-path="url(#a)">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                    clip-rule="evenodd" />
            </g>
            <defs>
                <clipPath id="a">
                    <path d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
        Return to the List</router-link>
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