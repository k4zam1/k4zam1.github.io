<template>
    <nav class="navbar navbar-expand-md navbar-light mb-5">
        <!-- 画面幅sm以下では折りたたみ,md以上では広げて表示 -->
        <div class="container">
            <!-- ハンバーガーボタン -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- ナビゲーション -->
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="menu in menus" :key="menu.title"><a class="nav-link" :href="menu.link">{{ menu.title }}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data:function(){
      return {
        menus : [
            {link:"#",title:"Top"},
            {link:"#about",title:"About"},
            {link:"#work",title:"Work"},
            {link:"#contact",title:"Contact"}
        ]
      }
  }
}
</script>