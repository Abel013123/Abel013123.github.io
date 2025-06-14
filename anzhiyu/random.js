var posts=["2025/06/14/NongGang/","2025/06/14/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };