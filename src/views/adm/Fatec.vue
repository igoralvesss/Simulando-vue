<template>
  <div>
        <HeaderProva />
    <v-container class="grey lighten-5 alinhamento marg">
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col lg="8">
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-card-title>
            Questões Fatec
          </v-card-title>

          <v-card outlined class="d-flex flex-column mt-5 ">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 1 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img" src="../../../public/img/fatec/questao-fatec_A.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 2 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img" src="../../../public/img/fatec/questao-fatec_B.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 3 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img3" src="../../../public/img/fatec/questao-fatec_C.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 4 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img4" src="../../../public/img/fatec/questao-fatec_D.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 5 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img5" src="../../../public/img/fatec/questao-fatec_E.png" alt="">
            </div> 
          </v-card>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card
          class="pa-2 "
          outlined
          tile
          fixed
        >
          <v-card-title>
            Gabarito 
          </v-card-title>

          <v-list-item-subtitle class="pl-5 pt-5 title">Questão 1</v-list-item-subtitle>

          <v-radio-group v-model="row" ref="buttons" row class="pl-5">
            <v-radio label="A" value="radio-1" color="success"></v-radio>
            <v-radio label="B" value="radio-2" color="red"></v-radio>
            <v-radio label="C" value="radio-3" color="red"></v-radio>
            <v-radio label="D" value="radio-4" color="red"></v-radio>
            <v-radio label="E" value="radio-5" color="red"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-5 title">Questão 2</v-list-item-subtitle>

          <v-radio-group v-model="row" ref="buttons" row class="pl-5">
            <v-radio label="A" value="radio-6" color="red"></v-radio>
            <v-radio label="B" value="radio-7" color="success"></v-radio>
            <v-radio label="C" value="radio-8" color="red"></v-radio>
            <v-radio label="D" value="radio-9" color="red"></v-radio>
            <v-radio label="E" value="radio-10" color="red"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-5 title">Questão 3</v-list-item-subtitle>

          <v-radio-group v-model="row" ref="buttons" row class="pl-5">
            <v-radio label="A" value="radio-11" color="red"></v-radio>
            <v-radio label="B" value="radio-12" color="red"></v-radio>
            <v-radio label="C" value="radio-13" color="success"></v-radio>
            <v-radio label="D" value="radio-14" color="red"></v-radio>
            <v-radio label="E" value="radio-15" color="red"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-5 title">Questão 4</v-list-item-subtitle>

          <v-radio-group v-model="row" ref="buttons" row class="pl-5">
            <v-radio label="A" value="radio-16" color="red"></v-radio>
            <v-radio label="B" value="radio-17" color="red"></v-radio>
            <v-radio label="C" value="radio-18" color="red"></v-radio>
            <v-radio label="D" value="radio-19" color="success"></v-radio>
            <v-radio label="E" value="radio-20" color="red"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-5 title">Questão 5</v-list-item-subtitle>

          <v-radio-group v-model="row" ref="buttons" row class="pl-5">
            <v-radio label="A" value="radio-21" color="red"></v-radio>
            <v-radio label="B" value="radio-22" color="red"></v-radio>
            <v-radio label="C" value="radio-23" color="red"></v-radio>
            <v-radio label="D" value="radio-24" color="red"></v-radio>
            <v-radio label="E" value="radio-25" color="success"></v-radio>
          </v-radio-group>

          <div class="d-flex justify-space-around flex-wrap mt-5">
             <div class="my-2">
            <v-btn color="purple darken-4" dark>Terminar</v-btn>
          </div>
  
          <div class="my-2">
            <v-btn color="red darken-1 white--text" class="mr-4" @click="reset"> Apagar respostas </v-btn>
          </div>
          </div>

         
          

        </v-card>
      </v-col>
    </v-row>

    <div class="my-2 fixo ocultar">
            <v-btn color="purple darken-4" fab small dark>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>

  </v-container>
  </div>
    
</template>

<style>
  .alinhamento{
    margin-top: -580px;
  }

  .fixo{
       position: fixed;
  top: 590px;
  left: 1280px;
  right: 100px;
  width: 10em;
    }
  .marg{
    margin-top: 70px;
  }    
  @media(max-width: 410px) {
    .img{
      height: 350px;
    }
    .img3{
      height: 400px;
    }
    .img4{
      height: 310px;
    }
    .img5{
      height: 450px;
    }
  }

    
</style>
<script>
import HeaderProva from '../../components/HeaderProva';

export default {
  components: {
    HeaderProva,
  },

    methods: {
      reset () {
        this.$refs.buttons.reset()
      },
    },
  
};
</script>