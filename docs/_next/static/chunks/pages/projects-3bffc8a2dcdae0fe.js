(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4478:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(1154)}])},1154:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return C}});var t=n(4051),a=n.n(t),i=n(5893),c=n(3165),o=n(2553),s=n(2658),l=n(9693),u=n(6979),d=n(7501),m=n(9008),f=n(7294),h=n(1614),p=n(7059),_=n.n(p),j=function(e){var r=e.projName,n=e.linkSRC,t=void 0===n?"#":n,a=e.description,o=void 0===a?"Lorem ipsum dolor sit amet, consectetur adipiscing elit In at dui mollis, dignissim elit vel, maximus metus. In est ex, rutrum non nunc at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean feugiat massa vel placerat pharetra.":a,l=e.imgSRC,d=void 0===l?"https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg":l;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h.ZP,{bordered:!0,hoverable:!0,className:_().card,children:(0,i.jsxs)(c.Z,{className:_().card_main,display:"flex",direction:"column",justify:"space-around",children:[(0,i.jsxs)(c.Z,{className:_().card_half1,children:[(0,i.jsx)(c.Z,{className:_().card_title,children:(0,i.jsx)(u.Z,{h2:!0,children:(0,i.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:r})})}),(0,i.jsx)(c.Z,{className:_().card_desc,children:(0,i.jsx)(u.Z,{h5:!0,children:o})})]}),(0,i.jsx)(c.Z,{className:_().card_half2,children:(0,i.jsx)(s.ZP,{className:_().card_img,autoResize:!0,showSkeleton:!0,src:d,loading:"lazy",alt:""})})]})})})},g=n(6829),x=n(8100),v=n(2132);function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function w(e,r,n,t,a,i,c){try{var o=e[i](c),s=o.value}catch(l){return void n(l)}o.done?r(s):Promise.resolve(s).then(t,a)}function P(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return y(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=new g.vd,Z=function(){var e,r=(e=a().mark((function e(r,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){setTimeout((function(){n().then(e).catch(t)}),r)})));case 1:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var i=e.apply(r,n);function c(e){w(i,t,a,c,o,"next",e)}function o(e){w(i,t,a,c,o,"throw",e)}c(void 0)}))});return function(e,n){return r.apply(this,arguments)}}(),C=function(){var e,r,n=(0,x.ZP)({method:"GET",url:"/users/{username}/starred",username:"aer35"},(function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return Z(30,(function(){return(e=b).request.apply(e,P(n))}))}),{errorRetryCount:0}),t=n.data,a=n.error,h=null===t||void 0===t?void 0:t.data;return(0,f.useEffect)((function(){a&&(console.log(a),v.Am.error("Ahhhhhhhh. If this issue persists please hit the contact button and call the dev mean names.",{position:v.Am.POSITION.BOTTOM_RIGHT}))}),[a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.default,{children:(0,i.jsx)("title",{children:"Projects"})}),(0,i.jsx)(c.Z,{className:_().pageContainer,display:"flex",justify:"center",children:(0,i.jsx)(o.ZP.Container,{gap:2,justify:"center",children:h?h.map((function(e){return 13008681===e.owner.id?(0,i.jsx)(o.ZP,{xs:12,sm:4,children:(0,i.jsx)(j,{projName:e.name,description:null!==(r=e.description)&&void 0!==r?r:void 0,linkSRC:e.html_url,imgSRC:"https://socialify.git.ci/".concat(e.full_name,"/image?description=1&font=Source%20Code%20Pro&language=1&owner=1&pattern=Charlie%20Brown&theme=Dark")})},"project-".concat(e.id)):null})):a?(0,i.jsxs)(c.Z,{display:"flex",alignItems:"center",alignContent:"center",direction:"column",children:[(0,i.jsx)(s.ZP,{src:"https://media0.giphy.com/media/RfvBXK1m8Kcdq/giphy.gif?cid=790b761139d63077a4ed796e67df4ec69d56a40764754412&rid=giphy.gif&ct=g",loading:"lazy",alt:""}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(u.Z,{h2:!0,color:"error",children:"Something went wrong. Don't blame me."})]}):(0,i.jsx)(c.Z,{display:"flex",alignItems:"center",justify:"center",children:(0,i.jsx)(d.ZP,{size:"xl",children:"Loading projects from Github.com"})})})})]})}},7059:function(e){e.exports={pageContainer:"Projects_pageContainer__wxzel",card:"Projects_card__ApqBt",card_main:"Projects_card_main__7GjMU",card_half1:"Projects_card_half1__uRXeL",card_title:"Projects_card_title__EWt5b",card_desc:"Projects_card_desc__6323_",card_half2:"Projects_card_half2__m_cB0",card_img:"Projects_card_img__CL1T8"}},5696:function(){}},function(e){e.O(0,[374,12,774,888,179],(function(){return r=4478,e(e.s=r);var r}));var r=e.O();_N_E=r}]);