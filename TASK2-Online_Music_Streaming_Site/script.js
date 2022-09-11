let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if( theme == 'dark' ){
    document.documentElement.classList.add('dark')
}

document.getElementById('dark-mode-toggle').addEventListener('click', function(){
   document.documentElement.classList.toggle('light')
});





Amplitude.init({
    
    "callbacks": {
        timeupdate: function(){
            let percentage = Amplitude.getSongPlayedPercentage();

            if( isNaN( percentage ) ){
                percentage = 0;
            }

           
            let slider = document.getElementById('song-percentage-played');
            slider.style.backgroundSize = percentage + '% 100%';
        }
    },
    "songs": [
		{
			"name": "Thaai Kelavi",
			"artist": "Anirudh Ravichander and Dhanush",
			"url": "ThaaiKelavi.mp3",
			"cover_art_url": "https://i.scdn.co/image/ab67616d0000b273e3b15ec025f8e74aac8e9393"
		},
		{
			"name": "Middle Of The Night",
			"artist": "Elley Duhé",
		
			"url": "MiddleOfNight.mp3",
			"cover_art_url": "https://i.ytimg.com/vi/lUanBjC22jo/maxresdefault.jpg"
		},
		{
			"name": "June Ponal",
			"artist": "Harris Jayaraj",
			
			"url": "JunePonal.mp3",
			"cover_art_url": "https://i.scdn.co/image/ab67616d0000b27318bd30991b8bdd303df0f44e"
		},
		{
			"name": "Megham Karukatha",
			"artist": "Anirudh Ravichander and Dhanush",
			
			"url": "MeghamKarukaadha.mp3",
			"cover_art_url": "https://c.saavncdn.com/383/Megham-Karukatha-From-Thiruchitrambalam-Tamil-2022-20220715184158-500x500.jpg"
		},
		{
			"name": "Smash Mouth",
			"artist": "All Star",
			
			"url": "SmashMouth.mp3",
			"cover_art_url": "https://www.denofgeek.com/wp-content/uploads/2017/09/smash_mouth.jpg?fit=1050%2C590"
		},
		{
			"name": "Ponni Nadhi",
			"artist": "AR Rahman",
			
			"url": "PonniNadhi.mp3",
			"cover_art_url": "https://twistarticle.com/wp-content/uploads/2022/07/Ponniyin-Selvan-First-Single-Ponni-Nadhi-Release-Date.jpg"
		}
		
    ]
});
