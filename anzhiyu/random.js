var posts=["2025/03/30/雷电4模拟器一键宏教程/","2025/03/29/HexoBlogNo1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };