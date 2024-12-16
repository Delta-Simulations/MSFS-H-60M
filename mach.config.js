const imageInline = require('esbuild-plugin-inline-image')
const postCssPlugin = require('esbuild-style-plugin')
const postCssColorFunctionalNotation = require('postcss-color-functional-notation')
const postCssInset = require('postcss-inset')
const { sassPlugin } = require('esbuild-sass-plugin')
const envFilePlugin = require('esbuild-envfile-plugin')
const { solidPlugin } = require('esbuild-plugin-solid')

/** @type { import('@tacotakedown/mach').MachConfig } */
module.exports = {
  packageName: 'H-60',
  packageDir: 'PackageSources',
  plugins: [
    solidPlugin(),
    envFilePlugin,
    imageInline({ limit: -1 }),
    postCssPlugin({
      extract: true,
      postcss: {
        plugins: [postCssColorFunctionalNotation(), postCssInset()]
      }
    }),
    sassPlugin()
  ],
  instruments: [
    solidInstrument('MFD')
  ]
}

function solidInstrument(name, additionalImports, isInteractive) {
  return {
    name,
    index: `instruments/src/${name}/index.tsx`,
    simulatorPackage: {
      type: 'solid',
      isInteractive: isInteractive ?? false,
      fileName: name.toLowerCase(),
      imports: ['/JS/dataStorage.js', ...(additionalImports ?? [])]
    }
  }
}