<template>
<v-app>
  <Header />
  
  <section class="banner">
    <div class="escuro pa-12">
      <v-card
    width="650"
    height="375"
    class=" pa-5 text-center p-5 ocultar estilo" 
  >
    <div>
      <p class="title-banner font-weight-bold font-color">Vamos simular!</p>
      <p class="headline font-color ">O simulando trás para todos aqueles que pretendem um dia prestar vestibular, uma forma de treino intensivo. Vamos começar clicando no botão a baixo.</p><br>
      <v-btn color="purple darken-4" class="headline white--text">Começar o simulado</v-btn>
      <!-- <a class="btn-card1 white--text" href="#">Começar o simulado</a>  -->
    </div>
    
        
  </v-card>

  <v-card
    width="650"
    height="auto"
    class="auto mb-10 accent-3 pa-1 white--text text-center p-5 card-oculto"  
  >
    <div class="conteudo-card mb-5" >
     <p class="title-banner font-weight-bold font-color">Vamos simular!</p>
     <p class="headline font-color">O simulando trás para todos aqueles que pretendem um dia prestar vestibular, uma forma de treino intensivo. Vamos começar clicando no botão a baixo.</p><br>
     <div class="d-flex flex-wrap justify-center">
       <v-btn color="purple darken-4" class="subtitle-1 white--text text--wrap">Começar o simulado</v-btn>
     </div>

    </div>
    
        
  </v-card>
    </div>

  </section>
<div class="purple darken-4 elevation-8" >
  <v-container class="mt-12 d-flex justify-center white">
    <section class="video d-flex flex-wrap justify-center mt-8">
      <div> <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/5Qr7wx-v4kA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <v-card
    width="560"
    height="315"
    class="elevation-0 white d-flex flex-wrap pa-5  "
    
  >
    <v-card-title class="font-weight-bold ">Com dúvidas?</v-card-title>
    <v-card-text class="font-weight-bold subtitle-1">Preparamos um vídeo onde nossos alunos podem tirar todas suas dúvidas quanto ao Simulando, clicando no play, você aprenderá tudo sobre nosso sistema e verá que é mais simples do que parece. Vamos lá?</v-card-text>
  </v-card>
    </section>
  </v-container>

  <v-container  class="white d-flex justify-center quebra_card">
    <v-card
    width="350"
    height="250"
    class="elevation-0 ml-8 mr-8 d-flex flex-column align-center justify-center">
    
      <img src="../../public/img/checklist.svg" height="110" alt="icone checklist">
    <p class="text-wrap ma-4 text-center">Simulado totalmente confiável com questões revisadas.</p>
    
    </v-card>
    
    
    <v-card
    width="350"
    height="250"
    class="elevation-0 ml-8 mr-8 d-flex flex-column align-center justify-center">
    <img src="../../public/img/home.svg" height="110" alt="icone Home">
    <p class="text-wrap ma-4 text-center">Use o simulando em qualquer lugar e a qualquer hora</p>
    </v-card>
    
    <v-card 
    width="350"
    height="250"
    class=" elevation-0 ml-8 mr-8 d-flex flex-column align-center justify-center">
    <img src="../../public/img/exam.svg" height="110" alt="icone Exame">
    <p class="text-wrap ma-4 text-center">Incluindo todas as matérias no modo fácil.</p>
    </v-card>
  </v-container>
</div>

  <v-container
  class=" lighten-5 white"
  >
  <v-divider></v-divider>
  <div class="mt-12 display-1 mb-1 ml-2">
    Notícias Vestibular
  </div>
  

  <v-row class="d-flex flex-wrap">
      <v-col
        cols="12"
        md="8"
      >

        <v-card
          class="pa-2 "
          tile
        >
          <v-img
      class="white--text align-end"
      height="300px"
      src="../../public/img/sala.jpg"
      alt="Sala de aula"
    >
      <v-card-title class="opacidade">O uso de celular será permitido.</v-card-title>
    </v-img>
    <div class="ma-2 mt-5">
      <v-card-subtitle class="pa-0">Após várias reuniões, o governo sanciona uma nova lei que permite o uso de celular na hora da prova de qualquer vestibular público. - "O que vale é quem pesquisa mais rápido no Google." Diz ministro da educação.</v-card-subtitle>
    </div>
    
    </v-card>


      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
      >
        <v-card
          class="pa-2 tamanho"
          tile
      
        >

        <div class="d-flex justify-center">
          <v-card-title>
            Simulando é premiado!
          </v-card-title>
        </div>
          
          
          <div class="d-flex justify-center ma-10 ">
           <v-card-subtitle >
            Depois de muita batalha, Simulando - Simulados Online ganha prêmio por ser o primeiro WebSite a levar mais de 1.000 alunos ao seus tão sonhados cursos em Universidades Públicas. Através de simulados online, os estudantes conseguiram ter um bom desempenho em todas as matérias.
          </v-card-subtitle> 
          </div>

          <div class="d-flex justify-center">
        <v-btn color="purple darken-4 white--text d-flex flex-wrap mb-9">Saiba mais sobre o Simulando</v-btn>
      </div>
          
        </v-card>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row class="d-flex justify-center flex-wrap">
      <v-col

        cols="12"
        md="4"
        sm="6" 
        xs="6" 
        class=" d-flex justify-center"
      >
        <v-card
          class="pa-2"
          tile
          color="#26c6da"

        >
          <v-card-title>
      <v-icon
        large
        left
        color="white"
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light white--text">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold white--text">
      "Entre todos os sites de vestibulares, o simulando ganha disparado na frente da concorrência. RECOMENDO!"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="../../public/img/user.svg"
            alt="Foto do Bill Gates"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">Bill Gates</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1 white--text">mdi-heart</v-icon>
          <span class="subheading mr-2 white--text">7M</span>
          <span class="mr-1 white--text">·</span>
          <v-icon class="mr-1 white--text">mdi-share-variant</v-icon>
          <span class="subheading white--text">400K</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
          class="pa-2 d-flex flex-column justify-center"
          tile
          height="300"
        >
         <div class="mt-8 d-flex justify-center text-center">
          <v-card-title>
            Próximo ano de 2020, será contemplado com todos os vestibulares sendo gratuito.
          </v-card-title>
        </div>
          
          
          <div class="d-flex justify-center ma-8 ">
           <v-card-subtitle class="font-center font-weight-thin" >
             - Murilo Mirando Folha de São Paulo
          </v-card-subtitle> 
          </div>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
          class="pa-1 purple darken-4 d-flex align-center flex-column"
          tile
          height="300"
        >
          <div class="mt-8 d-flex justify-center text-center">
          <v-card-title class="white--text">
            Enem disponibiliza respostas 1h antes do portão fechar, será que alguém decora tanta questão em tão pouco tempo?
          </v-card-title>
          
        </div>
          
          
          <div class="d-flex justify-center ma-8 ">
           <v-card-subtitle class="font-weight-thin white--text" >
             - Igor Alves Jornal o Globo
          </v-card-subtitle> 
          </div>
        </v-card>
      </v-col>

    </v-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row class="d-flex flex-fle">
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        md="6"
      >
        <v-card
          class="pa-2"
          tile
        >
          <v-img
      class="white--text align-end"
      height="300px"
      src="../../public/img/biblioteca.jpg"
      alt="Imagem de Biblioteca"
    >
      <v-card-title class="opacidade">Será o fim das bibliotecas.</v-card-title>
    </v-img>
    <div class="ma-2 mt-5">
      <v-card-subtitle class="pa-0">Bibliotecas de faculdades públicas não iram mais existir, tecnologia toma lugar do bom e velho papel.</v-card-subtitle>
    </div>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        md="6"
      >
        <v-card
          class="pa-2"         
          tile
        >
          <v-img
      class="white--text align-end"
      height="300px"
      src="../../public/img/pc.jpg"
      alt="Imagem de PC"
    >
      <v-card-title class="opacidade">Tecnologia de ponta.</v-card-title>
    </v-img>
    <div class="ma-2 mt-5">
      <v-card-subtitle class="pa-0">Fatec Taquitinga abre o bolso e troca todas suas máquinas por iMac's Pro. Seria uma boa escolha de qual vestibular prestar esse ano.</v-card-subtitle>
    </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</v-app>
</template>

<style>
  .card-oculto{
    display:none;
  }

  .font-color{
    color: #4A148C;
  }
    .escuro{
    background-color: rgb(0, 0, 0, 0.6);
    height: 750px;
  }
  @media(max-width: 735px){
    .card-oculto{
      display: flex;
    }
    .ocultar{
      display: none;
    }
    .quebra{
      display: flex;
      flex-wrap: wrap;
    }
    .escuro{
      height: 800px;
    }
    .video{
      width: 400px;
    }
    .quebra_card{
      display: flex;
      flex-wrap: wrap;
    } 
    /* .tamanho{
      height: 2000px;
    } */
  }

  @media(max-width: 500px){
    .video{
      width: 300px;
    }
  }

  @media(max-width: 300px){
    .video{
      width: 200px;
      height: 200px;
    }
  }
  .title-banner{
    font-size: 4rem;
  }
  .btn-card1 {
      background-color: transparent;
      border: 3px solid  white;
      border-radius: 10px;
      padding: 10px 20px;
      text-decoration: none;
      color:  white;
      font-weight: bold;
      cursor: pointer;
      transition: 300ms;
      font-size:1.6rem;
  }
  
  .btn-card1:hover {
      background-color: rgb(21, 3, 51);
      color:white;
      font-size:1.6rem;
      text-decoration: none;
  }

  .estilo{
    border-radius: 10px 90px;
  }
  .banner{
    background-color: rgb(0, 0, 0, 0.6);
    background-image: url("../../public/img/prova.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; 
    width: 100%;
    height: 100%;
  }


  .opacidade{
    background-image: linear-gradient(transparent,rgb(0,0,0,0.9));
  }

  
</style>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
