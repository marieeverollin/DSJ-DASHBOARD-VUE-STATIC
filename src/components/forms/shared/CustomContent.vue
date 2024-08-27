<template>
    <div id="event-custom-block" class="event-custom border border-dsj-grey2 rounded-xl">
        <div class="info-custom bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Add Custom Content</h3>
        </div>

        <div class="flex md:gap-5 p-5 flex-wrap gap-2.5">
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

        <div class="custom-section flex flex-col gap-y-5">
            <component v-for="(component, index) in components" :key="component.id" :is="component.name" :index="index" :lastIndex="components.length - 1" @deleteComponent="deleteComponent" @moveUp="moveUp" @moveDown="moveDown" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            components: [],
            actionLock: false,
        };
    },
    methods: {
        addComponent(componentName) {
            const id = componentName + '-' + (this.components.length + 1);
            this.components.push({ name: componentName, id });
            this.updateIndexes();
        },
        deleteComponent(index) {
            if (this.components[index]) {
                this.components.splice(index, 1);
                this.updateIndexes();
            }
        },
        moveUp(index) {
            if (this.actionLock) return;
            this.actionLock = true;
            if (index > 0) {
                this.swapComponents(index, index - 1);
            } else {
                console.warn('Cannot move component up, it is already at the top.');
            }
            this.actionLock = false;
        },
        moveDown(index) {
            if (this.actionLock) return;
            this.actionLock = true;
            if (index < this.components.length - 1) {
                this.swapComponents(index, index + 1);
            } else {
                console.warn('Cannot move component down, it is already at the bottom.');
            }
            this.actionLock = false;
        },
        swapComponents(index1, index2) {
            if (this.components[index1] && this.components[index2]) {
                const temp = this.components[index1];
                this.components[index1] = this.components[index2];
                this.components[index2] = temp;
                this.updateIndexes();
            } else {
                console.error(`Swap failed: component at index ${index1} or ${index2} is undefined`);
            }
        },
        updateIndexes() {
            this.components.forEach((component, index) => {
                component.index = index + 1;
            });
        },
    },
};
</script>
