module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
        // TypeScript
        'plugins/**/*.ts',
        'nuxt.config.ts',
      ],
  
      //allow to change progress bar dynamically in production
      options: {
        safelist: ['w-1/12','w-2/12','w-3/12','w-4/12','w-5/12','w-6/12','w-7/12','w-8/12','w-9/12','w-10/12','w-11/12']
      }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        container: {
          center: true,
        },
        colors: {
          primary: '#081158',
          gray: {
            100: '#eef0f4',
           
          },
          pink: {
              500: "#ec8979"
          },
        },
        fontFamily: {
          body: ["'Dm Sans'"],
        },
        fontSize: {
          '4xl': '2.5rem',
        },
        letterSpacing: {
          super: '0.375rem',
          overline: '0.475em',
        },
  
        height: (theme) => ({
          ...theme('spacing'),
          104: '26rem',
          112: '46rem',
        }),
        leading: (theme) => ({
          ...theme('spacing'),
        }),
        gradientColorStops: (theme) => ({
          ...theme('colors'),
          light: 'rgb(2, 141, 214)',
          dark: 'rgb(32, 69, 180)',
        }),
      },
    },
    variants: {
      extend: {
        flex: ['odd'],
        order: ['odd'],
      },
    },
  
    plugins: [],
  }
  