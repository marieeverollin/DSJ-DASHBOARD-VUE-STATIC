<template>
    <div id="event-custom-block" class="event-custom border border-dsj-grey2 rounded-xl">
        <div class="info-custom bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Add Custom Content</h3>
        </div>

        <div class="flex gap-x-5 p-5">
            <Button label="Full Image" icon="pi pi-plus" @click="addComponent('FullImage')" severity="secondary"
                class="items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm" />

            <Button label="Paragraph Text" icon="pi pi-plus" @click="addComponent('ParagraphText')" severity="secondary"
                class="items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm" />

            <Button label="3 Image Combo" icon="pi pi-plus" @click="addComponent('ThreeImageCombo')"
                severity="secondary"
                class="items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm" />

            <Button label="Basic Slider" icon="pi pi-plus" @click="addComponent('BasicSlider')" severity="secondary"
                class="items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm" />

            <Button label="Video" icon="pi pi-plus" @click="addComponent('Video')" severity="secondary"
                class="items-center justify-center gap-x-2 bg-dsj-yellow text-white py-2.5 px-3 rounded-xl text-sm" />
        </div>

        <div class="flex flex-col gap-y-4 p-5">
            <component v-for="(component, index) in components" :key="component.id" :is="component.name" :index="index"
                @deleteComponent="deleteComponent" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            components: [],
        };
    },
    methods: {
        addComponent(componentName) {
            const id = componentName + '-' + (this.components.length + 1);
            this.components.push({ name: componentName, id });
        },
        deleteComponent(index) {
            this.components.splice(index, 1);
        },
    },
};
</script>

<style scoped></style>
