(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return $}});var a=r(8947),n=r(5697),o=r.n(n),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var b=["style"];function x(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=m(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{})}var h=!1;try{h=!0}catch(w){}function g(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:a.Qc.icon?a.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var y=["forwardedRef"];function $(e){var t=e.forwardedRef,r=d(e,y),n=r.icon,o=r.mask,i=r.symbol,s=r.className,c=r.title,p=r.titleId,m=r.maskId,b=g(n),x=v("classes",[].concat(f(function(e){var t,r=e.beat,a=e.fade,n=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,d=e.spinReverse,f=e.pulse,p=e.fixedWidth,m=e.inverse,b=e.border,x=e.listItem,h=e.flip,g=e.size,v=e.rotation,y=e.pull,$=(u(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":m,"fa-border":b,"fa-li":x,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(g),"undefined"!==typeof g&&null!==g),u(t,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),u(t,"fa-pull-".concat(y),"undefined"!==typeof y&&null!==y),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys($).map((function(e){return $[e]?e:null})).filter((function(e){return e}))}(r)),f(s.split(" ")))),w=v("transform","string"===typeof r.transform?a.Qc.transform(r.transform):r.transform),k=v("mask",g(o)),O=(0,a.qv)(b,l(l(l(l({},x),w),k),{},{symbol:i,title:c,titleId:p,maskId:m}));if(!O)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var z=O.abstract,S={ref:t};return Object.keys(r).forEach((function(e){$.defaultProps.hasOwnProperty(e)||(S[e]=r[e])})),j(z[0],S)}$.displayName="FontAwesomeIcon",$.propTypes={beat:o().bool,border:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},$.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=x(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[m(t)]=a}return e}),{attrs:{}}),i=a.style,s=void 0===i?{}:i,c=d(a,b);return o.attrs.style=l(l({},o.attrs.style),s),t.apply(void 0,[r.tag,l(l({},o.attrs),c)].concat(f(n)))}.bind(null,i.createElement)},3165:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7294);var n=(0,r(275).zo)("div",{w:"100%",mr:"auto",ml:"auto",variants:{fluid:{true:{maxWidth:"100%"}},responsive:{true:{"@xs":{maxWidth:"$breakpoints$xs"},"@sm":{maxWidth:"$breakpoints$sm"},"@md":{maxWidth:"$breakpoints$md"},"@lg":{maxWidth:"$breakpoints$lg"},"@xl":{maxWidth:"$breakpoints$xl"}}}},defaultVariants:{fluid:!1,responsive:!0}}),o=r(5893);const i=({xs:e,sm:t,md:r,lg:i,xl:s,wrap:l,gap:c,as:u,display:d,justify:f,direction:p,alignItems:m,alignContent:b,children:x,responsive:h,fluid:g,css:v,...y})=>{const $=(0,a.useMemo)((()=>`calc(${c} * $space$sm)`),[c]);return(0,o.jsx)(n,{css:{px:$,maxWidth:e?"$breakpoints$xs":t?"$breakpoints$sm":r?"$breakpoints$md":i?"$breakpoints$lg":s?"$breakpoints$xl":"",alignItems:m,alignContent:b,flexWrap:l,display:d,justifyContent:f,flexDirection:p,...v},responsive:h,fluid:g,...y,children:x})};i.toString=()=>".nextui-container",i.defaultProps={gap:2,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,responsive:!0,fluid:!1,wrap:"wrap",as:"div",display:"block"};var s=a.memo(i)},9693:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(88);const o=e=>`calc(${15.25*e}pt + 1px * ${e-1})`;const i=(0,r(275).zo)("span",{size:"1px",variants:{inline:{true:{display:"inline-block"},false:{display:"block"}}},defaultVariants:{inline:!1}});var s=r(5893);const l=({x:e,y:t,inline:r,css:a,...n})=>{const l=o(e),c=o(t);return(0,s.jsx)(i,{css:{marginLeft:`${l} !important`,marginTop:`${c} !important`,...a},"aria-hidden":"true",...n})};l.toString=()=>".nextui-spacer";const c=a.memo(l);var u=(0,n.Z)(c,{x:1,y:1})},6979:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),n=r(88),o=r(3917);const i=(0,r(275).zo)("p",{variants:{weight:{hairline:{fontWeight:"$hairline"},thin:{fontWeight:"$thin"},light:{fontWeight:"$light"},normal:{fontWeight:"$normal"},medium:{fontWeight:"$medium"},semibold:{fontWeight:"$semibold"},bold:{fontWeight:"$bold"},extrabold:{fontWeight:"$extrabold"},black:{fontWeight:"$black"}}}});var s=r(5893);const l=({children:e,tag:t,color:r,transform:n,margin:l,size:c,css:u,...d})=>{const f=(0,a.useMemo)((()=>(0,o.h1)(r)?"default"===r?"$text":`$${r}`:r),[r]),p=(0,a.useMemo)((()=>c?"number"==typeof c?`${c}px`:c:"inherit"),[c]),m=(0,a.useMemo)((()=>l?"number"==typeof l?`${c}px`:l:"inherit"),[l]);return(0,s.jsx)(i,{as:t,css:{color:f,fontSize:c?p:"",margin:m,tt:n,...u},...d,children:e})};l.toString=()=>".nextui-text-child";const c=a.memo(l);var u=(0,n.Z)(c,{color:"default"});const d=(e,t,r,a)=>{if(!e.length)return t;const n=e.slice(1,e.length);return(0,s.jsx)(u,{tag:e[0],size:r,transform:a,children:d(n,t,r)})},f=({h1:e,h2:t,h3:r,h4:n,h5:o,h6:i,b:l,small:c,i:f,span:p,del:m,em:b,blockquote:x,transform:h,size:g,margin:v,children:y,...$})=>{const j={h1:e,h2:t,h3:r,h4:n,h5:o,h6:i,blockquote:x},w={span:p,small:c,b:l,em:b,i:f,del:m},k=Object.keys(j).filter((e=>j[e])),O=Object.keys(w).filter((e=>w[e])),z=(0,a.useMemo)((()=>k[0]?k[0]:O[0]?O[0]:"p"),[k,O]),S=O.filter((e=>e!==z)),_=(0,a.useMemo)((()=>S.length?d(S,y,g,h):y),[S,y,g,h]);return(0,s.jsx)(u,{transform:h,tag:z,margin:v,size:g,...$,children:_})};f.toString=()=>".nextui-text";const p=a.memo(f);var m=(0,n.Z)(p,{h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,b:!1,small:!1,transform:"none",i:!1,span:!1,del:!1,em:!1,blockquote:!1,color:"default"})},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8623)}])},8623:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var a=r(5893),n=r(3165),o=r(9008),i=r(7294),s=r(275);var l=(0,s.zo)("span",{dflex:"center",position:"relative",zIndex:"$1",boxSizing:"border-box",overflow:"hidden",verticalAlign:"top",cursor:"auto",".nextui-avatar-bg":{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:"$2",transition:"$avatar",size:"100%"},"&:hover .nextui-avatar-bg":{boxShadow:" inset 0 0 40px 0 rgb(0 0 0 / 14%)"},".nextui-avatar-img":{opacity:0,zIndex:"$3",display:"flex",bg:"$background",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms",width:"100%",height:"100%",objectFit:"cover"},'&[data-state="ready"] .nextui-avatar-img':{opacity:1},".nextui-avatar-icon":{display:"flex",position:"absolute",left:"50%",top:"50%",ta:"center",zIndex:"$2",transform:"translate(-50%, -50%)",whiteSpace:"nowrap",us:"none"},".nextui-avatar-text":{position:"absolute",zIndex:"$2",left:"50%",top:"50%",ta:"center",color:"$text",fontWeight:"$medium",transform:"translate(-50%, -50%) scale(0.65)",whiteSpace:"nowrap",us:"none"},"@motion":{".nextui-avatar-bg, .nextui-avatar-img":{transition:"none"}},variants:{color:{default:{".nextui-avatar-bg":{bg:"$accents2"}},primary:{".nextui-avatar-bg":{bg:"$primary"}},secondary:{".nextui-avatar-bg":{bg:"$secondary"}},success:{".nextui-avatar-bg":{bg:"$success"}},warning:{".nextui-avatar-bg":{bg:"$warning"}},error:{".nextui-avatar-bg":{bg:"$error"}},gradient:{".nextui-avatar-bg":{bg:"$gradient"}}},textColor:{default:{".nextui-avatar-text":{color:"$text"}},white:{".nextui-avatar-text":{color:"$white"}},primary:{".nextui-avatar-text":{color:"$primary"}},secondary:{".nextui-avatar-text":{color:"$secondary"}},success:{".nextui-avatar-text":{color:"$success"}},warning:{".nextui-avatar-text":{color:"$warning"}},error:{".nextui-avatar-text":{color:"$error"}}},size:{xs:{$$avatarXs:"$space$9",sizeMin:"$$avatarXs",".nextui-avatar-text":{fontSize:"$xs"}},sm:{$$avatarSm:"$space$11",sizeMin:"$$avatarSm",".nextui-avatar-text":{fontSize:"$base"}},md:{$$avatarMd:"$space$14",sizeMin:"$$avatarMd",".nextui-avatar-text":{fontSize:"$sm"}},lg:{$$avatarLg:"$space$16",sizeMin:"$$avatarLg",".nextui-avatar-text":{fontSize:"$sm"}},xl:{$$avatarXl:"$space$18",sizeMin:"$$avatarXl",".nextui-avatar-text":{fontSize:"$md"}}},borderWeight:{light:{".nextui-avatar-img":{borderWidth:"$light"}},normal:{".nextui-avatar-img":{borderWidth:"$normal"}},bold:{".nextui-avatar-img":{borderWidth:"$normal"}},extrabold:{".nextui-avatar-img":{borderWidth:"$normal"}},black:{".nextui-avatar-img":{borderWidth:"$normal"}}},bordered:{true:{"&:hover:not(.only-text-avatar) .nextui-avatar-bg":{opacity:"0.6"},".nextui-avatar-img":{borderStyle:"solid",borderColor:"$background"}}},stacked:{true:{ml:"-$5"}},pointer:{true:{cursor:"pointer"}},rounded:{true:{borderRadius:"$rounded",".nextui-avatar-img":{borderRadius:"$rounded"}}},squared:{true:{borderRadius:"$squared",".nextui-avatar-img":{borderRadius:"$squared"}}},zoomed:{true:{"&:hover .nextui-avatar-img":{transform:"scale(1.125)"}}}},compoundVariants:[{bordered:!0,borderWeight:"light",css:{padding:"calc($1/2)"}},{bordered:!0,borderWeight:"normal",css:{padding:"$1"}},{bordered:!0,borderWeight:"bold",css:{padding:"calc($2/1.5)"}},{bordered:!0,borderWeight:"extrabold",css:{padding:"$2"}},{bordered:!0,borderWeight:"black",css:{padding:"calc($3/1.5)"}},{rounded:!0,squared:!0,css:{borderRadius:"$squared",".nextui-avatar-img":{borderRadius:"$squared"}}}],defaultVariants:{size:"md",rounded:!0,color:"default",textColor:"default",borderWeight:"normal"}}),c=r(1309);const u=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),d=({src:e,text:t,icon:r,alt:n,className:o,...s})=>{const d=!e,[f,p]=(0,i.useState)(!1),m=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;(null==m||null==(e=m.current)?void 0:e.complete)&&p(!0)}),[]);const b=(0,i.useMemo)((()=>!f&&e?"loading":"ready"),[e,f]);return(0,a.jsxs)(l,{className:(0,c.Z)({"only-text-avatar":d},o),"data-state":b,...s,children:[(0,a.jsx)("span",{className:"nextui-avatar-bg"}),!d&&(0,a.jsx)("img",{ref:m,className:(0,c.Z)("nextui-avatar-img",`nextui-avatar--${b}`,{"nextui-avatar-ready":f}),src:e,alt:n,"data-state":b,onLoad:()=>p(!0)}),d&&!r&&t&&(0,a.jsx)("span",{className:"nextui-avatar-text",children:u(t)}),r&&(0,a.jsx)("span",{className:"nextui-avatar-icon",children:r})]})};d.toString=()=>".nextui-avatar";var f=d;const p=(0,s.zo)("span",{fontSize:"$xs",display:"inline-flex",alignItems:"center",marginLeft:"$3",color:"$text"});var m=(0,s.zo)("div",{dflex:"center",height:"auto",width:"max-content","@motion":{transition:"none"},[`& ${l}`]:{marginLeft:"-$space$5",transition:"$default",".only-text-avatar":{boxShadow:"$xs"}},".only-text-avatar":{boxShadow:"$xs"},variants:{animated:{true:{[`& ${l}:hover`]:{transform:"translate(-$space$5)"}}}},defaultVariants:{animated:!0}});const b=({count:e,children:t,...r})=>(0,a.jsxs)(m,{...r,children:[t,e&&(0,a.jsxs)(p,{className:"nextui-avatar-group-count",children:["+",e]})]});b.toString=()=>".nextui-avatar-group";var x=b;f.Group=x;var h=f,g=r(9693),v=r(6979),y=r(7814),$=r(1417),j=r(3020),w=r.n(j),k=function(){return(0,a.jsxs)(n.Z,{className:w().aboutMe,display:"flex",justify:"center",direction:"column",alignItems:"center",alignContent:"center",children:[(0,a.jsx)(h,{className:w().avatar,src:"images/AM_Pic_3.png",css:{size:"$72"},zoomed:!0}),(0,a.jsx)(g.Z,{}),(0,a.jsx)(v.Z,{h1:!0,css:{textGradient:"30deg, var(--primary) -20%, $red500 150%"},weight:"extrabold",children:"Aaron Mechanic"}),(0,a.jsx)(v.Z,{h3:!0,children:"B.S. Computer Science - CUNY Queens college 2021"}),(0,a.jsx)(g.Z,{}),(0,a.jsx)(n.Z,{className:w().bio,children:(0,a.jsxs)(v.Z,{children:["Hi! I","'","m Aaron, a software engineer from in New York City and I","'","ve been a computer fanatic my whole life. I fell in love with computers ever since my first, an iMac G3. I decided to become a programmer because I love identifying and solving complex problems, and I love learning new things. Every week 300000 new Javascript frameworks are released and I learn them all. Haha just kidding. Recently I","'","ve been working a lot with React Typescript, Next.JS, Node, and Swift."]})}),(0,a.jsx)(g.Z,{y:2}),(0,a.jsxs)(n.Z,{className:w().social_links,display:"flex",justify:"space-evenly",alignItems:"center",alignContent:"center",children:[(0,a.jsx)("a",{href:"https://github.com/aer35",target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(y.G,{size:"4x",icon:$.zhw})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/aaronmechanic/",target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(y.G,{size:"4x",icon:$.D9H})}),(0,a.jsx)("a",{href:"https://angel.co/u/aaron-mechanic",target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(y.G,{size:"4x",icon:$.dFc})})]})]})},O=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"Home"})}),(0,a.jsx)(n.Z,{style:{minHeight:"80vh"},children:(0,a.jsx)(k,{})})]})}},3020:function(e){e.exports={aboutMe:"About_aboutMe__UF5s6",avatar:"About_avatar__IP4nt",social_links:"About_social_links__KDXAX",bio:"About_bio__DA07_"}},2703:function(e,t,r){"use strict";var a=r(414);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[112,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);