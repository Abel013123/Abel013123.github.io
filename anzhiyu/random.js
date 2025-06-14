var posts=["2025/06/14/test/","2025/06/14/NongGang/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };