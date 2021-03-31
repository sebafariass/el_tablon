<template>
<div class="contact_principal">

   <h2 class="text-center">Retira tu Pedido</h2>
 <i class="far fa-home-alt fa-2x"><span>Dirección : Isabel Riquelme #861.</span></i><hr>
      <i class="far fa-envelope fa-2x"><span> Email : fiambreseltablon@gmail.com</span></i><hr>
        <i class="fab fa-whatsapp fa-2x"><span> Contacto: +56998446413</span></i>
       <hr>

   <div class="map container">
  
<iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.2596343861082!2d-70.77781178472094!3d-33.4946215071667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c2db30dd3c19%3A0x6813c5fae13417c9!2sIsabel%20Riquelme%20861%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1616447189318!5m2!1ses-419!2scl" width="550" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
    
   
 
</div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "Vistas",

   computed: {
 
   
      ...mapState(["edades"]),
      ...mapState(["fiambre"]),
      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h2{
   font-family: 'Bebas Neue', cursive;
   font-size: 50px;
}

.map_ajuste {
   position: relative;
   left: 160px;
}

hr{
  
   width: 50%;
}

.contact_principal{
    font-family: 'Bebas Neue', cursive;
}


span{
   font-size: 28px;
    font-family: 'Bebas Neue', cursive;
}
     // MAPA I FRAME RESPONSIVO //
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 80%;
  border: none;
}
       //   FIN RESPONSIVE // 


</style>
