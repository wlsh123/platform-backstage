import React from 'react';
import './Footer.less';
const channelMenu = [
  { id: 1, channelName: '阳光智采' },
  { id: 2, channelName: '奥德e购' },
  { id: 3, channelName: '中油e购' },
  { id: 4, channelName: '胜利股份' },
  { id: 5, channelName: '长沙e购' },
  { id: 6, channelName: '常州e购' },
  { id: 7, channelName: '新地e购' },
  { id: 8, channelName: '新能e购' },
  { id: 9, channelName: '新智e购' },
  { id: 10, channelName: '新绎e购' },
  { id: 11, channelName: '数能e购' },
  { id: 12, channelName: '新奥新智' },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-channelMap">
        <ul>
          {channelMenu.map((c) => (
            <li key={c.id}>{c.channelName}</li>
          ))}
        </ul>
      </div>
      <div>
        备案号：冀ICP备18011182号 - 8 <i>|</i>©新奥阳光易采科技有限公司
      </div>
    </div>
  );
};
export default Footer;
