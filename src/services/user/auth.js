import { post } from "../../utils/request";
/* 注册 */
export const regApi = user => post("/api/v1/auth/reg", user);
/* 登录 */
export const loginApi = user => post("/api/v1/auth/login", user);
