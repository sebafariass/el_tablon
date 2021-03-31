<template>
 <div class="footy2">
       <div class="grid">
   <v-col v-for="(personaje, i) in users" :key="i">
         <v-img  class="imgDog"  :src="personaje.data.img"></v-img>
        
           <h6  class="text-center mt-3 titulo">{{ personaje.data.name}}</h6>
           <h6  class="text-center">{{ personaje.data.descripcion}}</h6>
           <h5 class="text-center">{{ personaje.data.valor}}</h5>
               
    </v-col>
    
</div>
 
        

       
   </div>
   
</template>

<script>


import {mapState} from "vuex";

export default {
name: "Grilla",
 


 computed: {
 
    ...mapState(["users"]),
    
  
  },
}
</script>

<style scoped lang="scss">

* {
  font-family: 'Roboto Mono', monospace;
}

.titulo{
  font-weight: bold ;
}

.grid{
   width: 100%;
    height: 70%;
    display:grid;
    grid-template-columns: 30% 30% 30%;
      grid-auto-rows: 400px;
    row-gap: 75px;
    
}
.grid div {
  color: black;
  height: 80%;
  

}
.imgDog:hover{
transform: translateY(5px);
  
}

h4{
  color:red;
  border-radius: 20%;
}

.imgDog{
    width: 100%;
    height: 70%;

}

.footy2{
     min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
      grid-auto-rows: 100px;

}


@media (max-width: 999px) {
  
.grid{
    display: grid;
     grid-template-columns: 50% 50%;
     row-gap: 50px;
    
  
  
  
}
  
}




@media (max-width: 570px) {
  
.grid{
    display: grid;
     grid-template-columns: 50% 50%;
   justify-content: center;
  
     row-gap: 120px;
    
  
}
  .imgDog{
  height: auto;
}

}


@media (max-width: 300px) {
  
.grid{
    display: grid;
     grid-template-columns: 50% 50%;
   justify-content: center;

     row-gap: 150px;
    
  
}
  .imgDog{
  height: auto;
}

}
</style>