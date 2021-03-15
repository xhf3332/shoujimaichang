import { get } from "../../utils/request";
/* 加载商品列表 */
export function loadProducts(params) {
  return get("/api/v1/products/", params);
}
/* 加载商品详情 */
export function loadProductDetails(id) {
  return get("/api/v1/products/" + id);
}
