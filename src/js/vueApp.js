import { createApp } from 'vue';
import App from '../App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import Dashboard from '../components/dashboard/dashboard.vue';
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Paginator from 'primevue/paginator';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import IconField from 'primevue/iconfield';
import ListBox from 'primevue/listbox';
import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';
import FileUpload from 'primevue/fileupload';

import Sidebar from '../components/sidebar/Sidebar.vue';

import EventsGroup from '../components/dashboard/events/EventsGroup.vue';
import EventSingle from '../components/dashboard/events/EventSingle.vue';
import EventTag from '../components/dashboard/events/EventTag.vue';
import EventButtons from '../components/dashboard/events/EventButtons.vue';

import EventInformation from '../components/forms/shared/EventInformation.vue';
import EventDates from '../components/forms/shared/EventDates.vue';
import EventLocation from '../components/forms/shared/EventLocation.vue';
import EventDetails from '../components/forms/shared/EventDetails.vue';
import CustomContent from '../components/forms/shared/CustomContent.vue';
import BasicSlider from '../components/forms/shared/custom/BasicSlider.vue';
import FullImage from '../components/forms/shared/custom/FullImage.vue';
import ParagraphText from '../components/forms/shared/custom/ParagraphText.vue';
import ThreeImageCombo from '../components/forms/shared/custom/ThreeImageCombo.vue';
import Video from '../components/forms/shared/custom/Video.vue';

//import btnDeleteSmall from '../components/buttons/btnDeleteSmall.vue';

export const vueApp = () => {
    const appSetup = createApp(App);

    appSetup.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'false',
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities'
                }
            }
        }
    });

    appSetup.use(router);

    appSetup.component('Checkbox', Checkbox);
    appSetup.component('InputNumber', InputNumber);
    appSetup.component('FloatLabel', FloatLabel);
    appSetup.component('Button', Button);
    appSetup.component('DatePicker', DatePicker);
    appSetup.component('Dialog', Dialog);
    appSetup.component('Textarea', Textarea);
    appSetup.component('Paginator', Paginator);
    appSetup.component('Divider', Divider);
    appSetup.component('InputText', InputText);
    appSetup.component('InputGroup', InputGroup);
    appSetup.component('InputGroupAddon', InputGroupAddon);
    appSetup.component('ListBox', ListBox);
    appSetup.component('IconField', IconField);
    appSetup.component('Select', Select);
    appSetup.component('MultiSelect', MultiSelect);
    appSetup.component('FileUpload', FileUpload);

    appSetup.component('EventsGroup', EventsGroup);
    appSetup.component('EventSingle', EventSingle);
    appSetup.component('EventTag', EventTag);
    appSetup.component('EventButtons', EventButtons);

    appSetup.component('EventInformation', EventInformation);
    appSetup.component('EventDates', EventDates);
    appSetup.component('EventLocation', EventLocation);
    appSetup.component('EventDetails', EventDetails);
    appSetup.component('CustomContent', CustomContent);
    appSetup.component('BasicSlider', BasicSlider);
    appSetup.component('FullImage', FullImage);
    appSetup.component('ParagraphText', ParagraphText);
    appSetup.component('ThreeImageCombo', ThreeImageCombo);
    appSetup.component('Video', Video);
    appSetup.component('Sidebar', Sidebar);

    //appSetup.component('btnDeleteSmall', btnDeleteSmall);

    appSetup.mount('#app');
}

export default vueApp;
