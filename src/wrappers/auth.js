import { Redirect } from 'umi';
import storageUtils from '../utils/storageUtils';
export default (props) => {
  const { username } = storageUtils.getUser();
  if (username) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
};
