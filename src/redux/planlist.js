import * as types from '../actions/action-type.js';
import data from '../data/db.js'
const initialState = {
  show: true, // 是否显示弹出
  showModify: false, // 是否显示弹出修改box
  planlist: data, // 初始的计划表
  toModifiedItem: {}
};

Array.prototype.indexOf = function(id) {
for (var i = 0; i < this.length; i++) {
if (this[i].id == id) return i;
}
return -1;
};

Array.prototype.update = function(id, newItem) {
var index = this.indexOf(id);
if (index > -1) {
this.splice(index, 1, newItem);
}
};

const planReducer = function(state = initialState, action) {
    let list = state.planlist;
  switch(action.type) {
    // 添加计划
    case types.ADD:
        list.push(action.item);
      return Object.assign({}, state, { planlist: list });
    // 显示、隐藏修改计划
    case types.SHOWMODIFY:
      let toModified = list.filter((item) => item.id == action.id);
      return Object.assign({}, state, { showModify: action.show, toModifiedItem: toModified[0] });
    // 修改计划
    case types.MODIFY:
        list.update(action.id, action.item);
      return Object.assign({}, state, { planlist: list });
    // 删除计划
    case types.DELECT:
      let newstate = list.filter((item) => item.id != action.id);
      return Object.assign({}, state, { planlist: newstate });;
     // 显示、隐藏弹出层
    case types.SHOW:
         return Object.assign({}, state, { show: action.show });
  }
  return state;

}

export default planReducer;