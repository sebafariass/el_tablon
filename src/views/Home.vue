<template>
  <div>
    <h1>PROBANDO HOME</h1>

  <v-col v-for="(personaje, i) in fiambre" :key="i">
        
           <h6  class="text-center">{{ personaje.data.name}}</h6>
           <h5 class="text-center">{{ personaje.data.valor}}</h5>    
    </v-col>

    <v-file-input
      @change="previewImage"
      accept="image/*"
      label="Sube Archivo"
    ></v-file-input>

    <b-button id="inputUpload" @click="onUpload" variant="primary">
      Subir imagen
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import Vistas from "@/components/Vistas.vue";

import firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["users"]),
    ...mapState(["fiambre"]),
  },

  components: {
    // Vistas,
  },

  methods: {
    previewImage(file) {
      console.log(file);
      this.imagen = file;
    },
    onUpload() {
      (this.loading = true),
        firebase
          .storage()
          .ref(`/imagenes/${this.imagen.name}`)
          //metodo put para mandar al storage
          .put(this.imagen)
          //snapshot corresponde al archivo recien cargado
          //getdownloadUrl el metodo por si solo es una promesa
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              console.log(url);
              this.url = url;
            });
          });
    },
  },
  data: () => ({
    imagen: "",
    url: "",
  }),
};
</script>
