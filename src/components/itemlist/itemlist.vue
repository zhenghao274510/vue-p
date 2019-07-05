<template>
  <div class="box">
     <div class="top">
       <span v-if="currentShow=='home'">{{store.level}}</span>
       <span v-if="currentShow=='item'">{{store.itemDetail[store.num-1].topic_name}}</span>
   </div>
     <div class="content pos" v-if="currentShow=='home'"></div>
     <div class="itemcon pos" v-if="currentShow=='item'" >
          <p >{{store.itemDetail[store.num-1].topic_name}}</p>
           <ul  >
          <li v-for="(item,index) in store.itemDetail[store.num-1].topic_answer" :key="index" @click="choosed(index,item.topic_answer_id)">
              <span :class="{'haschoosed':choosedNum==index}">{{item.topic_answer_id-1 | getnum}}</span>
              <span>{{item.answer_name}}</span>
            </li>
          </ul>
     </div>
     <div class="btncon"  @click="time">
           <router-link  class="star btn" v-if="currentShow=='home'" to="/item" ></router-link>
           <span  class="next btn" v-else-if="store.num<store.itemDetail.length" @click.stop="change"></span>
           <span class="btn sub" v-else @click.stop="submitAnswer"></span>
 </div>
     <div>
     </div>
</div>
</template>

<script>

export default {
  props:['currentShow'],
  data() {
    return {
        choosedNum:null,
        choosedid:null
    }
  },
  mounted () {


},



methods: {
    time(){
       let  store=this.$store.state
          store.timer=setInterval(()=>{
           store.allTime++;
          //  console.log( store.allTime)
      },1000);
    },
    change(){
     //  判断有无选着择
        let  store=this.$store.state
     if(this.choosedNum !==null){
       this.choosedNum=null;

if(store.num<store.itemDetail.length){
          this.$store.commit('add',1);
          this.$store.commit('addAnswer',this.choosedid);
      }
   }else{
       alert('你还没有选择答案');
   }




},
  choosed(type,id){
          this.choosedNum=type;
          this.choosedid=id;
    },
    submitAnswer(){
       let  store=this.$store.state;
      	if (this.choosedNum !== null) {
         this.$store.commit('addAnswer',this.choosedid);
	  			clearInterval(store.timer);
	  			this.$router.push('share');
  			}else{
  				alert('您还没有选择答案哦')
  			}
    }
  },
  components: {
},
  computed: {
    store(){
      return this.$store.state;
    }
  },
     filters: {
      getnum(val){
        let m=val%4;
        switch(m){
          case 0:
            return "A";
             case 1:
            return "B";
             case 2:
            return "C";
             case 3:
            return "D";
        }
      }
  }


}
</script>

<style scoped lang='less'>
.box{
  width: 100%;
  height: 100%;
position: relative;
 .top{
  position: absolute;
  top: -.45rem;
  right: .2rem;
  width: .65rem;
  height: 1.5rem;
  background: url('./../../images/WechatIMG2.png') no-repeat;
  background-size: 100% 100%;
  z-index: 99;
  span{
    font-weight: 600;
    color: #a57c50;
    font-size: .12rem;
    position: absolute;
    top: 1.12rem;
    right: .05rem;
    width: .5rem;
    height: .2rem;
    z-index: 100;
  }
   }
   .pos{
     width: 2.6rem;
     height: 2.3rem;
     position: absolute;
     top: .8rem;
     left: 50%;
     transform: translateX(-50%);
   }
   .content{
      background: url('./../../images/1-2.png') no-repeat;
       background-size: 100% 100%;
   }
   p{
     font-size: .12rem;
     line-height: .3rem;
     color: #FFF;
     text-align: left;
     text-indent: .1rem;
   }
   .itemcon{
     background: url('./../../images/2-1.png') no-repeat;
       background-size: 100% 100%;
       padding:.2rem .5rem .3rem .8rem;
       li{
         font-size: 0;
         height: .25rem;
         line-height: .25rem;
         font-size: .12rem;
         color: #FFF;
         display: flex;
           .haschoosed{
             background: gold;
           }
         span{
         display: inline-block;
           margin-left: .1rem;
           &:nth-child(1){
             width: .18rem;
             height: .18rem;
             line-height: .18rem;
             border: 1px solid #FFF;
             border-radius: 50%;
           }
         }
       }
   }
   .btncon{
     position: absolute;
     top:2.9rem;
     left: 50%;
     transform: translateX(-50%);
   .star{
       background: url('./../../images/1-4.png') no-repeat;
       background-size: 100% 100%;
   }
     .next{
       background: url('./../../images/2-2.png') no-repeat;
       background-size: 100% 100%;
     }
      .btn{
        display: block;
        width: .8rem;
        height: .4rem;
      }
      .sub{
        background: url('./../../images/3-1.png') no-repeat;
       background-size: 100% 100%;
      }
   }
}


</style>
