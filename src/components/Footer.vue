<template>
    <footer>
        <div class="ly_footer">
            <div class="ly_footer_inner">
                <small class="el_footerCopyright">(C)2021 k4zam1 All rights reserved.</small>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ly_footer {
    padding-top:20px;
    padding-bottom:20px;
    background-color: #2A354F;
    margin-top: 20px;
}
.hp_btGray {
    border-top:1px solid #777 !important;
}
.ly_footer_inner {
    max-width:1230px;
    padding-right:15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
}
.el_footerCopyright {
    display: block;
    color: #ddd;
    font-size: 12px;
    text-align: center;
}
</style>
