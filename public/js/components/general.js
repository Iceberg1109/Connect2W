webpackJsonp([2],{"1IGq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{valid:!0,alertShow:!1,date:"",menu_request_date:!1,loading:!1,emailloading:!1,weeks:"",days:"",dateNotifyEmail:"",remain_days:"",generalForm:{app_type:"",app_data:"",request_date:"",letter_received:"",subject:"",municipality:""},app_types:["Aanvraag","Bezwaarschrift","Bezwaarschift behandeld door een commissie"],app_data:[{index:1,period:56,value:"Standaard beslistermijn aanvraag (8 weken)"},{index:2,period:56,value:"Wmo voorziening"},{index:3,period:56,value:"Individuele inkomsentoeslag"},{index:4,period:56,value:"Bijstandsuitkering (Participatiewet)"},{index:5,period:56,value:"Bijzondere bijstand (Participatiewet)"},{divider:!0},{index:6,period:56,value:"WIA uitkering (UWV)"},{index:7,period:28,value:"WW uitkering (UWV)"},{index:8,period:28,value:"ZW uitkering (UWV)"},{divider:!0},{index:9,period:35,value:"Belastingdienst - Zorgtoeslag"},{index:10,period:35,value:"Belastingdienst - Huurtoeslag"},{index:11,period:35,value:"Belastingdienst - Kinderopvangtoeslag"},{index:12,period:35,value:"Belastingdienst - Kindgebondenbudget"},{divider:!0},{index:13,period:56,value:"Omgevingsvergunning (eenvoudige aanvraag)"},{index:14,period:56,value:"Schuldhulpverlening"}],title_request_date:"Kies de datum van uw aanvraag:",municipalities:[],municipality:{},municipality_items:[],errorSnackbar:!1,successSnackbar:!1,err_msg:"",success_msg:"",dialog:!1,err_dialog_content:"",dateValidationMessage:"",dateEmailNotification:"",appRules:[function(e){return!!e||"Dit is een verplicht veld."}],appDataRules:[function(e){return!!e||"Dit is een verplicht veld."}],municipalityRules:[function(e){return!!e||"Dit is een verplicht veld."}],letterRules:[function(e){return!!e||"Dit is een verplicht veld."}]}},computed:{dateRules:function(){var e=new Date,t=[];if(t.push(function(e){return!!e||"Dit is een verplicht veld."}),this.generalForm.app_type&&Object.keys(this.generalForm.app_data).length){var a,i=this.generalForm.request_date,n=i.substring(6,10)+"-"+i.substring(3,5)+"-"+i.substring(0,2),r=new Date(n),s=0;s=this.weeks?+this.generalForm.app_data.period+7*this.weeks:this.days?+this.generalForm.app_data.period+ +this.days:this.generalForm.app_data.period,(a=Math.ceil((e-r)/864e5))<=s?(this.remain_days=+s-+a+1,this.dateValidationMessage="De beslistermijn is nog niet verstreken. Over "+this.remain_days+" dagen is de beslistermijn wel verstreken en kunt u de gemeente in gebreke stellen.",this.dateEmailNotification="Vul uw emailadres in als u over "+this.remain_days+" dagen een herinnering wilt ontvangen: "):(this.dateValidationMessage="",this.dateEmailNotification="")}return t}},created:function(){this.init()},watch:{date:function(e,t){this.generalForm.request_date=this.gettanggal(e)}},methods:{init:function(){var e=this;this.$route.params.token?axios.get("/api/fax/general/token/"+this.$route.params.token).then(function(t){"fail"===t.data.status&&(e.errorSnackbar=!0,e.err_msg=t.data.message),"block"===t.data.result&&(e.dialog=!0,e.err_dialog_content=t.data.message),t.data.app_type&&(e.generalForm.app_type=t.data.app_type,e.selectAppType()),t.data.app_data&&(e.generalForm.app_data=parseInt(t.data.app_data),e.setAppData()),t.data.request_date&&(e.generalForm.request_date=t.data.request_date),t.data.letter_received&&(e.generalForm.letter_received=t.data.letter_received),t.data.subject&&(e.generalForm.subject=t.data.subject),t.data.municipality&&(e.generalForm.municipality=t.data.municipality),t.data.municipalities.municipalities&&(e.municipalities=t.data.municipalities.municipalities);var a=void 0;for(a=0;a<e.municipalities.length;a++)e.municipality_items.push(e.municipalities[a].name);e.getMunicipality()}).catch(function(e){console.log("error")}):axios.get("/api/fax/general/get").then(function(t){"block"===t.data.result&&(e.dialog=!0,e.err_dialog_content=t.data.message),t.data.app_type&&(e.generalForm.app_type=t.data.app_type,e.selectAppType()),t.data.app_data&&(e.generalForm.app_data=parseInt(t.data.app_data),e.setAppData()),t.data.request_date&&(e.generalForm.request_date=t.data.request_date),t.data.letter_received&&(e.generalForm.letter_received=t.data.letter_received),t.data.subject&&(e.generalForm.subject=t.data.subject),t.data.municipality&&(e.generalForm.municipality=t.data.municipality),t.data.municipalities.municipalities&&(e.municipalities=t.data.municipalities.municipalities);var a=void 0;for(a=0;a<e.municipalities.length;a++)e.municipality_items.push(e.municipalities[a].name);e.getMunicipality()}).catch(function(e){console.log("error")})},onSave:function(){var e=this;if(this.$refs.form.validate()&&!this.dateValidationMessage&&!this.err_dialog_content){var t=new FormData;t.append("app_type",this.generalForm.app_type),t.append("app_data",this.generalForm.app_data.index),t.append("request_date",this.generalForm.request_date),t.append("letter_received",this.generalForm.letter_received),t.append("subject",this.generalForm.subject),t.append("municipality",this.generalForm.municipality),this.loading=!0,axios.post("/api/fax/general/save",t).then(function(t){e.$emit("changeStep",2),localStorage.setItem("government_name",e.generalForm.municipality),e.$router.push({name:"client"}),e.loading=!1}).catch(function(t){e.loading=!1})}},onEmailSubmit:function(){var e=this;if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.dateNotifyEmail)){this.loading=!0;var t=new FormData;t.append("notify_email",this.dateNotifyEmail),t.append("days",this.remain_days),axios.post("/api/fax/general/savenotifyemail",t).then(function(t){e.loading=!1,"success"===t.data.result?(e.successSnackbar=!0,e.success_msg=t.data.message):(e.errorSnackbar=!0,e.err_msg=t.data.message)}).catch(function(t){e.loading=!1,e.errorSnackbar=!0,e.err_msg="Er is helaas een fout opgetreden. Neem contact op met de Beslisapp voor een oplossing."})}else this.errorSnackbar=!0,this.err_msg="Vul hier een geldig emailadres in."},showAlert:function(e){1==e?this.alertShow=!0:0==e&&(this.alertShow=!1)},selectAppType:function(){this.generalForm.app_data="","Aanvraag"===this.generalForm.app_type?(this.title_request_date="Kies de datum van uw aanvraag:",this.app_data=[{index:1,period:56,value:"Standaard beslistermijn aanvraag (8 weken)"},{index:2,period:56,value:"Wmo voorziening"},{index:3,period:56,value:"Individuele inkomsentoeslag"},{index:4,period:56,value:"Bijstandsuitkering (Participatiewet)"},{index:5,period:56,value:"Bijzondere bijstand (Participatiewet)"},{divider:!0},{index:6,period:56,value:"WIA uitkering (UWV)"},{index:7,period:28,value:"WW uitkering (UWV)"},{index:8,period:28,value:"ZW uitkering (UWV)"},{divider:!0},{index:9,period:35,value:"Belastingdienst - Zorgtoeslag"},{index:10,period:35,value:"Belastingdienst - Huurtoeslag"},{index:11,period:35,value:"Belastingdienst - Kinderopvangtoeslag"},{index:12,period:35,value:"Belastingdienst - Kindgebondenbudget"},{divider:!0},{index:13,period:56,value:"Omgevingsvergunning (eenvoudige aanvraag)"},{index:14,period:56,value:"Schuldhulpverlening"}]):"Bezwaarschrift"===this.generalForm.app_type?(this.title_request_date="Op welke datum is op uw aanvraag beslist:",this.app_data=[{index:1,period:84,value:"Standaard beslistermijn bezwaar (12 weken)"},{index:2,period:84,value:"Wmo voorziening"},{index:3,period:84,value:"Individuele inkomsentoeslag"},{index:4,period:84,value:"Bijstandsuitkering (Participatiewet)"},{index:5,period:84,value:"Bijzondere bijstand (Participatiewet)"},{divider:!0},{index:6,period:84,value:"WIA uitkering (UWV)"},{index:7,period:91,value:"WW uitkering (UWV)"},{index:8,period:91,value:"ZW bezwaar tegen hoogte dagloon (UWV)"},{index:9,period:119,value:"ZW met medisch onderzoek (UWV)"},{divider:!0},{index:10,period:84,value:"Belastingdienst - Zorgtoeslag"},{index:11,period:84,value:"Belastingdienst - Huurtoeslag"},{index:12,period:84,value:"Belastingdienst - Kinderopvangtoeslag"},{index:13,period:84,value:"Belastingdienst - Kindgebondenbudget"}]):(this.title_request_date="Op welke datum is op uw aanvraag beslist:",this.app_data=[{index:1,period:126,value:"Standaard beslistermijn bezwaar commissie (18 weken)"}])},setAppData:function(){var e=this.generalForm.app_data,t=this.app_data.filter(function(t){return t.index==e});this.generalForm.app_data=t[0]},selectAppData:function(){var e=this.generalForm.app_data;if(-1!==e.value.toLowerCase().indexOf("belastingdienst")){var t=this.municipalities.filter(function(e){return-1!==e.name.toLowerCase().indexOf("belastingdienst")});this.municipality_items=[],this.municipality_items=t.map(function(e){return e.name}),this.municipality="",this.generalForm.municipality=""}else if(-1!==e.value.indexOf("UWV")){var a=this.municipalities.filter(function(e){return-1!==e.name.indexOf("UWV")});this.municipality_items=[],this.municipality_items=a.map(function(e){return e.name}),this.municipality="",this.generalForm.municipality=""}else{var i=void 0;for(this.municipality_items=[],this.municipality="",this.generalForm.municipality="",i=0;i<this.municipalities.length;i++)this.municipality_items.push(this.municipalities[i].name)}},getMunicipality:function(){var e=this.generalForm.municipality,t=this.municipalities.filter(function(t){return t.name==e});this.municipality=t[0]},gettanggal:function(e){return null!=e?e.substring(8,10)+"-"+e.substring(5,7)+"-"+e.substring(0,4):""},changeWeekandDays:function(e){"weeks"===e.target.id?e.keyCode<=47||e.keyCode>=58?e.preventDefault():this.days="":e.keyCode<=47||e.keyCode>=58?e.preventDefault():this.weeks=""}}}},"5rQc":function(e,t,a){var i=a("VU/8")(a("1IGq"),a("mRhj"),!1,null,null,null);e.exports=i.exports},mRhj:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("v-container",{attrs:{"justify-center":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("v-container",[a("span",{staticClass:"headline"},[e._v("ALGEMENE INFORMATIE")])])],1),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("* Gaat het om een aanvraag of bezwaarschrift?")]),e._v(" "),a("v-autocomplete",{attrs:{items:e.app_types,"persistent-hint":"","return-object":"",rules:e.appRules},on:{change:function(t){e.selectAppType()}},model:{value:e.generalForm.app_type,callback:function(t){e.$set(e.generalForm,"app_type",t)},expression:"generalForm.app_type"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("* Kies hier wat er is aangevraagd?")]),e._v(" "),a("v-autocomplete",{attrs:{items:e.app_data,"item-text":"value","item-value":"index","persistent-hint":"","return-object":"",rules:e.appDataRules},on:{change:function(t){e.selectAppData()}},model:{value:e.generalForm.app_data,callback:function(t){e.$set(e.generalForm,"app_data",t)},expression:"generalForm.app_data"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("* "+e._s(this.title_request_date))]),e._v(" "),a("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menu_request_date,callback:function(t){e.menu_request_date=t},expression:"menu_request_date"}},[a("v-text-field",{attrs:{slot:"activator","prepend-icon":"event",rules:e.dateRules},slot:"activator",model:{value:e.generalForm.request_date,callback:function(t){e.$set(e.generalForm,"request_date",t)},expression:"generalForm.request_date"}}),e._v(" "),a("v-date-picker",{on:{input:function(t){e.menu_request_date=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),this.dateValidationMessage?a("v-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{value:!0,color:"error",outline:""}},[e._v("\n                                        "+e._s(this.dateValidationMessage)+"\n                                    ")]):e._e(),e._v(" "),this.dateEmailNotification?a("v-flex",{staticStyle:{"font-size":"14px",padding:"16px","background-color":"#2196f3",color:"white","margin-bottom":"16px"},attrs:{xs12:"",sm12:"",md12:""}},[e._v("\n                                        "+e._s(this.dateEmailNotification)+"\n                                          \n                                        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dateNotifyEmail,expression:"dateNotifyEmail"}],attrs:{id:"dateNotifyEmail",type:"email",placeholder:"Uw emailadres"},domProps:{value:e.dateNotifyEmail},on:{input:function(t){t.target.composing||(e.dateNotifyEmail=t.target.value)}}}),e._v(" "),a("v-btn",{staticStyle:{"font-size":"14px",margin:"0px 10px",width:"200px",height:"30px",color:"#2196f3","background-color":"white"},attrs:{loading:this.emailloading},on:{click:e.onEmailSubmit}},[e._v("VERZENDEN")])],1):e._e()],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("* Heeft u een brief ontvangen dat er later wordt belist?")]),e._v(" "),a("v-radio-group",{attrs:{row:"",rules:e.letterRules},model:{value:e.generalForm.letter_received,callback:function(t){e.$set(e.generalForm,"letter_received",t)},expression:"generalForm.letter_received"}},[a("v-radio",{attrs:{label:"Ja",value:"yes"},on:{change:function(t){e.showAlert(1)}}}),e._v(" "),a("v-radio",{attrs:{label:"Nee",value:"no"},on:{change:function(t){e.showAlert(0)}}})],1),e._v(" "),1==e.alertShow?a("v-flex",{staticStyle:{"font-size":"14px",padding:"16px","background-color":"#2196f3",color:"white","margin-bottom":"16px"},attrs:{xs12:"",sm12:"",md12:""}},[e._v("\n                                        Vul het aantal weken in dat later wordt beslist (de verdaging) :\n                                         \n                                        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.weeks,expression:"weeks"}],attrs:{id:"weeks"},domProps:{value:e.weeks},on:{keypress:e.changeWeekandDays,input:function(t){t.target.composing||(e.weeks=t.target.value)}}}),e._v("\n                                        weken.\n                                            \n                                        Of vul het aantal dagen in dat later wordt beslist:\n                                         \n                                        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.days,expression:"days"}],attrs:{id:"days"},domProps:{value:e.days},on:{keypress:e.changeWeekandDays,input:function(t){t.target.composing||(e.days=t.target.value)}}}),e._v("\n                                        dagen.\n                                    ")]):e._e()],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("Wat is het kenmerk van uw aanvraag / of bezwaarschrift?")]),e._v(" "),a("v-text-field",{model:{value:e.generalForm.subject,callback:function(t){e.$set(e.generalForm,"subject",t)},expression:"generalForm.subject"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("h3",[e._v("* Selecteer hieronder de gemeente:")]),e._v(" "),a("v-autocomplete",{attrs:{items:e.municipality_items,"persistent-hint":"",rules:e.municipalityRules},on:{change:function(t){e.getMunicipality()}},model:{value:e.generalForm.municipality,callback:function(t){e.$set(e.generalForm,"municipality",t)},expression:"generalForm.municipality"}})],1),e._v(" "),e.municipality?a("div",[e._v("\n\t\t\t\t\t\t\t\t\tFaxnumber: "+e._s(this.municipality.faxnumber)),a("br"),e._v("\n\t\t\t\t\t\t\t\t\tEmailadres: "+e._s(this.municipality.email)),a("br"),e._v("\n\t\t\t\t\t\t\t\t\tAddress: "+e._s(this.municipality.address)+", "+e._s(this.municipality.postal)+", "+e._s(this.municipality.city)+"\n\t\t\t\t\t\t\t\t")]):e._e()],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-container",[a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{dark:"",color:"primary",loading:this.loading},on:{click:e.onSave}},[e._v("VOLGENDE")])],1)],1)],1)],1)],1),e._v(" "),a("v-snackbar",{attrs:{color:"red lighten-2",timeout:12e3,bottom:!0,"multi-line":!0},model:{value:e.errorSnackbar,callback:function(t){e.errorSnackbar=t},expression:"errorSnackbar"}},[e._v("\n                "+e._s(e.err_msg)+"\n                "),a("v-btn",{attrs:{color:"lightgrey",flat:""},on:{click:function(t){e.errorSnackbar=!1}}},[e._v("\n                    SLUITEN\n                ")])],1),e._v(" "),a("v-snackbar",{attrs:{color:"green lighten-2",timeout:12e3,bottom:!0,"multi-line":!0},model:{value:e.successSnackbar,callback:function(t){e.successSnackbar=t},expression:"successSnackbar"}},[e._v("\n                "+e._s(e.success_msg)+"\n                "),a("v-btn",{attrs:{color:"lightgrey",flat:""},on:{click:function(t){e.successSnackbar=!1}}},[e._v("\n                    SLUITEN\n                ")])],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Systeem bericht")]),e._v(" "),a("v-card-text",{domProps:{innerHTML:e._s(e.err_dialog_content)}}),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.dialog=!1}}},[e._v("\n                            OK\n                        ")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});