module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
