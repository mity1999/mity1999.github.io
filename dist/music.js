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
      },
	  {
        name: "雙人枕頭",
        artist: '王識賢',
        url: 'https://drive.google.com/uc?export=download&id=1lI3CYK7wcZ3K2X7eHsa6M0urR5QUbPua',
        cover: '/music/cover/雙人枕頭.jpg',
		lrc: '/music/lyrics/雙人枕頭.lrc'
      },
	  {
        name: "你是我胸口永遠的痛",
        artist: '王傑 x 葉歡',
        url: 'https://drive.google.com/uc?export=download&id=1AoZCUkpALdRJvNrqOcZ3uwrogn6gg-ai',
        cover: '/music/cover/你是我胸口永遠的痛.jpg',
		lrc: '/music/lyrics/你是我胸口永遠的痛.lrc'
      },
	  {
        name: "講什麼山盟海誓",
        artist: '黃乙玲',
        url: 'https://drive.google.com/uc?export=download&id=14ryQNt7vFVtRnmLXpDld0-Y5Or5YahJQ',
        cover: '/music/cover/講什麼山盟海誓.jpg',
		lrc: '/music/lyrics/講什麼山盟海誓.lrc'
      },
	  {
        name: "表裏一體",
        artist: '柚子YUZU',
        url: 'https://drive.google.com/uc?export=download&id=1jWjKAoycn9oxuYNFFsdNQ-DvXFL4R-oD',
        cover: '/music/cover/表裏一體.jpg',
		lrc: '/music/lyrics/表裏一體.lrc'
      },
	  {
        name: "夢中雨",
        artist: '新居昭乃',
        url: 'https://drive.google.com/uc?export=download&id=1QMItdOonu2TsFDvKydw6EpLhN03gMkg6',
        cover: '/music/cover/夢中雨.jpg',
		lrc: '/music/lyrics/夢中雨.lrc'
      },
	  {
        name: "My Heart Will Go On",
        artist: 'Celine Dion',
        url: 'https://drive.google.com/uc?export=download&id=1hWOKIYG7mmB3eG7ba3ugj9w8sK96xBRS',
        cover: '/music/cover/My Heart Will Go On.jpg',
		lrc: '/music/lyrics/My Heart Will Go On.lrc'
      },
	  {
        name: "Catch the Moment",
        artist: 'LISA',
        url: 'https://drive.google.com/uc?export=download&id=1DxE9eEPzSoJ_3k6jTRTcMbvEVPzWK9D8',
        cover: '/music/cover/Catch the Moment.jpg',
		lrc: '/music/lyrics/Catch the Moment.lrc'
      },
	  {
        name: "Break Beat Bark！",
        artist: '神田沙也加',
        url: 'https://drive.google.com/uc?export=download&id=1rFY19D-bYYy-YMH6xn9qI5ZzerrnDcHF',
        cover: '/music/cover/Break Beat Bark.jpg',
		lrc: '/music/lyrics/Break Beat Bark.lrc'
      },
	  {
        name: "Brilliant Bright",
        artist: 'MYTH & ROID',
        url: 'https://drive.google.com/uc?export=download&id=1oXKf0M06NhwkTRFUYZamngAb7xknBhId',
        cover: '/music/cover/Brilliant Bright.jpg',
		lrc: '/music/lyrics/Brilliant Bright.lrc'
      },
	  {
        name: "超喜歡你",
        artist: '飛輪海',
        url: 'https://drive.google.com/uc?export=download&id=1NOU4fOceRGh97UjXKyus6CGNNXdAl9mk',
        cover: '/music/cover/我超喜歡你.jpg',
		lrc: '/music/lyrics/我超喜歡你.lrc'
      },
	  {
        name: "罪深き俺たちの賛歌",
        artist: '監獄男子',
        url: 'https://drive.google.com/uc?export=download&id=1SDT217L1ZJB0EXP3qQvsG6paINKPEi5_',
        cover: '/music/cover/罪深き俺たちの賛歌.jpg',
		lrc: '/music/lyrics/罪深き俺たちの賛歌.lrc'
      },
	  {
        name: "Hear Me Cry",
        artist: '宇多田ヒカル',
        url: 'https://drive.google.com/uc?export=download&id=1PGeHsFwNgetT4mdaAEGhrQ5KjK2z4hHX',
        cover: '/music/cover/Hear Me Cry.jpg',
		lrc: '/music/lyrics/Hear Me Cry.lrc'
      },
	  {
        name: "夏末隨想曲",
        artist: 'yt 梅舒涵',
        url: 'https://drive.google.com/uc?export=download&id=193jQg7Joz5OMSEF15NrtKf272PFcMA3t',
        cover: '/music/cover/夏末隨想曲.jpg',
      }
      
    ]
});