// import { message } from 'ygd';
// import * as channelManagement from '@/services/channelManagement';
export default {
  namespace: 'channelTable',
  state: {
    channelList: [],
  },
  reducers: {
    saveTableData(state, { payload }) {
      const data = [
        {
          channelId: 1,
          channelName: '阳光智采',
          createTime: '2018-06-06 13:21:26',
          channelOperAcctName: '高玉晶 高玉晶',
          countMethod: '混合结算',
        },
        {
          channelId: 2,
          channelName: '奥德e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '刘浩  刘浩',
          countMethod: '混合结算',
        },
        {
          channelId: 3,
          channelName: '中油e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '高然 gaoran',
          countMethod: '混合结算',
        },
        {
          channelId: 4,
          channelName: '胜利股份',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '姜晓飞  姜晓飞',
          countMethod: '混合结算',
        },
        {
          channelId: 5,
          channelName: '长沙e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '侯三勇 e购超市',
          countMethod: '混合结算',
        },
        {
          channelId: 6,
          channelName: '常州e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: 'wuwp  吴卫平',
          countMethod: '混合结算',
        },
        {
          channelId: 7,
          channelName: '新地e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '钱然实  徐博文',
          countMethod: '混合结算',
        },
        {
          channelId: 8,
          channelName: '新能e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '赵哲 赵哲',
          countMethod: '混合结算',
        },
        {
          channelId: 9,
          channelName: '新智e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '赵哲 赵哲',
          countMethod: '混合结算',
        },
        {
          channelId: 10,
          channelName: '新绎e购',
          createTime: '2018-06-06 13:23:46',
          channelOperAcctName: '赵哲 赵哲',
          countMethod: '混合结算',
        },
      ];
      return data;
    },
  },
  effects: {
    *getTableData({ payload }, { call, put }) {
      let [error, response] = yield call(
        channelManagement.queryChannelList,
        payload,
      );
      if (error) {
        message.error(error.error.descp);
        return;
      }
      yield put({
        type: 'saveTableData',
        payload: response,
      });
    },
    *getChannelList({ payload }, { call, put }) {
      let [error, response] = yield call(
        channelManagement.queryChannelByIds,
        payload,
      );
      if (error) {
        message.error(error.error.descp);
        return;
      }
      let list = response.map((item) => ({
        value: item.channelId,
        text: item.channelName,
      }));
      yield put({
        type: 'saveChannelList',
        payload: list,
      });
    },
  },
  subscriptions,
};
