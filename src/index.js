/**
 * @author monkeywang
 * Date: 17/5/18
 */
import Button from '../packages/button/index.js'
import Editor from '../packages/editor/index.js'
import LimitTextArea from '../packages/limit-textarea/index.js'
import LxShowMore from '../packages/show-more/index.js'
const install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Editor.name, Editor);
  Vue.component(LimitTextArea.name, LimitTextArea);
  Vue.component(LxShowMore.name, LxShowMore);
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Button,
  Editor,
  LimitTextArea,
  LxShowMore
}
