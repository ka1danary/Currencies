import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useHeaderStore = defineStore('headerStore', () => {
    const homeIcon = ref(true);
    const settingsIcon = ref(false);
    const alertIcon = ref(true);

    const initializeState = () => {
        const storedActiveTab = JSON.parse(sessionStorage.getItem('activeTab'));
        if (storedActiveTab) {
            if (storedActiveTab === 'home') {
                homeIcon.value = true;
                settingsIcon.value = false;
            } else if (storedActiveTab === 'settings') {
                homeIcon.value = false;
                settingsIcon.value = true;
            }
        }
    };
    const setStateTrueForHome = () => {
        homeIcon.value = true;
        settingsIcon.value = false;
        sessionStorage.setItem('activeTab', JSON.stringify('home'));
    };

    const setStateTrueForSettings = () => {
        settingsIcon.value = true;
        homeIcon.value = false;
        sessionStorage.setItem('activeTab', JSON.stringify('settings'));
    };

    onMounted(() => {
        initializeState();
    });

    return {
        homeIcon,
        settingsIcon,
        alertIcon,
        setStateTrueForHome,
        setStateTrueForSettings
    };
});
