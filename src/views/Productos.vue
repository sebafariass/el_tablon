<template>
 

    
    <div class="grid2">
   
<div class="grid_bajo" to="/contacto">
   <div class="barra_lateral  text-center">
      <div class="lateral_font"> 
          <h1>Fiambrería El Tablón</h1>
          <h2 class="mt-5">Tiene disponible a la venta productos frescos</h2>
            <h3>Productos pueden ser en Trozo ó Laminado</h3>
        <h4 class="mt-5">Despacho a Domicilio</h4>
        <h4 class="mt-5">Horario</h4>
        <h3 class="mt-5"> 18:00 Hrs - 20:30 Hrs</h3>
      
        
    </div>
   </div>


   </div>

   <div>
     <h1 class="text-center mb-5">Productos Disponibles</h1>
      <Grilla />
   </div>

    </div>

  
</template>

<script>
import Grilla from "@/components/Grilla.vue";

export default {
  name: "Productos",
  components: {
   Grilla
  }
};
</script>

<style lang="scss">



 h1{
  font-family: 'Slabo 27px', serif;
  font-weight: 300;
   font-size: 60px;
 }
 .grid2 { 
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 40px;
}
@media (min-width: 780px) {
  
.grid2{
    display: grid;
     grid-template-columns: 50% 50%;
    text-align: center;
     gap: 20px;
     width: 100%;
}
}


@media (max-width: 780px) {
  
.grid2{
    display: grid;
     grid-template-columns: 100%;
    text-align: center;
     gap: 20px;
     width: 100%;
     justify-content: center;
      font-family: 'Oswald', sans-serif; 
}
}

.nav-item{
    display: inline-block;
    align-content: center;

 }

 .barra_lateral{
   position: sticky;
   top: 200px;
  font-family: 'Bebas Neue', cursive;
  display:inline-block;
  text-align: right;
  

 
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../assets/fiambre.jpg);
    opacity: 0.6;
     border-radius: 20%;
      background-repeat: no-repeat;
     background-size: cover;
     background-position: inherit;
     right: 0;
     


 
  
}
 }
 

.lateral_font{
  
 font-family: 'Oswald', sans-serif;
 font-size: 15px;
 position: relative;
  color: rgb(24, 70, 3);
 
}

.grid_bajo{
  opacity: 0.6;
   font-family: 'Oswald', sans-serif;
   
}
 
 h1{ font-family: 'Oswald', sans-serif;}
</style>
