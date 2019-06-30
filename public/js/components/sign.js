webpackJsonp([1],{"1mJ0":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("v-container",[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("v-container",[n("span",{staticClass:"headline"},[e._v("HANDTEKENING")])])],1),e._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("p",{staticStyle:{"font-size":"18px",padding:"20px","background-color":"#eee"}},[e._v("\n                                    Hierbij machtigt u Beslisapp.nl om de "+e._s(this.government_name)+" in gebreke te stellen. Als de gemeente "+e._s(this.government_name)+' niet binnen vijftien dagen een besluit neemt op uw aanvraag of bezwaarschrift is een dwangsom verschuldigd.\n                                    De hoogte van de dwangsom is: 20,- euro per dag voor de eerste 14 dagen. 30,- euro per dag voor de 14 dagen daarna en 40,- euro per dag voor de 14 dagen daarna. De totale dwangsom bedraagt maximaal ".EURO." 1260,-.'),n("br"),n("br"),e._v('\n                                    De kosten voor het in gebreke stellen bedragen 30 procent van de uit te betalen dwangsom. De beslisapp incasseert de dwangsom bij de gemeente.\n                                    Zeventig procent van de ontvangen dwangsom wordt binnen twee weken na ontvangst overgemaakt op uw rekeningnummer "'+e._s(this.bank_number)+'".\n                                ')])]),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-btn",{staticStyle:{"margin-left":"0"},attrs:{color:"success",outline:2==e.sign_mode},on:{click:function(t){e.selectMode(1)}}},[e._v("HANDTEKENING MET DE MUIS OF VINGER")]),e._v(" "),n("v-btn",{attrs:{color:"success",outline:1==e.sign_mode,loading:this.image_loading},on:{click:function(t){e.selectMode(2)}}},[e._v("UPLOAD EEN AFBEELDING MET UW HANDTEKENING")]),e._v(" "),n("input",{ref:"media",staticStyle:{display:"none"},attrs:{type:"file",name:"media",id:"media"},on:{change:e.previewMedia}})],1),e._v(" "),this.err_msg?n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("label",{staticClass:"error--text"},[e._v(e._s(this.err_msg))])]):e._e(),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[1==e.sign_mode?n("div",{staticStyle:{border:"solid 1px gray",height:"300px"}},[n("VueSignaturePad",{ref:"signaturePad",attrs:{height:"300px"}}),e._v(" "),n("v-btn",{staticStyle:{"margin-left":"0","margin-top":"28px"},attrs:{color:""},on:{click:function(t){e.resetSign()}}},[e._v("HANDTEKENING OPNIEUW PLAATSEN")])],1):e._e(),e._v(" "),2==e.sign_mode?n("div",{staticStyle:{border:"solid 1px gray",height:"300px"}},[2==e.sign_mode?[n("img",{staticClass:"img-responsive",staticStyle:{"max-width":"200px","max-height":"280px"},attrs:{src:e.sign_img}})]:e._e()],2):e._e()])],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-container",[n("v-layout",{attrs:{"justify-end":""}},[n("v-btn",{attrs:{dark:"",color:"primary",outline:""},on:{click:e.onPrev}},[e._v("Terug")]),e._v(" "),n("v-btn",{attrs:{dark:"",color:"primary",loading:this.loading},on:{click:e.onSave}},[e._v("VERZENDEN")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},PnUC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sign_mode:0,sign_img:"",bank_number:"",government_name:"",err_msg:"",loading:!1,image_loading:!1}},created:function(){this.init()},mounted:function(){localStorage.bank_number||localStorage.government_name||this.$router.push({name:"general"}),localStorage.bank_number&&(this.bank_number=localStorage.bank_number),localStorage.government_name&&(this.government_name=localStorage.government_name)},methods:{init:function(){},onPrev:function(){this.$router.push({name:"client"})},previewMedia:function(e){var t=this;if((e.target.files||e.dataTransfer.files).length){var n=new FormData;n.append("mode",2),n.append("media",$("#media")[0].files[0]),this.image_loading=!0,axios.post("/api/fax/uploadSign",n).then(function(e){t.sign_img="/assets/signatures/"+e.data.name,t.image_loading=!1}).catch(function(e){t.image_loading=!1})}},removeImg:function(){this.sign_img=""},resetSign:function(){this.$refs.signaturePad.clearSignature()},selectMode:function(e){this.err_msg="",this.sign_mode=e,2===e&&this.$refs.media.click()},onSave:function(){var e=this;if(1==this.sign_mode){var t=this.$refs.signaturePad.saveSignature(),n=t.isEmpty,a=t.data;if(n)return this.err_msg="Please draw your signature.",!1;var i=new FormData;i.append("mode",this.sign_mode),i.append("sign",a),this.loading=!0,axios.post("/api/fax/publish",i).then(function(t){localStorage.removeItem("bank_number"),localStorage.removeItem("government_name"),"success"==t.data.result?(e.$emit("changeStep",4),e.$router.push({name:"thanks"})):"fail"==t.data.result&&(e.$emit("changeStep",1),e.$router.push({name:"general"})),e.loading=!1}).catch(function(t){e.loading=!1})}else if(2==this.sign_mode){if(""==this.sign_img)return this.err_msg="image not found.",!1;var s=new FormData;s.append("mode",2),s.append("media",$("#media")[0].files[0]),this.loading=!0,axios.post("/api/fax/publish",s).then(function(t){localStorage.removeItem("bank_number"),localStorage.removeItem("government_name"),"success"==t.data.result?(e.$emit("changeStep",4),e.$router.push({name:"thanks"})):"fail"==t.data.result&&(e.$emit("changeStep",1),e.$router.push({name:"general"})),e.loading=!1}).catch(function(t){e.loading=!1})}else this.err_msg="Plaats hier uw handtekening."}}}},svGB:function(e,t,n){var a=n("VU/8")(n("PnUC"),n("1mJ0"),!1,null,null,null);e.exports=a.exports}});