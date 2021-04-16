<!-- body -->
<template>
  <Navigation/>
  <main>
    <article>
      <Jumbotron title="Portfolio" desc="
        Welcome :)"/>
      <section class="container mb-5" id="about">
        <Media dent="True" imgpath="img/analyst.svg" title="about me" txt="
          <ul>
            <li>2016年 山形大学システム創成工学科入学</li>
            <li>2020年 山形大学理工学研究科情報科学専攻(修士)入学</li>
            <li>2022年 山形大学理工学研究科情報科学専攻(修士)卒業予定</li>
          </ul>
        "/>
        <Media dent="True" imgpath="img/storage.svg" title="skills" txt="
          <ul>
            <li>Python</li>
            使用歴:4年、実務経験:あり<br/>

            <br/>

            <li>R</li>
            使用歴:2年、実務経験:なし<br/>
            <br/>
            <li>JavaScript</li>
            使用歴:3年、実務経験:あり<br/>

          </ul>
        "/>
      </section>
      <section class="container mb-5" id="work">
        <div class="bl_cardUnit bl_cardUnit__col3">
          <Card imgpath="https://user-images.githubusercontent.com/56730772/88771210-dfac7e00-d1b9-11ea-8db5-5858a27850e2.png" title="ノーベル賞受賞者の可視化" txt='
             使用言語：Python,JS<br/>Wikipediaからスクレイピングしたノーベル賞受賞者のデータを可視化しました。スクレイピングにはscrapyを使い、データの保管にはpymongoを利用しています。
             pymongoからflaskを使ってデータを配信するRestfulAPIを作成し、d3.jsでデータを可視化しています。
             <center><a href="https://github.com/k4zam1/novel-winners-visualization"  target="_blank">LEARN MORE</a></center> '/>
          <Card imgpath="img/city-viz.png" title="米沢市循環バス情報" txt='
            使用言語：JS<br/>
            米沢市の循環バスがいまどこらへんにいるのかを可視化しました。データの可視化にはLeaflet.jsを使っています。
            <center><a href="https://k4zam1.github.io/city-viz/" target="_blank">LEARN MORE</a></center>'/>
          <Card imgpath="img/dashboard.png" title="ダッシュボード" txt='
            使用言語：R,JS,CSS<br/>ブラウザ上でインタラクティブにデータを可視化するダッシュボードです
            <center><a href="https://k4zam1.shinyapps.io/Dashboard" target="_blank">LEARN MORE</a></center>' />
        </div>
      </section>
      <Contact/>
    </article>
  </main>
  <Footer/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Jumbotron from './components/Jumbotron.vue'
import Media from './components/Media.vue'
import Card from './components/Card.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    Jumbotron,
    Media,
    Card,
    Contact
  },
}
</script>

<style>
@charset "UTF-8";
body {
    color:#343;
    font-family:sans-serif;
    line-height:1.5;
    background-color: #efefef;
}
a {
    color:#777;
    text-decoration: none;
}
a:hover {
    color:currentColor;
    text-decoration: none;
}
img {
    max-width: 100%;
    vertical-align: top;
}
</style>