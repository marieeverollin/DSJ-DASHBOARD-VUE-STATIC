<template>
    <div id="event-dates" class="event-dates border border-dsj-grey2 rounded-xl">
        <div class="dates-header flex items-center justify-between bg-dsj-yellow-15 p-5 rounded-t-xl">
            <h3 class="text-lg text-dsj-grey3">Event Dates</h3>
            <h4 class="text-sm text-dsj-grey3">{{ dates.length }} date{{ dates.length > 1 ? 's' : '' }}</h4>
        </div>

        <div class="event-date-list flex flex-col gap-y-5 p-5">
            <div v-for="(date, index) in dates" :key="index" class="event-date-item flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5">

                <div class="flex flex-col 2xl:flex-row 2xl:items-center gap-5 xl:w-10/12 2xl:w-11/12">
                    <div class="input-group flex items-center w-full gap-x-5 lg:gap-0 2xl:gap-x-5 2xl:w-4/12">
                        <label for="date" class="text-dsj-grey4 flex w-3/12 xl:w-4/12 2xl:w-auto"> Event Date </label>
                        <DatePicker v-model="date.icondisplay" showIcon fluid iconDisplay="input" placeholder="Select" class="flex-1 rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12 2xl:w-full" />
                    </div>

                    <div class="input-group flex items-center w-full gap-x-5 lg:gap-0 2xl:gap-x-5 2xl:w-4/12">
                        <label for="start-time" class="text-dsj-grey4 flex w-3/12 xl:w-4/12 2xl:w-auto"> Start Time </label>
                        <DatePicker id="datepicker-timeonly" v-model="date.startTime" timeOnly fluid placeholder="Select" class="flex-2 rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12 2xl:w-full" />
                    </div>

                    <div class="input-group flex items-center w-full gap-x-5 lg:gap-0 2xl:gap-x-5 2xl:w-4/12">
                        <label for="end-time" class="text-dsj-grey4 flex w-3/12 xl:w-4/12 2xl:w-auto"> End Time </label>
                        <DatePicker id="datepicker-timeonly" v-model="date.endTime" timeOnly fluid placeholder="Select" class="flex-2 rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none w-8/12 2xl:w-full" />
                    </div>
                </div>

                <div class="w-full xl:w-2/12 flex justify-end">
                    <Button v-if="index === 0" label="Add Date" icon="pi pi-plus" @click="addDate" severity="secondary" class="add-date items-center justify-center gap-x-2 bg-dsj-yellow text-white p-2 rounded-md text-xs uppercase h-fit" />
                    <Button v-else label="Delete" icon="pi pi-times" @click="removeDate(index)" severity="danger" class="delete-date items-center justify-center gap-x-2 bg-dsj-light-red text-white p-2 rounded-md text-xs uppercase h-fit" />
                </div>
            </div>

            <Divider class="border border-dsj-grey1" />

            <div class="flex gap-5 flex-wrap xl:justify-between 2xl:justify-start">
                <div class="input-group flex items-center w-full xl:w-4/12 2xl:w-3/12">
                    <label for="repeatingEvent" class="text-dsj-grey4 w-4/12 xl:w-10/12 2xl:w-7/12"> Repeating Event </label>
                    <Checkbox v-model="repeatingEvent" inputId="repeatingEvent" name="repeatingEvent" :binary="true" value="repeatingEvent" class="w-8/12 xl:w-2/12" />
                </div>

                <div v-if="repeatingEvent" class="input-group flex items-center w-full xl:w-7/12">
                    <label for="repeatingFrequency" class="text-dsj-grey4 w-4/12 xl:w-7/12 2xl:w-3/12"> Repeat Frequency </label>
                    <Select :key="repeatingEvent" v-model="repeatingFrequency" :options="repeatingFrequencyOptions" optionLabel="name" placeholder="Select" class="w-8/12 xl:w-full 2xl:w-4/12 rounded-md text-dsj-grey3 border border-dsj-grey2 shadow-none" />
                </div>
            </div>

            <div class="flex gap-5 flex-wrap xl:justify-between 2xl:justify-start">
                <div class="input-group flex items-center w-full xl:w-4/12 2xl:w-3/12">
                    <label for="repeatOneYear" class="text-dsj-grey4 w-4/12 xl:w-10/12 2xl:w-7/12"> Repeat for one year </label>
                    <Checkbox v-model="repeatOneYear" inputId="repeatOneYear" name="repeatOneYear" value="repeatOneYear" :binary="true" class="w-8/12 xl:w-2/12" />
                </div>

                <div v-if="!repeatOneYear" class="input-group flex items-center w-full xl:w-7/12">
                    <label for="endingOn" class="text-dsj-grey4 w-4/12 xl:w-7/12 2xl:w-3/12"> Ending on </label>
                    <DatePicker v-model="endingOn" showIcon fluid iconDisplay="input" placeholder="Select" class="w-8/12 xl:w-full 2xl:w-4/12 rounded-md text-dsj-grey3 border border-dsj-grey2 p-2 shadow-none" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: [
                {
                    icondisplay: null,
                    startTime: null,
                    endTime: null,
                },
            ],
            repeatingEvent: false,
            repeatOneYear: false,
            repeatingFrequency: null,
            endingOn: null,
            repeatingFrequencyOptions: [
                { name: 'Daily', value: 'daily' },
                { name: 'Weekly', value: 'weekly' },
                { name: 'Monthly', value: 'monthly' },
            ],
        };
    },
    methods: {
        addDate() {
            this.dates.push({
                icondisplay: null,
                startTime: null,
                endTime: null,
            });
        },
        removeDate(index) {
            if (this.dates.length > 1) {
                this.dates.splice(index, 1);
            }
        },
    },
};
</script>

<style scoped></style>
