module.exports = function (api) {
    const presets = [
        '@babel/preset-env',
      '@babel/preset-react'
    ];
  
    /** this is just for minimal working purposes,
       * for testing larger applications it is
       * advisable to cache the transpiled modules in
       * node_modules/.bin/.cache/@babel/register* */
    api.cache(false);
  
    return {
      presets
    };
  };