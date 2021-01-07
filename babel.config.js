module.exports = {
 presets: ['next/babel'],
 plugins: [
  [
   'styled-components',
   {
    displayName: false,
    minify: true,
    ssr: true,
   },
  ],
 ],
};
