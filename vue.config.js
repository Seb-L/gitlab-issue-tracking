module.exports = {
  devServer: {
    port: 8080
  },
  pages: {
    popup: {
      entry: 'src/popup/main.ts',
      template: 'public/browser-extension.html',
      title: 'Popup'
    },
    options: {
      entry: 'src/options/main.ts',
      template: 'public/browser-extension.html',
      title: 'Options'
    }
  },
  pluginOptions: {
    browserExtension: {
      registry: undefined,
      components: {
        background: true,
        popup: true,
        options: true,
        contentScripts: true
      },
      generateSigningKey: false,
      hasRouter: '^3.0.3',
      hasVuex: '^3.0.1',
      hasTs: true,
      hasLint: true,
      fileExt: 'ts',
      componentOptions: {
        background: {
          entry: 'src/background.ts'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.ts'
            ]
          }
        }
      }
    }
  }
}
