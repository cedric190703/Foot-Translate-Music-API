<template>
  <div class="foot">
    <h1>SoccerLive</h1>
    <div class="elt" v-for="(item,index) in array" :key="index">
      <div class="country">
        <div class="image">
          <img :src="item.countryImage" alt="country-logo">
        </div>
        <div class="name">
          <h2> {{ item.country }} </h2>
          <h4> {{ item.name }} </h4>
        </div>
        <div class="results">
          <div class="oponents">
            <div class="one">
              <img :src="item.T1Image" alt="team1">
              <h4>
                {{ item.T1Name }}
              </h4>
            </div>
            <div class="two">
              <img :src="item.T2Image" alt="team2">
              <h4>
                {{ item.T2Name }}
              </h4>
            </div>
          </div>
        </div>
        <div class="score">
            <h1> {{ item.ScoreT1 }} </h1>
            <h1 id="second"> {{ item.ScoreT2 }} </h1>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const options = {
      method: 'GET',
      headers: {
      'X-RapidAPI-Key': 'a7bee397b7msh6c838077afc4932p179192jsn7258756ff1f3',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    const array = ref([]);

    const Url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=';

    fetch(`${Url}soccer`,options)
      .then((res) => res.json())
      .then(json => {
        for(let k = 0; k < json.Stages.length; k++) {
          array.value.push({
            country: json.Stages[k].Ccd,
            countryImage: "https://static.livescore.com/i2/fh/" + json.Stages[k].Ccd + ".jpg",
            name: json.Stages[k].Sdn,
            T1Name: json.Stages[k].Events[0].T1[0].Nm,
            T1Image: 'https://lsm-static-prod.livescore.com/medium/' + json.Stages[k].Events[0].T1[0].Img,
            T2Name: json.Stages[k].Events[0].T2[0].Nm,
            T2Image: 'https://lsm-static-prod.livescore.com/medium/' + json.Stages[k].Events[0].T2[0].Img,
            ScoreT1: json.Stages[k].Events[0].Tr1,
            ScoreT2: json.Stages[k].Events[0].Tr2
          })
        }
      })

    return {
      options,
      Url,
      array
    }
  }
}
</script>

<style>
  body {
    background-color: black;
  }

  .foot {
    height: 1000px;
    color: white;
  }

  .country {
    display: flex;
    text-align: center;
    margin: 5% 28%;
    grid-gap: 10%;
    margin-top: 5%;
    height: 250px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.128);
  }

  .image img {
    width: 170%;
    margin-top: 50%;
  }

  .results {
    transform: translateY(8%);
  }

  .name, .score, .image {
    transform: translateY(25%);
    margin-left: 4%;
  }

  @media screen and (max-width: 1550px){
  }
</style>