var posts=["2025/06/22/利用GitHub搭建高配服务器/","2025/04/14/【教程】MCP-保姆级教程/","2025/04/13/quake360抓取订阅/","2025/03/30/雷电4模拟器一键宏教程/","2025/03/29/HexoBlogNo1/","2024/08/10/Claw-Cloud-VPS-Tutorial/","2024/06/10/多源爬取代理IP-最少5000+代理/","2023/04/01/Cursor优化与MCP使用指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };