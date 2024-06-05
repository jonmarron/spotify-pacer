import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Red Hat Display', 'sans']
      },
      colors:{
        'background-dark':'var(--anthracit-dark)',
        'background-gray':'var(--anthracit-light)',
        'text-mute': 'var(--gray-50)',
        'brand' : 'var(--spotify-green)'
      },
      borderColor: {
        'mute': 'var(--gray-50)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
