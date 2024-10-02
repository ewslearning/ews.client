module.exports = {
    plugins: {
        'postcss-simple-vars': {
            variables: {
                'breakpoint-xxs': '15em',
                'breakpoint-xs': '22.5em',
                'breakpoint-sm': '30em',
                'breakpoint-md': '48em', // 768px
                'breakpoint-lg': '64em', // 1024px
                'breakpoint-xl': '90em', // 1440px
                'breakpoint-xxl': '120em', // 1920px
            },
        },
    },
};