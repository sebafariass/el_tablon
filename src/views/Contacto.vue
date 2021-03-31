<template>

   <div>

 
  <Vistas />

    
  </div>
</template>

<script>


import Vistas from "@/components/Vistas.vue";
import {mapState} from "vuex";
export default {
  name: "Contacto",
components: {
   Vistas,
  
    
   
   
  },

   computed: {
 
    ...mapState(["edades"]),
   ...mapState(["fiambre"]),
  },
};
</script>

<style></style>
