<template>
    <section class="container" id="contact">
        <div class="contacts-wrapper text-center">
            <a :href="github" target="_blank"><i style="color:#3c3c3c" class="contact-icon fab fa-github-alt"></i></a>
            <a :href="twitter" target="_blank"><i style="color:#1DA1F2" class="contact-icon fab fa-twitter"></i></a>
        </div>
    </section>
</template>
<script>
export default {
    name:"Contact",
    data: function(){
      return {
          github:"https://github.com/k4zam1",
          twitter:"https://twitter.com/hassy71573733",
      }
  }
}
</script>