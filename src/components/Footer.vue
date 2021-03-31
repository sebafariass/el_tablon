<template>
  <div class="footy">
 <h4 class="mt-2"> <i class="fab fa-whatsapp fa-1x contact"> Contacto : +56998446413 </i>  <i class="far fa-envelope fa-1x cart" > FIAMBRERIAELTABLON@GMAIL.COM </i></h4>

  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss">
.footy{
    height: 80px;
     position:fixed;
     text-align: center;
   bottom:0;
   width:100%;
   height:60px;   /* Height of the footer */
   background:rgb(245, 207, 135);
  
   
 
  
    
   
}
.contact{
  font-family: 'Josefin Sans', sans-serif;
  
}
.cart{
  font-family: 'Josefin Sans', sans-serif;
}
@media(max-width: 500px){
  .cart{
    font-size: 20px;
  }
   .contact{
    font-size: 20px;
  }
}

@media(max-width: 400px){
  .cart{
    font-size: 15px;
  }
}

@media(max-width: 300px){
  .cart{
    font-size: 14px;
  }
}



</style>>

