import * as channelManagement from '@/services/channelManagement';
export default {
  namespace: 'channelTable',
  state: {
    tableData: {},
    channelList: [],
  },
  reducers: {
    saveTableData(state, { payload }) {
      return {
        ...state,
        tableData: payload,
      };
    },
    saveChannelList(state, { payload }) {
      return {
        ...state,
        channelList: payload,
      };
    },
  },
  effects: {
    *getChannelList({ payload }, { call, put }) {
      let response = yield call(channelManagement.queryChannelByIds, payload);
      yield put({
        type: 'saveChannelList',
        payload: response.rspBody,
      });
    },
  },
};
