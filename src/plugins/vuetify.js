import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                base: '#ffffff',
                primary: '#FEB451',
                secondary: '#1EBBB4', //orange
                textPrimary: '#000000',
                textSecondary: '#666666',
                textTertiary: '#E19000',
            },
        },
    }
});