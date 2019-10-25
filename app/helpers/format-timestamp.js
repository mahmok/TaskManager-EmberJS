import { helper } from '@ember/component/helper';

export default helper(function formatTimestamp([timestamp]) {
  return timestamp.toISOString();
});
