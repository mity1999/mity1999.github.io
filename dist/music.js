const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "打上花火",
        artist: 'DAOKO x 米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=1wCukoSortqd4CEvw-oudRuBiM1nymxB9',
        cover: '/music/cover/打上花火.jpg',
		lrc: '/music/lyrics/打上花火.lrc'
      }
      
    ]
});