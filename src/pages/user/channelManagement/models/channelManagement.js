import * as channelManagement from '';
export default {
  namespace: 'channelManagement',
  state: [],
  reducers: {
    saveChannelList(state, { payload }) {
      const data = [
        {
          channelId: '1',
          channelName: '阳光智采',
          time: '2018-06-06 13:21:26',
          person: '高玉晶',
          jiesuan: '集中结算',
        },
        {
          channelId: '2',
          channelName: '奥德e购',
          time: '2018-06-06 13:21:26',
          person: '刘浩',
          jiesuan: '集中结算',
        },
        {
          channelId: '3',
          channelName: '中油e购',
          time: '2018-06-06 13:21:26',
          person: '高然',
          jiesuan: '非集中结算',
        },
      ];
      return data;
    },
  },
  effects: {},
};
