(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(18),i=n.n(s),u=(n(45),n(3)),o=(n(46),function(e){var t=e.children;return Object(a.jsx)("div",{className:"layout",children:Object(a.jsx)("div",{className:"layout__body",children:t})})}),l=n(4),d=(n(47),n(7)),b=n(2),j=n.n(b),f=n(6),h=n(16),p=n.n(h),m=function(){return Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat("http://frontend-candidate.dev.sdh.com.ua","/v1/contact/"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},x=function(e){return Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("".concat("http://frontend-candidate.dev.sdh.com.ua","/v1/contact/").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},v=function(e,t){return Object(f.a)(j.a.mark((function n(){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.put("".concat("http://frontend-candidate.dev.sdh.com.ua","/v1/contact/").concat(e),t);case 3:return a=n.sent,n.abrupt("return",a);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},O=function(e){return Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.delete("".concat("http://frontend-candidate.dev.sdh.com.ua","/v1/contact/").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},_=function(e){return Object(f.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.post("".concat("http://frontend-candidate.dev.sdh.com.ua","/v1/contact/"),e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},g="error-message/SET-ERROR-MESSAGE",N="error-message/HIDE-ERROR-MESSAGE",k={showError:!1,errorMessage:""},w=function(e){return{type:g,message:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{showError:!0,errorMessage:t.message});case N:return Object(l.a)(Object(l.a)({},e),{},{showError:!1,errorMessage:""});default:return e}},E="contacts-list/SET-CONTACTS-LIST",T={list:[]},V=function(){return function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:200===(n=e.sent).status?t((a=n.data,{type:E,list:a})):t(w(n.toJSON().message));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(l.a)(Object(l.a)({},e),{},{list:t.list});default:return e}},M=(n(71),n(8)),L={male:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430",female:"\u0436\u0435\u043d\u0449\u0438\u043d\u0430"},S=(n(72),function(e){var t=e.iconId,n=e.className;return Object(a.jsx)("svg",{className:n,children:Object(a.jsx)("use",{xlinkHref:"#".concat(t)})})}),q="current-contact/SET-CURRENT-CONTACT",I={id:null,first_name:"",last_name:"",birth_date:null,gender:null,job:"",biography:"",is_active:!1},H=function(e){return{type:q,contact:e}},F=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n,a){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e==a().current_contact.id){t.next=11;break}return t.next=3,x(e);case 3:if(200!==(c=t.sent).status){t.next=9;break}return n(H(c.data)),t.abrupt("return",!1);case 9:return n(w(c.toJSON().message)),t.abrupt("return",!0);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:if(204!==(a=t.sent).status){t.next=8;break}return n(V()),t.abrupt("return",!0);case 8:return n(w(a.toJSON().message)),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(l.a)(Object(l.a)({},e),t.contact);default:return e}},A=function(e){var t=e.id,n=Object(d.b)(),c=Object(u.f)(),r=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(B(t));case 2:if(!e.sent){e.next=4;break}c.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("button",{className:"delete-button",onClick:r,children:Object(a.jsx)(S,{iconId:"delete",className:"delete-button__icon"})})},J=function(e){var t=e.id,n=e.first_name,c=e.last_name,r=e.gender,s=e.birth_date;return Object(a.jsxs)("div",{className:"cl-item",children:[Object(a.jsxs)(M.b,{to:"/contact/".concat(t),className:"cl-item__link",children:[Object(a.jsx)("span",{className:"cl-item__name",children:n}),Object(a.jsx)("span",{className:"cl-item__name",children:c}),Object(a.jsx)("span",{className:"cl-item__description",children:L[r]}),Object(a.jsx)("span",{className:"cl-item__description",children:s})]}),Object(a.jsx)(A,{id:t})]})},R=function(){var e=Object(d.c)((function(e){return e.contact_list.list})),t=Object(d.b)();return Object(c.useEffect)((function(){t(V())}),[]),Object(a.jsxs)("div",{className:"contact-list",children:[Object(a.jsxs)("div",{className:"page-head",children:[Object(a.jsx)("h1",{className:"page-head__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(a.jsx)("div",{className:"page-head__button-row",children:Object(a.jsx)(M.b,{to:"/contact/create",className:"btn",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})})]}),Object(a.jsx)("ul",{className:"contact-list__body",children:e.map((function(e){return Object(a.jsx)("li",{className:"contact-list__item",children:Object(a.jsx)(J,Object(l.a)({},e))},e.id)}))})]})},D=function(){return Object(a.jsx)(o,{children:Object(a.jsx)(R,{})})},Y=(n(74),function(e){var t=e.id,n=Object(d.c)((function(e){return e.current_contact})),r=Object(d.b)(),s=Object(u.f)();return Object(c.useEffect)((function(){(function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(F(t));case 2:if(!e.sent){e.next=4;break}s.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.jsxs)("div",{className:"c-detail",children:[Object(a.jsxs)("div",{className:"page-head",children:[Object(a.jsxs)("h1",{className:"page-head__title",children:[n.first_name," ",n.last_name]}),Object(a.jsx)(S,{iconId:n.is_active?"check":"uncheck",className:"c-detail__status ".concat(n.is_active?"c-detail__status--check":"c-detail__status--uncheck")}),Object(a.jsxs)("div",{className:"page-head__button-row",children:[Object(a.jsx)(M.b,{to:"/contact/".concat(n.id,"/edit"),className:"btn",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(a.jsx)(A,{id:n.id})]})]}),Object(a.jsxs)("div",{className:"c-detail__body",children:[Object(a.jsx)("div",{className:"text",children:n.birth_date}),Object(a.jsx)("div",{className:"text",children:n.job}),Object(a.jsx)("div",{className:"text",children:L[n.gender]}),Object(a.jsx)("div",{className:"text",children:n.biography})]})]})}),G=function(e){var t=e.match;return Object(a.jsxs)(o,{children:[Object(a.jsx)("div",{className:"page-head__nav",children:Object(a.jsx)(M.b,{to:"/",className:"btn btn--outline",children:"\u041a \u0441\u043f\u0438\u0441\u043a\u0443"})}),Object(a.jsx)(Y,{id:t.params.id})]})},U=[{name:"first_name",label:"\u0418\u043c\u044f",initValue:"",type:"text",required:!0,maxLength:256},{name:"last_name",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",initValue:"",type:"text",required:!0,maxLength:256},{name:"birth_date",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",initValue:"",type:"date",required:!0,maxLength:256,format:"YYYY-MM-DD"},{name:"gender",label:"\u041f\u043e\u043b",initValue:"",type:"select",options:[{value:"male",label:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430"},{value:"female",label:"\u0436\u0435\u043d\u0449\u0438\u043d\u0430"}],required:!0},{name:"job",label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0438\u044f",initValue:"",type:"text",required:!0,maxLength:256},{name:"biography",label:"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f",initValue:"",type:"textarea",required:!0,maxLength:1024},{name:"is_active",label:"\u0410\u043a\u0442\u0438\u0432\u0435\u043d",initValue:!1,type:"checkbox",required:!1}],P=function(e,t){return!t.required||null!==(null===e||void 0===e?void 0:e.value)&&0!==(null===e||void 0===e?void 0:e.value.length)?t.maxLength&&(null===e||void 0===e?void 0:e.value.length)>t.maxLength?Object(l.a)(Object(l.a)({},e),{},{isError:!0,errorMessage:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(t.maxLength," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}):Object(l.a)(Object(l.a)({},e),{},{isError:!1,errorMessage:""}):Object(l.a)(Object(l.a)({},e),{},{isError:!0,errorMessage:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"})},K=function(e){var t={};return e.forEach((function(e){t[e.name]=e.value})),t},Q="form-contact/CLEAN_INIT-VALUES",W="form-contact/SET_INIT-VALUES",X="form-contact/CHANGE-FIELD",Z={fields:[]},$=function(){return{type:Q}},ee=function(e){return{type:X,field:e}},te=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n,a){var c,r,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a().current_contact,r={},e!=c.id){t.next=6;break}r=c,t.next=15;break;case 6:return t.next=8,x(e);case 8:if(200!==(s=t.sent).status){t.next=13;break}r=s.data,t.next=15;break;case 13:return n(w(s.toJSON().message)),t.abrupt("return",!0);case 15:n((i=U.map((function(e){return P({name:e.name,value:r[e.name],startValue:r[e.name],isTouch:!1,isError:!1,errorMessage:""},e)})),{type:W,fields:i}));case 16:case"end":return t.stop()}var i}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n,a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().form_contact.fields,t.next=3,v(e,K(c));case 3:if(200!==(r=t.sent).status){t.next=10;break}return n(H(r.data)),n(te(r.data.id)),t.abrupt("return",!0);case 10:return n(w(r.toJSON().message)),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(l.a)(Object(l.a)({},e),{},{fields:U.map((function(e){return P({name:e.name,value:e.initValue,startValue:e.initValue,isTouch:!1,isError:!1,errorMessage:""},e)}))});case W:return Object(l.a)(Object(l.a)({},e),{},{fields:t.fields});case X:return Object(l.a)(Object(l.a)({},e),{},{fields:e.fields.map((function(e){return e.name===t.field.name?t.field:e}))});default:return e}},ce=function(e){var t=e.type,n=e.label,r=e.name,s=e.value,i=e.maxlength,u=e.required,o=e.onChangeValue,l=e.onTouchChange,d=e.onValidate,b=e.isTouch,j=e.isError,f=e.errorMessage;return Object(c.useEffect)((function(){d()}),[s]),Object(a.jsx)("div",{className:"fields-grid__item fields-grid__item--".concat(r),children:Object(a.jsxs)("label",{className:"field",children:[Object(a.jsx)("span",{className:"field__label",children:n}),Object(a.jsx)("input",{type:t,name:r,value:s,maxLength:i,required:u,className:"field__input ".concat(b&&j?"field__input--error":""),onChange:o,onFocus:l,onBlur:d}),b&&j&&Object(a.jsx)("span",{className:"field__error",children:f})]})})},re=function(e){e.type;var t=e.label,n=e.name,r=e.value,s=e.onChangeValue,i=e.required,u=e.onTouchChange,o=e.onValidate,l=e.isTouch,d=e.isError,b=e.errorMessage;return Object(c.useEffect)((function(){o()}),[r]),Object(a.jsx)("div",{className:"fields-grid__item fields-grid__item--".concat(n),children:Object(a.jsxs)("label",{className:"field",children:[Object(a.jsx)("span",{className:"field__label",children:t}),Object(a.jsx)("input",{type:"date",name:n,value:r,required:i,className:"field__input ".concat(l&&d?"field__input--error":""),onChange:s,onFocus:u,onBlur:o}),l&&d&&Object(a.jsx)("span",{className:"field__error",children:b})]})})},se=function(e){e.type;var t=e.label,n=e.name,r=e.options,s=e.value,i=e.required,u=e.onChangeValue,o=e.onTouchChange,l=e.onValidate,d=e.isTouch,b=e.isError,j=e.errorMessage;return Object(c.useEffect)((function(){l()}),[s]),Object(a.jsx)("div",{className:"fields-grid__item fields-grid__item--".concat(n),children:Object(a.jsxs)("label",{className:"field",children:[Object(a.jsx)("span",{className:"field__label",children:t}),Object(a.jsxs)("select",{name:n,required:i,value:s,className:"field__input ".concat(d&&b?"field__input--error":""),onChange:u,onFocus:o,onBlur:l,placeholder:t,defaultValue:"",children:[Object(a.jsx)("option",{value:"",disabled:!0,children:t}),r.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.label},e.value)}))]}),d&&b&&Object(a.jsx)("span",{className:"field__error",children:j})]})})},ie=function(e){e.type;var t=e.label,n=e.name,r=e.value,s=e.maxlength,i=e.required,u=e.onChangeValue,o=e.onTouchChange,l=e.onValidate,d=e.isTouch,b=e.isError,j=e.errorMessage;return Object(c.useEffect)((function(){l()}),[r]),Object(a.jsx)("div",{className:"fields-grid__item fields-grid__item--".concat(n),children:Object(a.jsxs)("label",{className:"field",children:[Object(a.jsx)("span",{className:"field__label",children:t}),Object(a.jsx)("textarea",{name:n,maxLength:s,required:i,value:r,onChange:u,onFocus:o,onBlur:l,className:"field__input field__input--area ".concat(d&&b?"field__input--error":"")}),d&&b&&Object(a.jsx)("span",{className:"field__error",children:j})]})})},ue=function(e){e.type;var t=e.label,n=e.name,r=e.value,s=e.required,i=e.onChangeValue,u=e.onTouchChange,o=e.onValidate,l=e.isTouch,d=e.isError,b=e.errorMessage;return Object(c.useEffect)((function(){o()}),[r]),Object(a.jsx)("div",{className:"fields-grid__item fields-grid__item--".concat(n),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:"field__label",children:t}),Object(a.jsxs)("div",{className:"field-checkbox",children:[Object(a.jsx)("input",{className:"field-checkbox__input",type:"checkbox",name:n,checked:r,value:r,required:s,onChange:function(){return i({target:{value:!r}})},onFocus:u,onBlur:o}),Object(a.jsx)("span",{className:"field-checkbox__icon-box",children:Object(a.jsx)(S,{iconId:r?"check":"uncheck",className:"field-checkbox__icon ".concat(r?"field-checkbox__icon--check":"field-checkbox__icon--uncheck")})}),Object(a.jsx)("span",{className:"field-checkbox__label ".concat(r?"field-checkbox__label--check":"field-checkbox__label--uncheck"),children:t})]}),l&&d&&Object(a.jsx)("span",{className:"field__error",children:b})]})})},oe=(n(75),function(e){return Object(a.jsx)(a.Fragment,{children:function(){switch(e.type){case"text":return Object(a.jsx)(ce,Object(l.a)({},e));case"date":return Object(a.jsx)(re,Object(l.a)({},e));case"select":return Object(a.jsx)(se,Object(l.a)({},e));case"textarea":return Object(a.jsx)(ie,Object(l.a)({},e));case"checkbox":return Object(a.jsx)(ue,Object(l.a)({},e));default:return null}}()})}),le=function(e){var t=!1,n=!1;return e.forEach((function(e){t=t||e.isError,n=n||e.value!==e.startValue})),t||!n},de=(n(76),function(e){var t=e.id,n=e.title,r=e.submit,s=Object(d.c)((function(e){return e.form_contact.fields})),i=Object(d.b)(),o=Object(u.f)();Object(c.useEffect)((function(){(function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,i(te(t));case 3:if(!e.sent){e.next=5;break}o.push("/");case 5:e.next=8;break;case 7:i($());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{onSubmit:function(e){le(s)||r(),e.preventDefault()},children:[Object(a.jsxs)("div",{className:"page-head",children:[Object(a.jsx)("h1",{className:"page-head__title",children:n}),Object(a.jsx)("div",{className:"page-head__button-row",children:Object(a.jsx)("button",{type:"submit",className:"btn",disabled:le(s),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(a.jsx)("div",{className:"fields-grid",children:U.map((function(e,t){var n,c,r,u;return Object(a.jsx)(oe,{name:e.name,label:e.label,type:e.type,required:e.required,maxLength:e.maxLength,options:e.options,value:null===(n=s[t])||void 0===n?void 0:n.value,onChangeValue:function(e){return function(e,t){i(ee(Object(l.a)(Object(l.a)({},t),{},{value:e.target.value})))}(e,s[t])},onTouchChange:function(){return e=s[t],void i(ee(Object(l.a)(Object(l.a)({},e),{},{isTouch:!0})));var e},onValidate:function(){return n=s[t],i(ee(P(n,e)));var n},isTouch:null===(c=s[t])||void 0===c?void 0:c.isTouch,isError:null===(r=s[t])||void 0===r?void 0:r.isError,errorMessage:null===(u=s[t])||void 0===u?void 0:u.errorMessage},e.name)}))})]})})}),be=function(e){var t=e.match,n=Object(d.b)(),c=Object(u.f)(),r=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(ne(t.params.id));case 2:if(!e.sent){e.next=4;break}c.push("/contact/".concat(t.params.id));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(o,{children:[Object(a.jsx)("div",{className:"page-head__nav",children:Object(a.jsx)(M.b,{to:"/contact/".concat(t.params.id),className:"btn btn--outline",children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(a.jsx)(de,{id:t.params.id,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",submit:r})]})},je=function(){var e=Object(d.b)(),t=Object(u.f)(),n=function(){var n=Object(f.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(function(){var e=Object(f.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().form_contact.fields,e.next=3,_(K(a));case 3:if(201!==(c=e.sent).status){e.next=9;break}return t($()),e.abrupt("return",!0);case 9:return t(w(c.toJSON().message)),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 2:if(!n.sent){n.next=4;break}t.push("/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsxs)(o,{children:[Object(a.jsx)("div",{className:"page-head__nav",children:Object(a.jsx)(M.b,{to:"/",className:"btn btn--outline",children:"\u041a \u0441\u043f\u0438\u0441\u043a\u0443"})}),Object(a.jsx)(de,{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",submit:n})]})},fe=function(){return Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:D}),Object(a.jsx)(u.a,{path:"/contact/create",component:je}),Object(a.jsx)(u.a,{exact:!0,path:"/contact/:id",component:G}),Object(a.jsx)(u.a,{exact:!0,path:"/contact/:id/edit",component:be}),"// todo need crate 404 page",Object(a.jsx)(u.a,{component:D})]})},he=n(35),pe=n(36),me=n(39),xe=n(38),ve=(n(77),function(e){Object(me.a)(n,e);var t=Object(xe.a)(n);function n(){return Object(he.a)(this,n),t.apply(this,arguments)}return Object(pe.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:'\n<svg width="0" height="0" class="svg-sprite">\n<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="delete">\n  <path d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>\n </symbol>\n<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check">\n  <path d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>\n</symbol>\n <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="uncheck">\n  <path fill="none" d="M0 0h24v24H0z"></path>\n  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>\n</symbol>\n</svg>'}})}}]),n}(r.a.Component)),Oe=(n(78),function(){var e=Object(d.c)((function(e){return e.error_message})),t=e.showError,n=e.errorMessage,r=Object(d.b)();return Object(c.useEffect)((function(){setTimeout((function(){r({type:N})}),3e3)}),[t]),t?Object(a.jsx)("div",{className:"error-message",children:n}):null});var _e=function(){return Object(a.jsxs)(M.a,{children:[Object(a.jsx)(fe,{}),Object(a.jsx)(ve,{}),Object(a.jsx)(Oe,{})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Ne=n(15),ke=n(37),we=Object(Ne.c)({contact_list:C,current_contact:z,form_contact:ae,error_message:y}),ye=Object(Ne.d)(we,Object(Ne.a)(ke.a));i.a.render(Object(a.jsx)(d.a,{store:ye,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_e,{})})}),document.getElementById("root")),ge()}},[[79,1,2]]]);
//# sourceMappingURL=main.1ab566c5.chunk.js.map