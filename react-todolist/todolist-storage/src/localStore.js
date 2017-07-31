/*
* @Author: Marte
* @Date:   2017-07-31 16:34:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 16:36:29
*/

export function save(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  return JSON.parse(window.localStorage.getItem(key));
}