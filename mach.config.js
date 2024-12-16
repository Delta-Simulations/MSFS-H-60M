const imageInline = require('esbuild-plugin-inline-image')
const postCssPlugin = require('esbuild-style-plugin')
const postCssColorFunctionalNotation = require('postcss-color-functional-notation')
const postCssInset = require('postcss-inset')
const { sassPlugin } = require('esbuild-sass-plugin')
const envFilePlugin = require('esbuild-envfile-plugin')
const { solidPlugin } = require('esbuild-plugin-solid')

/** @type { import('@synaptic-simulations/mach').MachConfig } */
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
      type: 'react',
      isInteractive: isInteractive ?? false,
      fileName: name.toLowerCase(),
      imports: ['/JS/dataStorage.js', ...(additionalImports ?? [])]
    }
  }
}

function msfsAvionicsInstrument(name, folder = name) {
  return {
    name,
    index: `instruments/src/${folder}/instrument.tsx`,
    simulatorPackage: {
      type: 'baseInstrument',
      templateId: `E170_${name}`,
      mountElementId: `${name}_CONTENT`,
      fileName: name.toLowerCase(),
      imports: []
    }
  }
}