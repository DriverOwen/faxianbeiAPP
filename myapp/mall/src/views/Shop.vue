<template>
  <el-container>
    <el-header height="49px">
      <my-header :search="true">

      </my-header>
    </el-header>
    <el-main>
      <el-row :gutter="5">
        <el-col :span="12">
          <div class="goods-box">
            <div class="zang img" >
<!--              <img src="~@/assets/images/zang.png" alt="">-->
            </div>
            <div class="text">
              <p>藏装租借</p>
              <p class="text-likes">1.2k 人喜欢</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="24">
              <div class="goods-box-mini">
                <div class="img song">
<!--                  <img src="~@/assets/images/recommend1.jpg" alt="">-->
                </div>
                <div class="text">
                  <span>特色松茸</span>
                  <p class="text-likes">2.8k 人喜欢</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="last-row-box">
            <el-col :span="24">
              <div class="goods-box-mini">
                <div class="img hao">
<!--                  <img src="~@/assets/images/recommend1.jpg" alt="">-->
                </div>
                <div class="text">
                  <span>高原耗牛肉</span>
                  <p class="text-likes">1.4k 人喜欢</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="5" class="middle-row-box">
        <el-col :span="12">
          <div class="goods-box-middle">
            <div class="img cao">
<!--              <img src="~@/assets/images/recommend1.jpg" alt="">-->
            </div>
            <div class="text">
              <span>高原虫草</span>
              <p class="text-likes">886 人喜欢</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="goods-box-middle">
            <div class="img cha">
<!--              <img src="~@/assets/images/recommend1.jpg" alt="">-->
            </div>
            <div class="text">
              <span>异域藏茶</span>
              <p class="text-likes">1.1k 人喜欢</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="large-row-box">
        <el-col :span="24">
          <div class="goods-box-large">
            <div class="img">
              <img src="~@/assets/images/recommend1.jpg" alt="">
            </div>
            <div class="text">
              <span>更多</span>
            </div>
          </div>
        </el-col>
      </el-row>

    </el-main>
    <el-footer height="49px">
      <main-foot-nav>
      </main-foot-nav>
    </el-footer>
  </el-container>
</template>

<script>
import MainFootNav from "@/components/content/FootNav/mainFootNav";
import MyHeader from "@/components/content/Header/myHeader";
export default {
name: "Shop",
  components: {MyHeader, MainFootNav}
}
</script>

<style scoped>
  .goods-box {
    overflow: hidden;
    height: 240px;
    border-radius: 5px;
    background: #F2385A;
    position: relative;
  }
  .goods-box-mini {
    overflow: hidden;
    height: 117px;
    border-radius: 5px;
    background: #F2385A;
    position: relative;
  }
  .goods-box-middle {
    overflow: hidden;
    height: 117px;
    border-radius: 5px;
    background: #F2385A;
    position: relative;
  }
  .goods-box-large {
    overflow: hidden;
    height: 117px;
    border-radius: 5px;
    background: #F2385A;
    position: relative;
  }
  .img img{
    animation: imgTransform 10s ease;
  }
  .goods-box-large img {
    height: 100%;
  }
  .goods-box-middle img{
    height: 100%;
  }
  .goods-box-mini img {
    height: 100%;
  }
  .goods-box img{
    height: 100%;
  }
 .text {
    position: absolute;
    background: rgba(0,0,0,0.4);
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: #ec6d85;
    font-weight: bold;
    display: flex;
     flex-direction: column;
   justify-content: center;
  }
 .text-likes {
   font-size: 12px;
   color: #fff;
   font-weight: normal;
 }
 .last-row-box {
   margin-top: 6px;
 }
 .middle-row-box {
   margin-top: 6px;
 }
 .large-row-box {
   margin-top: 6px;
 }
 @keyframes imgTransform {
   from{
     transform: scale(1);
   }
   to{
     transform: scale(1.5);
   }
 }
 .zang {
   height: 240px;
   background: url("../assets/images/zang.png");
   background-size: cover;
 }
 .song {
   height: 117px;
   background: url("../assets/images/song.jpg");
   background-size: cover;
 }
 .hao {
   height: 117px;
   background: url("../assets/images/hao.jpg");
   background-size: cover;
 }
 .cao {
   height: 117px;
   background: url("../assets/images/cao.jpg");
   background-size: cover;
 }
 .cha {
   height: 117px;
   background: url("../assets/images/cha.jpg");
   background-size: cover;
 }
</style>