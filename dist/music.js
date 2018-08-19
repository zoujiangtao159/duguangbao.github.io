const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "城南花已开",
        artist: '三亩地',
        url: 'http://www.ytmp3.cn/down/47675.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: 'アイロニ',
        artist: '4円',
        url: 'http://www.ytmp3.cn/down/51036.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '云烟成雨',
        artist: '房东的猫',
        url: 'http://www.ytmp3.cn/down/48951.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/71.jpg',
      }      
    ]
});