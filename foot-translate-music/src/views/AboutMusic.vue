<template>
    <div>
        
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    setup() {
        const artists = ref([]);

        const optionsArtists = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        fetch('https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8', optionsArtists)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        const optionsOverView = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        // fetch('https://spotify23.p.rapidapi.com/artist_overview/?id=2w9zwq3AktTeYYMuhMjju8', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        const optionsSingles = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        // fetch('https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        const optionsAlbum = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        // fetch('https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        return {
            artists,
            optionsArtists,
            optionsOverView,
            optionsAlbum,
            optionsSingles
        }
    }
}
</script>
<style scoped>
    
</style>