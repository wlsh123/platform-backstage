import request from 'umi-request';
export async function test(params) {
  let result = await request
    .post('/api/queryChannelByIds', { params })
    .then((res) => {
      return res;
    });
  return result;
}
