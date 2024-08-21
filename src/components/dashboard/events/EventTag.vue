<template>
    <p class="event-tag text-xs px-3 py-1 rounded-md text-white uppercase h-fit" :class="tagClass">{{ status }}</p>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    computed: {
        tagClass() {
            switch (this.status.toLowerCase()) {
                case 'upcoming':
                    return `bg-dsj-light-blue`;
                case 'in progress':
                    return `bg-dsj-light-orange`;
                case 'past':
                    return `bg-dsj-light-red`;
                default:
                    return `bg-dsj-light-orange`;
            }
        },
    },
};
</script>

<style scoped></style>
