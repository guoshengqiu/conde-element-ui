webpackJsonp([2],{BrOh:function(t,a){},KR8f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"Tabs",data:function(){return{tabsArray:[{name:"全部",tab:"all"},{name:"精华",tab:"good"},{name:"分享",tab:"share"},{name:"问答",tab:"ask"},{name:"招聘",tab:"job"},{name:"客户端测试",tab:"test"}],activeName:"all",isTab:"all"}},methods:{handleClick:function(t,a){t.name!==this.isTab&&(console.log(t.name,a,this.activeName),this.$emit("changeTab",t),this.isTab=t.name)}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tabsArray,function(t){return e("el-tab-pane",{key:t.name,attrs:{label:t.name,name:t.tab}})}),1)},staticRenderFns:[]};var s=e("VU/8")(n,i,!1,function(t){e("NR1F")},null,null).exports,r=e("0xDb"),o={name:"TopicList",props:{list:Array},data:function(){return{tag:{share:"分享",ask:"问答",good:"精华",job:"招聘",top:"置顶"}}},methods:{dispalyreplytime:function(t){return Object(r.b)(t)},activeTag:function(t){return!(!t.top&&!t.good)},displayTag:function(t){return!0===t.top?this.tag.top:!0===t.good?this.tag.good:this.tag[t.tab]}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tp-container"},t._l(t.list,function(a){return e("div",{key:a.id,staticClass:"tp-list"},[e("a",{staticClass:"author",attrs:{href:"#1"}},[e("img",{attrs:{src:a.author.avatar_url,title:a.title}})]),t._v(" "),e("span",{staticClass:"replay-count"},[t._v(t._s(a.reply_count)+"/"+t._s(a.visit_count))]),t._v(" "),e("a",{staticClass:"last-time",attrs:{href:"#2"}},[t._v(t._s(t.dispalyreplytime(a.last_reply_at)))]),t._v(" "),e("div",[a.tab?e("span",{staticClass:"tag",class:{"active-tag":t.activeTag(a)}},[t._v(t._s(t.displayTag(a)))]):t._e(),t._v(" "),e("router-link",{staticClass:"tp-title",attrs:{to:{path:"/datails",query:{id:a.id}}}},[t._v(t._s(a.title))])],1)])}),0)},staticRenderFns:[]};var l=e("VU/8")(o,c,!1,function(t){e("rGfa")},"data-v-a34cadde",null).exports,u={props:{currentPage:Number},data:function(){return{fristPage:this.currentPage}},watch:{currentPage:function(t){console.log(t,"page"),this.fristPage=t}},methods:{handleCurrentChange:function(t){console.log("当前页:",t),console.log("fristPage:",this.fristPage),this.$emit("changePage",t)}}},g={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:100,"current-page":t.fristPage},on:{"update:currentPage":function(a){t.fristPage=a},"update:current-page":function(a){t.fristPage=a},"current-change":t.handleCurrentChange}})},staticRenderFns:[]};var d=e("VU/8")(u,g,!1,function(t){e("BrOh")},null,null).exports,h=e("gyMJ"),f={components:{Tabs:s,TopicList:l,Pagination:d},data:function(){return{list:[],currentPage:1,currentPageGet:1,tab:"",loading:!0}},computed:{searchText:function(){return this.$store.state.searchText}},created:function(){this.getListData()},methods:{getListData:function(){var t=this;this.$store.dispatch("goTop"),Object(h.c)({page:this.currentPage,tab:this.tab,limit:20}).then(function(a){t.list=a.data.data,console.log("Topic数据：",t.list),t.loading=!1})},getListDataByPage:function(t){this.loading=!0,this.currentPage=t,console.log("父组件获取的当前页数：",this.currentPageGet),this.getListData()},getListDataByTab:function(t,a){this.loading=!0,this.currentPage=1,this.tab=t.name,console.log("父组件获取的当前tab：",this.tab),this.getListData()}}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Tabs",{on:{changeTab:this.getListDataByTab}}),this._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"inner",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(246,246,246,0.7)"}},[a("TopicList",{attrs:{list:this.list}}),this._v(" "),a("Pagination",{attrs:{currentPage:this.currentPage},on:{changePage:this.getListDataByPage}})],1)],1)},staticRenderFns:[]};var b=e("VU/8")(f,p,!1,function(t){e("f4HC")},null,null);a.default=b.exports},NR1F:function(t,a){},f4HC:function(t,a){},rGfa:function(t,a){}});
//# sourceMappingURL=2.05027486f691821fa126.js.map