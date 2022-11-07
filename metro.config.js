// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("@expo/metro-config");
module.exports = (async () => {
    const {
      resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname)
    return {
      transformer: {
        defaultConfig: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false
          }
        })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'fcscript', "cjs"]
      }
    }
  })()


// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push("cjs");
// defaultConfig.resolver.assetExts.push('fcscript');


// module.exports = defaultConfig;