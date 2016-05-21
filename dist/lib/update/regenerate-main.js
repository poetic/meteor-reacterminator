'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regenerateMain;
function regenerateMain() {
  var currentContent = fs.readFileSync('./client/main.jsx', 'utf-8');
  var defaultContent = fs.readFileSync(path.resolve(__dirname, '../../templates/client/main.jsx'), 'utf-8');
  var isDefault = currentContent === defaultContent;

  if (!isDefault) {
    return;
  }

  logTask('Regenerate ./client/main.jsx');

  var MAIN_JSX_TEMPLATE = 'import React from \'react\';\nimport { Meteor } from \'meteor/meteor\';\nimport { render } from \'react-dom\';\nimport AppWrapper from \'./imports/custom-components/AppWrapper.jsx\';\n\nMeteor.startup(() => {\n  render(<AppWrapper />, document.getElementById(\'render-target\'));\n});\n';

  fs.writeFileSync('./client/main.jsx', MAIN_JSX_TEMPLATE);
}