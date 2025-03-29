var posts=["2025/03/29/博客配置教学/","2025/03/29/HexoBlogNo1/","2025/03/29/hello-world/","2025/03/29/HexoBlogNo2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };