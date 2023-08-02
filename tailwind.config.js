/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'daredevil-image': "url('/daredevil-banner.jpg')",
        'mrobot-banner': "url('/Elliot-MrRobot-Banner.jpg')",
        'profile-photo': "url('https://avatars.githubusercontent.com/vitor0ferreira')",
      },
    },
  },
  plugins: [],
}
