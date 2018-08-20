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
      },
      {
          name: 'old memory',
          artist: '三轮学'，
          url: 'http://pdqp5b6n2.bkt.clouddn.com/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20Old%20Memory.mp3',
          cover: 'http://pdqqp2l8j.bkt.clouddn.com/%E8%87%B4%E9%83%81%E7%BA%AF%E9%9F%B3%E2%94%81%E6%B2%89%E6%BA%BA%E5%9C%A8%E6%9E%81%E8%87%B4%E7%9A%84%E8%87%B4%E9%83%81%E4%B9%8B%E6%B5%B7_3420580729666693.jpg',
  
      },
      {
          name: 'princess',
          artist: 'α·Pav ',
          url: 'http://pdqp5b6n2.bkt.clouddn.com/Princess.MP3',
          cover: 'http://pdqqp2l8j.bkt.clouddn.com/%E3%80%90%E6%97%A5%E3%80%91%E5%89%8D%E5%A5%8F%C3%97%E5%BC%80%E5%8F%A3%EF%BC%9D%E5%85%A5%E5%9D%91%20%28Part.1%29_109951163020770438.jpg',
      },
      {
          name: '花鸟风月',
          artist: 'end of the world',
          url: 'http://pdqp5b6n2.bkt.clouddn.com/%E8%8A%B1%E9%B8%9F%E9%A3%8E%E6%9C%88.MP3',
          cover: 'http://pdqqp2l8j.bkt.clouddn.com/-1192083599.jpg',
      }
    ]
});