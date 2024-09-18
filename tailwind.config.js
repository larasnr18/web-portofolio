module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Mode gelap otomatis
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      // colors: {
      //   primary: '#64FFDA', // Warna aksen
      //   background: '#0A192F', // Warna background
      //   textPrimary: '#CCD6F6', // Warna teks utama
      //   textSecondary: '#8892B0', // Warna teks sekunder
      // },
      colors: {
        primary: '#FEAE14', // Warna aksen
        background: '#F0EFE9', // Warna background
        textPrimary: '#171717', // Warna teks utama
        textSecondary: '#525252', // Warna teks sekunder
      },
      
    },
  },
  plugins: [],
};
