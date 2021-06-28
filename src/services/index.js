/*
包含应用中所有接口请求函数的模块
*/
import ajax from './ajax';
import jsonp from 'jsonp';
import { message } from 'antd';
export const reqLogin = (username, password) =>
  ajax('/api/login', { username, password }, 'POST');
export const reqAddUser = (user) =>
  ajax('api/manage/user/add', { user }, 'POST');
// json请求的接口请求函数
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://restapi.amap.com/v3/weather/weatherInfo?key=0937568437c742f1ab79eed84a73557f&city=${city}&extensions=base&output=JSON`;
    //发送jsonp请求
    jsonp(url, {}, (err, data) => {
      // console.log('jsonp', err, data)
      if (!err && data.status === '1') {
        const weather = data.lives;
        resolve(weather);
      } else {
        message.error('获取高德开放天气api出错！');
      }
    });
  });
};

// 获取类目列表
export const reqCategoryList = (parentId) =>
  ajax('/api/manage/category/list', { parentId });
// 添加类目
export const reqAddCategory = (categoryName, parentId) =>
  ajax('/api/manage/category/add', { categoryName, parentId }, 'POST');
// 修改类目
export const reqUpdateCategory = ({ categoryId, categoryName }) =>
  ajax('/api/manage/category/update', { categoryId, categoryName }, 'POST');
//商品分页列表
export const reqProduct = (pageNum, pageSize) =>
  ajax('/api/manage/product/list', { pageNum, pageSize });
//商品分页搜索   searchType-搜素的类型， productName/productDesc
export const reqSearchProduct = ({
  pageNum,
  pageSize,
  searchName,
  searchType,
}) =>
  ajax('/api/manage/product/search', {
    pageNum,
    pageSize,
    [searchType]: searchName,
  });
//根据类目id查询类目
export const reqCategory = (categoryId) =>
  ajax('/api/manage/category/info', { categoryId });
//商品上下架
export const reqUpdateStatus = (productId, status) =>
  ajax('/api/manage/product/updateStatus', { productId, status }, 'POST');

export async function QuerySetRules(params) {
  // 设置配置规则
  // try {
  //   const res = await request.post('/appi/poa/storageFeeRule/setRules', params);
  //   return [null, res];
  // } catch (error) {
  //   console.warn(error);
  //   return [error, null];
  // }
}
