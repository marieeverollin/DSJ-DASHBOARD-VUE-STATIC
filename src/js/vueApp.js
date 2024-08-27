import { createApp } from 'vue';
import App from '../App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
// import { GoogleMap, Marker } from 'vue3-google-map';
// import VueGoogleAutocomplete from "vue-google-autocomplete";

/* PrimeVue */
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Drawer from 'primevue/drawer';
import FileUpload from 'primevue/fileupload';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputIcon from 'primevue/inputicon';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import ListBox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import Paginator from 'primevue/paginator';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';

/* My Components */
import ArrowDown from '../components/forms/shared/custom/shared/ArrowDown.vue';
import ArrowUp from '../components/forms/shared/custom/shared/ArrowUp.vue';
import BasicSlider from '../components/forms/shared/custom/BasicSlider.vue';
import Calendar from '../components/dashboard/filters/filterbar/Calendar.vue';
import CustomContent from '../components/forms/shared/CustomContent.vue';
import Dashboard from '../components/dashboard/dashboard.vue';
import DeleteButton from '../components/forms/shared/custom/shared/DeleteButton.vue';
import EventButtons from '../components/dashboard/events/EventButtons.vue';
import EventDates from '../components/forms/shared/EventDates.vue';
import EventDetails from '../components/forms/shared/EventDetails.vue';
import EventInformation from '../components/forms/shared/EventInformation.vue';
import EventLocation from '../components/forms/shared/EventLocation.vue';
import EventSingle from '../components/dashboard/events/EventSingle.vue';
import EventsGroup from '../components/dashboard/events/EventsGroup.vue';
import EventTag from '../components/dashboard/events/EventTag.vue';
import Filters from '../components/dashboard/filters/Filters.vue';
import FiltersMobile from '../components/dashboard/filters/FiltersMobile.vue';
import FrenchButton from '../components/sidebar/sidebars/shared/FrenchButton.vue';
import FullImage from '../components/forms/shared/custom/FullImage.vue';
import ParagraphText from '../components/forms/shared/custom/ParagraphText.vue';
import Published from '../components/sidebar/sidebars/shared/Published.vue';
import ReturnButton from '../components/sidebar/sidebars/shared/ReturnButton.vue';
import SaveChangesButton from '../components/sidebar/sidebars/shared/SaveChangesButton.vue';
import SaveNewEventButton from '../components/sidebar/sidebars/shared/SaveNewEventButton.vue';
import Searchbar from '../components/dashboard/filters/Searchbar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import SidebarAdd from '../components/sidebar/sidebars/SidebarAdd.vue';
import SidebarDashboard from '../components/sidebar/sidebars/SidebarDashboard.vue';
import SidebarEdit from '../components/sidebar/sidebars/SidebarEdit.vue';
import SidebarLogo from '../components/sidebar/sidebars/shared/SidebarLogo.vue';
import Sort from '../components/dashboard/filters/filterbar/Sort.vue';
import Tag from '../components/dashboard/filters/filterbar/Tag.vue';
import ThreeImageCombo from '../components/forms/shared/custom/ThreeImageCombo.vue';
import Video from '../components/forms/shared/custom/Video.vue';
import ViewEventButton from '../components/sidebar/sidebars/shared/ViewEventButton.vue';



export const vueApp = () => {

    const appSetup = createApp(App);

    /* PRIMEVUE */
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

    /* ROUTER */
    appSetup.use(router);

    /* GOOGLE */
    // appSetup.use(GoogleMap, {
    //     load: {
    //         key: 'AIzaSyBfTsENPvt4dnfgQSxh-76CMzU3zf-BATw',
    //         libraries: 'places'
    //     },
    // });
    // appSetup.component('GoogleMap', GoogleMap.GoogleMap);
    // appSetup.component('GoogleMapMarker', GoogleMap.Marker);
    // appSetup.component('VueGoogleAutocomplete', VueGoogleAutocomplete);

    /* PrimeVue Components */
    appSetup.component('Button', Button);
    appSetup.component('Checkbox', Checkbox);
    appSetup.component('DatePicker', DatePicker);
    appSetup.component('Dialog', Dialog);
    appSetup.component('Divider', Divider);
    appSetup.component('Drawer', Drawer);
    appSetup.component('FileUpload', FileUpload);
    appSetup.component('FloatLabel', FloatLabel);
    appSetup.component('IconField', IconField);
    appSetup.component('InputGroup', InputGroup);
    appSetup.component('InputGroupAddon', InputGroupAddon);
    appSetup.component('InputIcon', InputIcon);
    appSetup.component('InputNumber', InputNumber);
    appSetup.component('InputText', InputText);
    appSetup.component('ListBox', ListBox);
    appSetup.component('MultiSelect', MultiSelect);
    appSetup.component('Paginator', Paginator);
    appSetup.component('Select', Select);
    appSetup.component('Textarea', Textarea);

    /* My Components */
    appSetup.component('ArrowDown', ArrowDown);
    appSetup.component('ArrowUp', ArrowUp);
    appSetup.component('BasicSlider', BasicSlider);
    appSetup.component('Calendar', Calendar);
    appSetup.component('CustomContent', CustomContent);
    appSetup.component('DeleteButton', DeleteButton);
    appSetup.component('EventButtons', EventButtons);
    appSetup.component('EventDates', EventDates);
    appSetup.component('EventDetails', EventDetails);
    appSetup.component('EventInformation', EventInformation);
    appSetup.component('EventLocation', EventLocation);
    appSetup.component('EventSingle', EventSingle);
    appSetup.component('EventTag', EventTag);
    appSetup.component('EventsGroup', EventsGroup);
    appSetup.component('Filters', Filters);
    appSetup.component('FiltersMobile', FiltersMobile);
    appSetup.component('FrenchButton', FrenchButton);
    appSetup.component('FullImage', FullImage);
    appSetup.component('ParagraphText', ParagraphText);
    appSetup.component('Published', Published);
    appSetup.component('ReturnButton', ReturnButton);
    appSetup.component('Searchbar', Searchbar);
    appSetup.component('Sidebar', Sidebar);
    appSetup.component('SidebarAdd', SidebarAdd);
    appSetup.component('SidebarDashboard', SidebarDashboard);
    appSetup.component('SidebarEdit', SidebarEdit);
    appSetup.component('SidebarLogo', SidebarLogo);
    appSetup.component('SaveChangesButton', SaveChangesButton);
    appSetup.component('SaveNewEventButton', SaveNewEventButton);
    appSetup.component('Sort', Sort);
    appSetup.component('Tag', Tag);
    appSetup.component('ThreeImageCombo', ThreeImageCombo);
    appSetup.component('Video', Video);
    appSetup.component('ViewEventButton', ViewEventButton);
    
    appSetup.mount('#app');
}

export default vueApp;
