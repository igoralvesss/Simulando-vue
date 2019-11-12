<template>
  <section class="banner">
    <div class="escuro">
      
      
            <v-card class="elevation-12" width="400px" min-width="300px">
              <v-toolbar
                color="purple darken-4 centralizar"
                dark
                flat
              >
                <v-toolbar-title class="font-weight-bold ocultar">Acesso ao perfil</v-toolbar-title>
                <div class="flex-grow-1 ocultar"></div>
                <img src="../../public/img/logo2menor.png" height="35px" width="150px" alt="Logo Simulando - Simulados online">
              
              </v-toolbar>
              <v-card-text>
                <div class="text-local font-italic font-weight-bold">
                    <p>Acesso ao perfil</p>
                  </div>
                <v-form>
                  
                  <v-text-field
                    label="Usuário"
                    name="login"
                    prepend-icon="mdi-account-multiple"
                    type="text"
                    v-model="login"
                    color="purple darken-4"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="passwordlogin"
                    label="Senha"
                    name="passwordlogin"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="passwordlogin"
                    color="purple darken-4"
                    required
                  ></v-text-field>

     <v-dialog
      v-model="dialog"
      width="500"
      class="ml-5 mt-n1"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="purple darken-4"
          x-small
          dark
          v-on="on"
          text
        >
          Esqueci minha senha
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline purple darken-4 white--text"
          primary-title
        >
          Problemas...
        </v-card-title>

        <v-card-text class="mt-4 font-weight-bold">
          Infelizmente não temos nenhuma equipe que possa te ajudar a relembrar sua senha. Estamos trabalhando para que possamos dar todo o suporte possível.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions >
          <div class="flex-grow-1"></div>
          <v-btn
            color="purple darken-4"
            text
            @click="dialog = false"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-alert class="d-flex align-center mt-5" transition="scale-transition" color="red" :value="!!alerta">{{ alerta}}</v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn class="mr-3 mb-2 white--text" color="red" @click="voltar">Voltar</v-btn>
                <v-btn class="mr-3 mb-2 white--text" color="purple darken-4" @click="acessar">Entrar</v-btn>
              </v-card-actions>
            </v-card>
  


<!-- Cadastro -->


            <v-card class="elevation-12 espaco" width="400px" min-width="250px">
              <v-toolbar
                color="purple darken-4 centralizar"
                dark
                flat
              >
                <v-toolbar-title class="font-weight-bold ocultar">Cadastro </v-toolbar-title>
                <div class="flex-grow-1"></div>
                <img src="../../public/img/logo2menor.png" height="35px" width="150px" alt="Logo Simulando - Simulados online">
              
              </v-toolbar>
              <v-card-text>
                <div class="text-local font-italic font-weight-bold">
                    <p>Cadastro </p>
                  </div>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                
                  <v-text-field
                    v-model="usuario"
                    :rules="usuarioRules"
                    :counter="10"
                    label="Usuário"
                    prepend-icon="mdi-account"
                    color="purple darken-4"
                    required
                    ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-icon="mdi-email"
                    color="purple darken-4"
                    required
                    ></v-text-field>

                  <v-text-field
                    v-model="instituicao"
                    :rules="instiRules"
                    :counter="50"
                    label="Instituição de ensino médio"
                    prepend-icon="mdi-book"
                    color="purple darken-4"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :rules="senhaRules"
                    :counter="6"
                    label="Digite sua nova senha"                                       
                    prepend-icon="mdi-lock"
                    type="password"
                    color="purple darken-4"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="passwordrepeat"
                    label="Digite novamente"
                    v-model="passwordrepeat"
                    :rules="repeatRules"
                    :counter="6"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="purple darken-4"
                  ></v-text-field>

                  

                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="red"
                  class="mr-3 mb-2 white--text"
                  @click="reset"
                >
                  Apagar dados
                </v-btn>

                <v-btn
                  :disabled="!valid"
                  color="purple darken-4"
                  class="mr-3 mb-2 white--text"
                  @click="validate"
                >
                 Cadastrar-se
                </v-btn>
                
              </v-card-actions>
            </v-card>

    
   
    </div>
  </section>
</template>

<style>
    .fonte{
    font-family: 'Quicksand', sans-serif;
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
  .escuro{
    background-color: rgb(0, 0, 0, 0.6);
    height: 100%;
    padding: 50px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
      justify-content: space-around;
      align-items: center;    
  }
  .text-local{
    display: none;
  }

  @media(max-width:450px){
    .ocultar{
      display: none;}
    .centralizar{
      display: flex;
      justify-content: center;
    }
    .text-local{
      display: flex;
    }
  }

  @media(max-width:805px){
    .espaco{
      margin-top: 50px;
    }
  }

 

</style>

<script>
  export default {
    props: {
      source: String,
    },
    
    data: () => ({
      dialog: false,
      login: '',
      passwordlogin: '',
      alerta: '',

      drawer: null,
      valid: true,
      usuario: '',
      usuarioRules: [
        v => !!v || 'Nome do usuário é obrigatório.',
        v => (v && v.length <= 10) || 'O limite é 10 caracteres.',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'Digite um e-mail válido.',
      ],
      instituicao: '',
      instiRules: [
        v => !!v || 'Nome da intituição é obrigatório',
        v => (v && v.length <= 50) || 'O limite é 50 caracteres.',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Campo senha é obrigatório',
        v => (v && v.length <= 6) || 'O limite é 6 caracteres.',
      ],
      passwordrepet: '',
       passwordRules: [
        v => !!v || 'Repetir a senha é obrigatório',
        v => (v && v.length <= 6) || 'O limite é 6 caracteres.',
      ],
    }),

    
    

    methods: {
      acessar () {
        if (this.login === 'murillo' && this.passwordlogin === '123') {
          this.$ls.set('user', {
            login: this.login,
            nome: 'Murillo',
            status: 'Iniciante'
          })
          this.$router.push('/dashboards/Dashboard-user')
        } else {
          this.alerta = 'Usuário ou senha incorreto.'
        }

        if (this.login === 'igor' && this.passwordlogin === '123') {
          this.$ls.set('user', {
            login: this.login,
            nome: 'Igor',
            status: 'Desenvolvedor'
          })
          this.$router.push('/dashboards/Dashboard-adm')
        } else {
          this.alerta = 'Usuário ou senha incorreto.'
        }
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      voltar () {
        this.$router.push('/')
      }, 
    },  
  }
</script>