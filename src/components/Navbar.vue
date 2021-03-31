<template>
  <div class="navy">
    <b-navbar toggleable type="dark">
         <b-navbar-nav >
               <b-nav-item class="logo_fiambre" to="/">FIAMBRERIA <span class="logo">EL TABLÓN</span></b-nav-item>

          </b-navbar-nav>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="caret-up"></b-icon>

          <b-icon v-else icon="caret-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
         
          <b-nav-item to="/" class="words">Productos</b-nav-item>
          <b-nav-item to="/contacto" class="words">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>


 
</template>


<script>
export default {
  name: "Navbar",
  
};
</script>
<style lang="scss">
//NAVY HACE QUE NAVBAR NO DEJE DE APARECER
.navy {
  position: sticky;
  top: 0;
  z-index: 100;
 
  
}
h1{
  align-content: center;
}
.logo{
font-size: 35px;
}

.words{
   color: black !important;

}

.navbar {
  background-color: rgb(14, 97, 48);
}

.logo_fiambre{
  font-size: 20px;
  font-weight: bold;
}

@media(max-width: 500px){
  .logo{
font-size: 20px;
}

.logo_fiambre{
  font-size: 15px;
  font-weight: bold;
}
}
</style>
