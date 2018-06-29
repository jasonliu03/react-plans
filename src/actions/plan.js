import * as types from './action-type.js';
// 添加计划
export function addPlan(item) {
  return {
    type: types.ADD,
    item
  };
}
// 显示修改计划box
export function showModify(show, id) {
  return {
    type: types.SHOWMODIFY,
    show,
    id
  };
}
// 修改计划
export function modifyPlan(id, item) {
  return {
    type: types.MODIFY,
    id,
    item
  }
}
// 删除计划
export function deletePlan(id) {
  return {
    type: types.DELECT,
    id
  };
}
// 显示隐藏弹层
export function show(show) {
  return {
    type: types.SHOW,
    show
  };
}