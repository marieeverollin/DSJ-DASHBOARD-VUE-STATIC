<template>
    <div id="event-details-block" class="event-details border border-dsj-grey2 rounded-xl">
        <div class="details-header flex items-center justify-between bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Event Details</h3>
        </div>

        <div class="flex flex-col xl:flex-row xl:flex-wrap xl:gap-5">

            <div class="flex flex-1 w-full xl:w-6/12 flex-col gap-y-4 p-5 pb-0 xl:pb-5">
                <div class="input-group flex items-center gap-x-6">
                    <label for="website" class="text-dsj-grey4 w-4/12"> Website </label>
                    <InputText type="text" v-model="website"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-6">
                    <label for="email" class="text-dsj-grey4 w-4/12"> E-Mail </label>
                    <InputText type="email" v-model="email"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>
            </div>

            <div class="flex flex-1 w-full xl:w-6/12 flex-col gap-y-4 p-5">
                <div class="input-group flex items-center gap-x-6">
                    <label for="contactName" class="text-dsj-grey4 w-4/12"> Contact Name </label>
                    <InputText type="text" v-model="contactName"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>

                <div class="input-group flex items-center gap-x-6">
                    <label for="contactPhone" class="text-dsj-grey4 w-4/12"> Contact Phone </label>
                    <InputText type="tel" v-model="contactPhone"
                        class="rounded-md gap-x-2 text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12" />
                </div>
            </div>
        </div>

        <div class="px-5">
            <Divider class="border border-dsj-grey1" />
        </div>

        <div class="flex flex-col xl:flex-row xl:flex-wrap xl:gap-5">

            <div class="flex flex-1 w-full xl:w-6/12 flex-col gap-y-4 p-5 pb-0 xl:pb-5">
                <div class="input-group flex items-center gap-x-6">
                    <label for="category" class="text-dsj-grey4 w-4/12"> Category </label>
                    <MultiSelect v-model="selectedCategories" :options="categories" optionLabel="name" filter
                        placeholder="Select"
                        class="rounded-md text-dsj-grey3 border border-dsj-grey2 shadow-none w-8/12" />
                </div>
            </div>

            <div class="flex flex-1 w-full xl:w-6/12 flex-col gap-y-4 p-5">
                <div class="input-group flex items-center gap-x-6">
                    <label for="area" class="text-dsj-grey4 w-4/12"> Area </label>
                    <MultiSelect v-model="selectedAreas" :options="areas" optionLabel="name" filter placeholder="Select"
                        class="rounded-md text-dsj-grey3 border border-dsj-grey2 shadow-none w-8/12" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            website: "",
            contactName: "",
            email: "",
            contactPhone: "",
            selectedCategories: [],
            selectedAreas: [],
            categories: [
                { name: 'Category 1', value: 'category1' },
                { name: 'Category 2', value: 'category2' },
                { name: 'Category 3', value: 'category3' },
            ],
            areas: [
                { name: 'Area 1', value: 'area1' },
                { name: 'Area 2', value: 'area2' },
                { name: 'Area 3', value: 'area3' },
            ],
        };
    },
};
</script>

<style scoped></style>
