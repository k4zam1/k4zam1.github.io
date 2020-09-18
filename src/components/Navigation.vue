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
                <!-- サイズsm以下では折りたたまれてハンバーガーボタンから参照される -->
                <!-- 左側メニュー: 各コンテンツへのリンク-->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Top</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#work">Work</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>