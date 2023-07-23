// GET https://study.duyiedu.com/api/herolist
async function init() {
  // 当行和头全部达到客户端后，该promise完成（不会等待响应体）
  const resp = await fetch('https://study.duyiedu.com/api/herolist');
  const heroes = await resp.json(); // 等待响应体传输完成，并将所有的响应体转换为js对象

  document.querySelector('.list').innerHTML = heroes.data
    .map(
      (h) => `<li>
  <a
    href="https://pvp.qq.com/web201605/herodetail/${h.ename}.shtml"
    target="_blank"
  >
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg"
      alt=""
    />
    <span>${h.cname}</span>
  </a>
</li>`
    )
    .join('');
}

init();
