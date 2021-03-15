import { post, get, delate } from './request.js';
/* 调用购物车接口 */
/* 商品和商品id */
export function addToCart(product, num) {
  return post('/api/v1/shop_carts', {
    product,
    quantity: num,
  });
}
/* 加载购物车 */
export function loadCarts() {
  return get('/api/v1/shop_carts');
}
// 根据id删除商品
export function delpro(id) {
  return delate('/api/v1/shop_carts/' + id);
}
// 删除购物车全部商品
export function delpros(ids) {
  return post('/api/v1/shop_carts/delmany', {
    ids
  });
}
// 提交订单
export function submit(data) {
  return post('/api/v1/orders', data);
}
// 获取订单列表
export function orderList(params) {
  return get('/api/v1/orders', params);
}
// 根据 id 删除订单详情
export function delateOrder(id) {
  return delate('/api/v1/orders/' + id);
}