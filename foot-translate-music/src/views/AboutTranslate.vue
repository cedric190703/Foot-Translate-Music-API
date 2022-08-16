<template>
  <div class="text">
        <div class="input">
          <textarea name="Text1" v-model="source"></textarea>
        </div>
        <div class="res"> <h2> {{ target }} </h2></div>
  </div>
  <button @click="translate()">Translate</button>
  <div class="chooseSource">
    <button :style="(chooseSource !== 'en') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeSource('en')">English</button>
    <button :style="(chooseSource !== 'fr') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeSource('fr')">French</button>
    <button :style="(chooseSource !== 'es') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeSource('es')">Spanish</button>
    <h1>Source language</h1>
  </div>
  <div class="chooseTarget">
    <button :style="(chooseTarget !== 'en') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeTarget('en')">English</button>
    <button :style="(chooseTarget !== 'fr') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeTarget('fr')">French</button>
    <button :style="(chooseTarget !== 'es') ? {'background-color': 'white'} : {'background-color': '#ff5731'}" @click="changeTarget('es')">Spanish</button>
    <h1>Target language</h1>
  </div>
</template>
<script>
import {ref} from 'vue';
export default {
  setup() {
    const source = ref('');
    const target = ref('');
    const chooseSource = ref('');
    const chooseTarget = ref('');
    const language1 = ref('');
    const language2 = ref('');

    let encodedParams = new URLSearchParams();

    let options = ref({});

    const changeSource = (newVal) => {
      chooseSource.value = newVal;
      language1.value = newVal;
    };

    const changeTarget = (newVal) => {
      chooseTarget.value = newVal;
      language2.value = newVal;
    };

    const translate = () => {
      if(language1.value === '' || language2.value === '') {
        alert("You didn't specify the languages correctly");
      } else {
        encodedParams.append("target", language2.value);
        encodedParams.append("source", language1.value);
        encodedParams.append("q", source.value);
        options = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          body: encodedParams
        };

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(json => {
              target.value = json.data.translations[0].translatedText;
            })
            .catch(err => console.error(err));(err => console.error(err));
      }
      
      
      encodedParams = new URLSearchParams();
    }

    return {
        source,
        target,
        options,
        encodedParams,
        chooseSource,
        chooseTarget,
        translate,
        language1,
        language2,
        changeSource,
        changeTarget
      }
    }
}
</script>

<style scoped>
  button {
    font-size: large;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }

  input {
    width: 250%;
    height: 99%;
    border: none;
    border-radius: 10px;
    word-wrap: break-word;
  }

  .text {
    background-color: white;
    height: 250px;
    display: flex;
    margin: 0% 22% 0 22%;
    border: none;
    border-radius: 10px;
    overflow: scroll;
  }

  button {
    cursor: pointer;
    background-color: white;
    color: black;
    font-size: large;
    border-radius: 10px;
    margin-top: 5%;
  }

  textarea {
    margin-right: 5%;
    font-size: x-large;
  }

  h2 {
    padding-left: 0%;
    padding-top: 10%;
  }
  
  .input textarea {
    width: 200%;
    height: 98%;
  }

  @media screen and (max-width: 1400px) {
    h2 {
      font-size: large;
    }

    .input textarea {
      width: 150%;
    }
  }

  @media screen and (max-width: 1200px) {
    .input textarea {
      width: 120%;
    }
  }

  @media screen and (max-width: 1000px) {
    .input textarea {
      width: 100%;
    }

    h2 {
      font-size: medium;
    }
  }

  @media screen and (max-width: 800px) {
    .input textarea {
      width: 180px;
    }
  }

  @media screen and (max-width: 620px) {
    .text {
      margin: 0% 10% 0 10%;
    }
  }

  @media screen and (max-width: 450px) {
    .input textarea {
      width: 140px;
    }
  }

  @media screen and (max-width: 350px) {
    .input textarea {
      width: 115px;
    }
  }

  @media screen and (max-width: 300px) {
    .input textarea {
      width: 100px;
    }
  }
</style>