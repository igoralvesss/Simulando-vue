
    <template>
  <div>
    <v-app-bar
      color="purple darken-4"
      dark
      id="top"
    >
      <v-toolbar-title><img class="click" @click="logo" src="../../public/img/logo2menor.png" height="50px" alt="Logo Simulando - Simulados online"></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn class="font-weight-bold" text @click="primeiro">Vestibulares</v-btn>
        <v-btn class="font-weight-bold" text ref="button" @click="$vuetify.goTo(target, options)">Notícias</v-btn>
        <v-btn class="font-weight-bold" text @click="terceiro">Extras</v-btn>
        <v-btn class="font-weight-bold" text @click="quarto">Sobre</v-btn>
      </v-toolbar-items>

     <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        
       <v-btn icon v-on="on">
            <img src="../../public/img/user.svg" height="40px" alt="Imagem do usuário">
          </v-btn>
      
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../../public/img/user.svg" height="40px" alt="Imagem do usuário">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Usuário</v-list-item-title>
              <v-list-item-subtitle class="font-weight-bold">Aluno indefinido</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de login">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="login">Entre</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/eua.png" height="30px" width="50px" alt=" Icone EUA">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="idioma">English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
      
    </v-app-bar>

    <v-app-bar
      color="purple darken-4"
      dark
      id="mobile"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-card class="d-flex purple darken-4 justify-center elevation-0" width="100%" height="100%">
          <v-toolbar-title><img @click="logo" src="../../public/img/logo2menor.png" height="50px" alt="Logo Simulando - Simulados online"></v-toolbar-title>
        </v-card>        
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
    
        <v-list>
          <v-list-group value="true">
       <template v-slot:activator>
          <v-list-item-avatar>
              <img src="../../public/img/user.svg" height="40px" alt="Imagem do usuário">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Usuário</v-list-item-title>
              <v-list-item-subtitle>Aluno indefinido</v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de login">
            </v-list-item-action>
            <v-list-item-title>Entre</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/eua.png" height="30px" width="50px" alt="Icone EUA">
            </v-list-item-action>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
        
           </v-list-group>

          
          
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
           
            <v-list-item-title>Vestibulares</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Notícias</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Extras</v-list-item-title>
          </v-list-item>
        </v-list>
      
    </v-navigation-drawer>

  </div>
  
</template>

<style>

.fonte{
    font-family: 'Quicksand', sans-serif;
  }

.click{
  cursor: pointer;
}

@media(max-width:750px){
  #top{
    display:none;
  }
}

@media(min-width:750px){
  #mobile{
    display:none;
  }
}
</style>

<script>
import * as easings from 'vuetify/lib/services/goto/easing-patterns'

export default {
  methods: {
    primeiro () {
      this.$router.push('/vestibulares')
    },
    terceiro () {
      this.$router.push('/extras')
    },
    quarto () {
      this.$router.push('/sobre')
    },
    logo () {
      this.$router.push('/')
    },
    login () {
      this.$router.push('/login')
    },
    idioma () {
      this.$router.push('/ingles')
    },
  }, 
    data () {
      return {
        drawer: false,
        group: null,
        type: 'number',
        number: 1500,
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
      }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
