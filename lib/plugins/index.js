/* eslint-disable */
/* List of validPlugins
 * Key is the argument ex: -a passed to enable this plugin
 * Value is the name of the folder this plugin is in
 * * */
const validPlugins = {
  A: 'apollo',
};

/* runHook is passed a hookName 'afterCreate' and options from commander
 *   it will search through all valid plugins and run the hookName passed
 *   function passing in the options object */
module.exports = {
  runHook(hookName, options = {}) {
    Object.keys(validPlugins).forEach((plugin) => {
      if (options[plugin]) {
        const newPlugin = require(`./${validPlugins[plugin]}/index.js`);
        if (typeof(newPlugin[hookName]) === 'function') {
          newPlugin[hookName](options);
        }
      }
    });
  },
};
