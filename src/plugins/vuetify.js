import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ffffff', //white
                secondary: '#3489F6', //blue
                accentRed: '#FF312F',
                accentYellow: '#FFB93C',
                accentGreen: '00B25C',
                textPrimary: '#000000',
                textSecondary: '#666666',
                textTertiary: '#999999',
            },
        },
    },
});