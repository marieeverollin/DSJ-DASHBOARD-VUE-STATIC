<template>
    <aside class="sidebar w-full md:w-56 min-w-56 h-auto relative">
        <div class="sidebar-content top-0 left-0 right-0">
            <div class="flex flex-col gap-y-4 p-4 lg:px-5 lg:py-12 z-10">

                <div class="sidebar-header flex gap-4 flex-col-reverse justify-between gap-x-4w w-full">

                    <div class="sidebar-logo w-full flex items-center justify-center md:mb-2">
                        <img src="../../../../images/logos/dsj_logo.png" alt="Logo" class="w-24 md:w-36 h-fit">
                    </div>
                </div>

                <router-link to="/dashboard"
                    class="btn-add-event hidden md:flex items-center gap-x-2 text-dsj-grey3 transition-all border border-dsj-grey2 hover:bg-dsj-yellow hover:text-white hover:border-dsj-yellow py-2.5 md:px-4 rounded-xl text-sm w-full"><svg
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

                <router-link to="/dashboard"
                    class="btn-add-event hidden md:flex items-center gap-x-2 text-dsj-grey3 transition-all border border-dsj-grey2 hover:bg-dsj-yellow hover:text-white hover:border-dsj-yellow py-2.5 md:px-4 rounded-xl text-sm w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                    Edit French
                </router-link>

                <router-link to="/dashboard"
                    class="btn-add-event hidden md:flex items-center gap-x-2 text-dsj-grey3 transition-all border border-dsj-grey2 hover:bg-dsj-yellow hover:text-white hover:border-dsj-yellow py-2.5 md:px-4 rounded-xl text-sm w-full"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fill-rule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clip-rule="evenodd" />
                    </svg>

                    View Event</router-link>

                <router-link to="/dashboard"
                    class="btn-add-event hidden md:flex items-center gap-x-2 bg-dsj-yellow text-white py-2.5 md:px-4 rounded-xl text-sm w-full"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5">
                        <path fill-rule="evenodd"
                            d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Zm0 4.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM10 9a.75.75 0 0 1 .75.75v2.546l.943-1.048a.75.75 0 1 1 1.114 1.004l-2.25 2.5a.75.75 0 0 1-1.114 0l-2.25-2.5a.75.75 0 1 1 1.114-1.004l.943 1.048V9.75A.75.75 0 0 1 10 9Z"
                            clip-rule="evenodd" />
                    </svg>
                    Save Changes</router-link>

                <div class="hidden md:flex items-center gap-x-2">
                    <Checkbox v-model="published" inputId="publish" name="publish" value="publish" />
                    <label for="publish" class="text-sm text-dsj-grey3"> Published </label>
                </div>

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
