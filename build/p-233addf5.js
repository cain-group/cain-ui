const e=(e,s,t,n,$)=>{let m=`${e}-${s}`;return t&&(m+=`-${t}`),n&&(m+=`__${n}`),$&&(m+=`--${$}`),m},s=s=>{const t="ca";return{namespace:t,b:(n="")=>e(t,s,n,"",""),e:n=>n?e(t,s,"",n,""):"",m:n=>n?e(t,s,"","",n):"",be:(n,$)=>n&&$?e(t,s,n,$,""):"",em:(n,$)=>n&&$?e(t,s,"",n,$):"",bm:(n,$)=>n&&$?e(t,s,n,"",$):"",bem:(n,$,m)=>n&&$&&m?e(t,s,n,$,m):"",is:(e,...s)=>!e||s.length>=1&&!s[0]?"":`is-${e}`}};export{s as u};