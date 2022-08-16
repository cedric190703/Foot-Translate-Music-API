<template>
    <div class="music">
        <h1 style="font-size: xxx-large">Top artists</h1>
        <div class="artist" v-for="(item,index) in artists" :key="index">
            <div class="identity">
                <h1> {{ item.name }} </h1>
                <img :src="item.artistImage" alt="artist-image">
            </div>
            <div class="song">
                <h2> {{ item.songName }} </h2>
                <img :src="item.songImage" alt="song-image">
            </div>
            <div class="url">
                <h3>
                    if you want to learn more about this song <a href="item.urlSong" style="blue"> Here </a>
                </h3>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
        setup() {
            const artists = ref([]);
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US', options)
                .then(response => response.json())
                .then(json => {
                    for(let k = 0; k < json.tracks.length; k++) {
                        artists.value.push({
                            name: json.tracks[k].subtitle,
                            artistImage : json.tracks[k].share.avatar,
                            songImage: json.tracks[k].share.image,
                            songName: json.tracks[k].title,
                            urlSong: json.tracks[k].url
                        })
                    }
                })
                .catch(err => console.error(err));

            return {
                artists
            }
        }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

    .music {
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    .artist {
        background-color: aliceblue;
        border-radius: 10px;
        height: 100%;
        border: none;
        margin: 5% 25% 5%;
        color: black;
        box-shadow: 10px 10px 55px 0px rgba(245,242,242,0.49);
        -webkit-box-shadow: 10px 10px 55px 0px rgba(245,242,242,0.49);
        -moz-box-shadow: 10px 10px 55px 0px rgba(245,242,242,0.49);
    }

    .identity img {
        border-radius: 80%;
        width: 25%;
    }

    .song img {
        width: 40%;
    }

    .identity {
        margin-top: 10%;
    }

    .identity h1 {
        padding: 5% 0 2%;
    }

    .url {
        padding: 3%;
    }

    @media screen and (max-width: 900px) {
        .artist {
            margin: 5% 10% 5%;
        }
    }

    @media screen and (max-width: 550px) {
        .identity img {
            width: 40%;
        }

        .song img {
            width: 60%;
        }
    }
</style>