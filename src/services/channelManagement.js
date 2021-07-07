import request from 'umi-request';
export async function queryChannelByIds(params) {
  try {
    const result = await request
      .post('/api/queryChannelByIds', { params })
      .then((res) => {
        return res;
      });
    return result;
  } catch (error) {
    return error;
  }
}
