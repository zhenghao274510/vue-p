<template>
  <div class="score">
      <div class="showscore">
        <div class="content">
            <h3>{{sumScore}}分!</h3>
            <p>{{getScoreTip}}</p>
            <p>总时间:{{$store.state.allTime}}s</p>
        </div>
      </div>
  <div class="share_icon" @click="showCover">
        </div>
        <div class="share_info">
          关注葡萄之家获取答案
        </div>
        <div class="share_ma">
           <img src="./../../images/4-4.png" >
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
</div>
</template>

<script>
export default {
  data() {
    return {
           showHide:false,
           score: 0, //分数
          rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
    }
  },
  methods: {
            showCover(){
              this.showHide=!this.showHide;
            }
  },
  components: {
},
 computed: {
    sumScore(){
  this.$store.state.answer_id.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
            return this.score;
    },
      getScoreTip (){
          let index = Math.ceil(this.score/20);
          return this.scoreTipsArr[index];
        }
}



}
</script>

<style scoped lang='less'>
.score{
  width: 100%;
  height: 100%;
  background: url('./../../images/4-1.jpg') no-repeat;
  background-size:cover;
display: flex;
  flex-direction: column;
  align-items: center;
  .showscore{
  margin-top:.4rem;
   position: relative;
   width: 1.9rem;
    height: 1.8rem;
    background: url('./../../images/4-2.png') no-repeat;
    background-size: 100% 100%;
    .content{
      position: absolute;
      top:.85rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    padding:0 .05rem 0 .15rem;
       h3{
         font-size: .24rem;
         line-height: .3rem;
        color: #a51d31;
    }
    p{
      font-size: .14rem;
    }
  }
}
  .share_icon{
    margin-top: .2rem;
    width: 1.2rem;
    height: .5rem;
    background: url('./../../images/4-3.png') no-repeat;
    background-size: 100% 100%;
  }
  .share_info{
    margin-top: .1rem;
    height: .3rem;
    line-height: .3rem;
    font-size: .14rem;
  }
  .share_ma{
    margin-top: .2rem;
    width: 1.1rem;
    height: 1.1rem;
    img{
      width: 100%;
      height: auto;
    }
  }
  .share_cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./../../images/5-1.png') no-repeat;
    background-size: cover;
    .share_img{
      height: 3rem;
      width: 2.4rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }


}
</style>
