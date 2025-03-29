var posts=["2025/03/29/hello-world/","2025/03/29/这是一篇新的博文/","2025/03/29/HexoBlogNo1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };