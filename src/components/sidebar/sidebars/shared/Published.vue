<template>
    <div class="hidden md:flex items-center gap-x-2">
        <Checkbox v-model="published" inputId="publish" name="publish" value="publish" />
        <label for="publish" class="text-sm text-dsj-grey3"> Published </label>
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