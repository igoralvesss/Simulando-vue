<template>
    <v-app>
        <Headerpadrao />
        <v-container>

          <v-card class="white pa-10" outlined>
    
            <v-row no-gutters>
      
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="transparent"
        >
           <img src="../../public/img/prop_img2.png" height="347px" width="560px" alt="Logo Simulando - Simulados online">
        </v-card>
      </v-col>

      <v-col
        cols="6"
        sm="6"
        md="6"
      >
        <v-card
          class="px-5 pt-1"
          outlined
          tile
          color="transparent"
        >
          <v-toolbar-title class="display-1 mb-5">Sobre o Simulando</v-toolbar-title>
          <v-toolbar-title class="d-flex text-wrap mb-3" >Criado em 2019, o Simulando veio com um sistema simples e direcionado para quem deseja prestar o vestibular e queira realizar simulados online onde e quando quiser.</v-toolbar-title>
          <v-toolbar-title class="d-flex text-wrap" >De princípio seria apenas um site de simulados, porém, nós queríamos deixar as pessoas cada vez mais pordentro desse contexto de vestibular, adicionamos notícias para deixar todo mundo informado e também adicionamos os Extras que são o cálculo da nota do Enem junto com um link que leva o estudante para uma página
onde ele pode ver qual profissão seguir.</v-toolbar-title>

        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="transparent"
        >
          <v-toolbar-title class="d-flex text-wrap mb-3">Tivemos um grande trabalho para que não houvesse
problemas no sistema e na veracidade dos simulados.
Nosso maior orgulho é ver o aluno passando no tão
sonhado vestibular tendo estudado pelo Simulando. Equipe Simulando agradece todo o apoio e carinho.</v-toolbar-title> 

          <v-toolbar-title class="d-flex text-wrap mb-3">
Bons estudos!</v-toolbar-title> 


        </v-card>
      </v-col>
    </v-row>

          </v-card>
        <section class="d-flex mt-10 justify-space-around">

          <v-card  width="380" height="500">
            <div class="d-flex justify-center flex-column align-center mb-5">
              <v-list-item-avatar size="100" class="mt-10">
              <img src="../../public/img/igor.jpg" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Desenvolvedor
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="pa-5 mb-7">
              <v-card-text class="title text-center">
              "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                igor.simt@gmail.com
              </v-card-text>
            </div>

            
          </v-card>

          <v-card  width="380" height="500">
            <div class="d-flex justify-center flex-column align-center mb-5">
              <v-list-item-avatar size="100" class="mt-10">
              <img src="../../public/img/murillo.jpg" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Designer
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="pa-5 mb-7">
              <v-card-text class="title text-center">
              "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                murilloa.mirando@gmail.com
              </v-card-text>
            </div>

            <!-- <v-list-item link class="font-center" >

            <v-list-item-title class="font-weight-bold text-center" @click="login">  <img src="../../public/img/login.svg" class="mr-2 mt-2" height="25px" alt="Icone de login">igor.simt@gmail.com</v-list-item-title>
            
          </v-list-item> -->
            
            
          </v-card>

          <v-card  width="380" height="500">
            <div class="d-flex justify-center flex-column align-center mb-5" border="bottom" color="red lighten-2">
              <v-list-item-avatar size="100" border="bottom" color="red lighten-2"  class="mt-10">
              <img src="../../public/img/user.svg" border="bottom" color="red lighten-2" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Desenvolvedor
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="pa-5 mb-7">
              <v-card-text class="title text-center">
              "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                igor.simt@gmail.com
              </v-card-text>
            </div>
            
          </v-card>
        
        </section>
          
        </v-container>
       
        <Footer />
    </v-app>
</template>

<script>
import Headerpadrao from '../components/Headerpadrao';
import Footer from '../components/Footer';

export default {
  components: {
    Headerpadrao,
    Footer,
  },
};
</script>