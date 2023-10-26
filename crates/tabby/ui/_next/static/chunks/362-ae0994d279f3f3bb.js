"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{45362:function(e,t,r){r.d(t,{Z:function(){return er}});var n,i,a=r(2265),u=r(26272);let l=()=>{},o=l(),s=Object,d=e=>e===o,c=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),g=e=>c(e.then),E=new WeakMap,h=0,w=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(s(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=E.get(e))return t;if(t=++h+"~",E.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=w(e[r])+",";E.set(e,t)}if(i==s){t="#";let n=s.keys(e).sort();for(;!d(r=n.pop());)d(e[r])||(t+=r+":"+w(e[r])+",");E.set(e,t)}}return t},_=new WeakMap,p={},v={},R="undefined",y=typeof window!=R,T=typeof document!=R,m=()=>y&&typeof window.requestAnimationFrame!=R,b=(e,t)=>{let r=_.get(e);return[()=>!d(t)&&e.get(t)||p,n=>{if(!d(t)){let i=e.get(t);t in v||(v[t]=i),r[5](t,f(i,n),i||p)}},r[6],()=>!d(t)&&t in v?v[t]:!d(t)&&e.get(t)||p]},O=!0,[V,S]=y&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[l,l],L={initFocus:e=>(T&&document.addEventListener("visibilitychange",e),V("focus",e),()=>{T&&document.removeEventListener("visibilitychange",e),S("focus",e)}),initReconnect:e=>{let t=()=>{O=!0,e()},r=()=>{O=!1};return V("online",t),V("offline",r),()=>{S("online",t),S("offline",r)}}},k=!a.useId,C=!y||"Deno"in window,N=e=>m()?window.requestAnimationFrame(e):setTimeout(e,1),D=C?a.useEffect:a.useLayoutEffect,A="undefined"!=typeof navigator&&navigator.connection,I=!C&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),F=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"",t]},M=0,P=()=>++M;var x={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function U(...e){let[t,r,n,i]=e,a=f({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,l=a.rollbackOnError,s=a.optimisticData,E=!1!==a.revalidate,h=e=>"function"==typeof l?l(e):!1!==l,w=a.throwOnError;if(c(r)){let e=[],n=t.keys();for(let i of n)!/^\$(inf|sub)\$/.test(i)&&r(t.get(i)._k)&&e.push(i);return Promise.all(e.map(p))}return p(r);async function p(r){let i;let[a]=F(r);if(!a)return;let[l,f]=b(t,a),[p,v,R,y]=_.get(t),T=()=>{let e=p[a];return E&&(delete R[a],delete y[a],e&&e[0])?e[0](2).then(()=>l().data):l().data};if(e.length<3)return T();let m=n,O=P();v[a]=[O,0];let V=!d(s),S=l(),L=S.data,k=S._c,C=d(k)?L:k;if(V&&f({data:s=c(s)?s(C,L):s,_c:C}),c(m))try{m=m(C)}catch(e){i=e}if(m&&g(m)){if(m=await m.catch(e=>{i=e}),O!==v[a][0]){if(i)throw i;return m}i&&V&&h(i)&&(u=!0,f({data:C,_c:o}))}if(u&&!i){if(c(u)){let e=u(m,C);f({data:e,error:o,_c:o})}else f({data:m,error:o,_c:o})}if(v[a][1]=P(),Promise.resolve(T()).then(()=>{f({_c:o})}),i){if(w)throw i;return}return m}}let W=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},$=(e,t)=>{if(!_.has(e)){let r=f(L,t),n={},i=U.bind(o,e),a=l,u={},s=(e,t)=>{let r=u[e]||[];return u[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=u[t];if(i)for(let e of i)e(r,n)},c=()=>{if(!_.has(e)&&(_.set(e,[n,{},{},{},i,d,s]),!C)){let t=r.initFocus(setTimeout.bind(o,W.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,W.bind(o,n,1)));a=()=>{t&&t(),i&&i(),_.delete(e)}}};return c(),[e,i,c,a]}return[e,_.get(e)[4]]},[j,q]=$(new Map),J=f({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,l=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(d(a)||!(u>a))&&setTimeout(n,l,i)},onDiscarded:l,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:(e,t)=>w(e)==w(t),isPaused:()=>!1,cache:j,mutate:q,fallback:{}},{isOnline:()=>O,isVisible:()=>{let e=T&&document.visibilityState;return d(e)||"hidden"!==e}}),Z=(e,t)=>{let r=f(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=f(i,u))}return r},z=(0,a.createContext)({}),B=y&&window.__SWR_DEVTOOLS_USE__,G=B?window.__SWR_DEVTOOLS_USE__:[],H=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],K=()=>f(J,(0,a.useContext)(z)),Q=G.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=F(t),[,,,i]=_.get(j);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return d(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),X=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};B&&(window.__SWR_DEVTOOLS_REACT__=a);let Y=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),ee={dedupe:!0};s.defineProperty(e=>{let{value:t}=e,r=(0,a.useContext)(z),n=c(t),i=(0,a.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,a.useMemo)(()=>n?i:Z(r,i),[n,r,i]),l=i&&i.provider,s=(0,a.useRef)(o);l&&!s.current&&(s.current=$(l(u.cache||j),i));let d=s.current;return d&&(u.cache=d[0],u.mutate=d[1]),D(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,a.createElement)(z.Provider,f(e,{value:u}))},"defaultValue",{value:J});let et=(n=(e,t,r)=>{let{cache:n,compare:i,suspense:l,fallbackData:s,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:h,refreshWhenHidden:w,refreshWhenOffline:p,keepPreviousData:v}=r,[R,y,T,m]=_.get(n),[O,V]=F(e),S=(0,a.useRef)(!1),L=(0,a.useRef)(!1),A=(0,a.useRef)(O),I=(0,a.useRef)(t),M=(0,a.useRef)(r),W=()=>M.current,$=()=>W().isVisible()&&W().isOnline(),[j,q,J,Z]=b(n,O),z=(0,a.useRef)({}).current,B=d(s)?r.fallback[O]:s,G=(e,t)=>{for(let r in z)if("data"===r){if(!i(e[r],t[r])&&(!d(e[r])||!i(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,a.useMemo)(()=>{let e=!!O&&!!t&&(d(g)?!W().isPaused()&&!l&&(!!d(E)||E):g),r=t=>{let r=f(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=j(),i=Z(),a=r(n),u=n===i?a:r(i),o=a;return[()=>{let e=r(j()),t=G(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>u]},[n,O]),K=(0,u.useSyncExternalStore)((0,a.useCallback)(e=>J(O,(t,r)=>{G(r,t)||e()}),[n,O]),H[0],H[1]),Q=!S.current,et=R[O]&&R[O].length>0,er=K.data,en=d(er)?B:er,ei=K.error,ea=(0,a.useRef)(en),eu=v?d(er)?ea.current:er:en,el=(!et||!!d(ei))&&(Q&&!d(g)?g:!W().isPaused()&&(l?!d(en)&&E:d(en)||E)),eo=!!(O&&t&&Q&&el),es=d(K.isValidating)?eo:K.isValidating,ed=d(K.isLoading)?eo:K.isLoading,ec=(0,a.useCallback)(async e=>{let t,n;let a=I.current;if(!O||!a||L.current||W().isPaused())return!1;let u=!0,l=e||{},s=!T[O]||!l.dedupe,f=()=>k?!L.current&&O===A.current&&S.current:O===A.current,g={isValidating:!1,isLoading:!1},E=()=>{q(g)},h=()=>{let e=T[O];e&&e[1]===n&&delete T[O]},w={isValidating:!0};d(j().data)&&(w.isLoading=!0);try{if(s&&(q(w),r.loadingTimeout&&d(j().data)&&setTimeout(()=>{u&&f()&&W().onLoadingSlow(O,r)},r.loadingTimeout),T[O]=[a(V),P()]),[t,n]=T[O],t=await t,s&&setTimeout(h,r.dedupingInterval),!T[O]||T[O][1]!==n)return s&&f()&&W().onDiscarded(O),!1;g.error=o;let e=y[O];if(!d(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return E(),s&&f()&&W().onDiscarded(O),!1;let l=j().data;g.data=i(l,t)?l:t,s&&f()&&W().onSuccess(t,O,r)}catch(r){h();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,s&&f()&&(e.onError(r,O,e),(!0===t||c(t)&&t(r))&&$()&&e.onErrorRetry(r,O,e,e=>{let t=R[O];t&&t[0]&&t[0](x.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return u=!1,E(),!0},[O,n]),ef=(0,a.useCallback)((...e)=>U(n,A.current,...e),[]);if(D(()=>{I.current=t,M.current=r,d(er)||(ea.current=er)}),D(()=>{if(!O)return;let e=ec.bind(o,ee),t=0,r=X(O,R,(r,n={})=>{if(r==x.FOCUS_EVENT){let r=Date.now();W().revalidateOnFocus&&r>t&&$()&&(t=r+W().focusThrottleInterval,e())}else if(r==x.RECONNECT_EVENT)W().revalidateOnReconnect&&$()&&e();else if(r==x.MUTATE_EVENT)return ec();else if(r==x.ERROR_REVALIDATE_EVENT)return ec(n)});return L.current=!1,A.current=O,S.current=!0,q({_k:V}),el&&(d(en)||C?e():N(e)),()=>{L.current=!0,r()}},[O]),D(()=>{let e;function t(){let t=c(h)?h(j().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!j().error&&(w||W().isVisible())&&(p||W().isOnline())?ec(ee).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,w,p,O]),(0,a.useDebugValue)(eu),l&&d(en)&&O){if(!k&&C)throw Error("Fallback data is required when using suspense in SSR.");I.current=t,M.current=r,L.current=!1;let e=m[O];if(!d(e)){let t=ef(e);Y(t)}if(d(ei)){let e=ec(ee);d(eu)||(e.status="fulfilled",e.value=!0),Y(e)}else throw ei}return{mutate:ef,get data(){return z.data=!0,eu},get error(){return z.error=!0,ei},get isValidating(){return z.isValidating=!0,es},get isLoading(){return z.isLoading=!0,ed}}},function(...e){let t=K(),[r,i,a]=H(e),u=Z(t,a),l=n,{use:o}=u,s=(o||[]).concat(Q);for(let e=s.length;e--;)l=s[e](l);return l(r,i||u.fetcher||null,u)}),er=(i=e=>(t,r,n)=>(n.revalidateOnFocus=!1,n.revalidateIfStale=!1,n.revalidateOnReconnect=!1,e(t,r,n)),(...e)=>{let[t,r,n]=H(e),a=(n.use||[]).concat(i);return et(t,r,{...n,use:a})})}}]);