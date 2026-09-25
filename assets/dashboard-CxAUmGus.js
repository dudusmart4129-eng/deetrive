const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wix-client-DeD8s1jN.js","assets/wix-client-DCZZYXGy.js","assets/rolldown-runtime-BX80bFGj.js","assets/es-D69CLhXq.js","assets/site-members-client-DekU0e9m.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./rolldown-runtime-BX80bFGj.js";/* empty css              */import"./modulepreload-polyfill-P2Xu9kJm.js";var n,r,i,a,o=e((()=>{n=`modulepreload`,r=function(e){return`/deetrive/`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(t.map(t=>{if(t=r(t,a),t=u(t),t in i)return;i[t]=!0;let o=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.href===t&&(!o||r.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:n,o||(s.as=`script`),s.crossOrigin=``,s.href=t,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})}}));t((()=>{o(),document.addEventListener(`DOMContentLoaded`,async()=>{let e,t;try{let n=await a(()=>import(`./wix-client-DeD8s1jN.js`),__vite__mapDeps([0,1,2,3]));t=await a(()=>import(`./site-members-client-DekU0e9m.js`),__vite__mapDeps([4,2,3])),e=n.wixClient}catch(e){console.error(`Unable to load Wix modules:`,e);let t=document.querySelector(`#account-email`);t&&(t.textContent=`MODULE ERROR: `+(e?.message||String(e)));return}try{let e=await t.currentMember.getMember({fieldsets:[`FULL`]});if(console.log(`Deetrive member:`,e),e){let t=document.querySelector(`#account-email`);t&&e.loginEmail&&(t.textContent=e.loginEmail);let n=document.querySelector(`#welcome-message`),r=e.profile?.nickname||``;n&&r&&(n.textContent=`Welcome back, ${r} 👋`),t&&!e.loginEmail&&(t.textContent=`Email unavailable`)}else{let e=document.querySelector(`#account-email`);e&&(e.textContent=`Member session unavailable`)}}catch(e){console.error(`Unable to get member:`,e);let t=document.querySelector(`#account-email`);t&&(t.textContent=`Error: `+(e?.message||String(e)))}let n=document.querySelectorAll(`.dashboard-card`),r=document.querySelector(`#asset-modal`),i=document.querySelector(`#asset-modal-overlay`),o=document.querySelector(`#asset-modal-icon`),s=document.querySelector(`#asset-modal-name`),c=document.querySelector(`#asset-modal-symbol`),l=document.querySelector(`#asset-modal-price`),u=document.querySelector(`#asset-modal-balance`),d=document.querySelector(`#asset-modal-usd`),f=document.querySelector(`#asset-receive-panel`),p=document.querySelector(`#receive-asset-name`),m=document.querySelector(`#receive-asset-symbol`),h=document.querySelector(`#receive-wallet-address`),g=document.querySelector(`#copy-receive-address`),_=document.querySelector(`#asset-deposit-btn`),v=document.querySelector(`#asset-withdraw-btn`),y=document.querySelector(`#asset-withdraw-panel`),b=document.querySelector(`#withdraw-asset-name`),x=document.querySelector(`#withdraw-asset-symbol`),S=document.querySelector(`#asset-transactions`);document.querySelector(`#dashboard-transactions`);let C=document.querySelector(`#withdraw-address`),w=document.querySelector(`#withdraw-amount`),T=document.querySelector(`#withdraw-continue-btn`),E=document.querySelector(`#withdraw-confirmation`),D=document.querySelector(`#confirm-withdraw-asset`),O=document.querySelector(`#confirm-withdraw-amount`),k=document.querySelector(`#confirm-withdraw-address`),A=document.querySelector(`#confirm-withdraw-btn`),j=document.querySelector(`#cancel-withdraw-btn`),M={Bitcoin:{symbol:`BTC`,icon:`./assets/bitcoin.svg`,price:`$0.00`},Tether:{symbol:`USDT`,icon:`./assets/tether.svg`,price:`$1.00`},Ethereum:{symbol:`ETH`,icon:`./assets/ethereum.svg`,price:`$0.00`}},N=localStorage.getItem(`deetriveAssetTransactions`),P=N?JSON.parse(N):{Bitcoin:[],Tether:[],Ethereum:[]};function F(e){let t=M[e];if(!t)return;o.src=t.icon,o.alt=e,s.textContent=e,c.textContent=t.symbol,l.textContent=t.price,u.textContent=`0.0000 ${t.symbol}`,d.textContent=`$0.00`,r.classList.add(`active`),I(e);function n(){let e=document.querySelector(`#dashboard-transactions`);if(!e)return;let t=localStorage.getItem(`deetriveAssetTransactions`),n=t?JSON.parse(t):{Bitcoin:[],Tether:[],Ethereum:[]},r=[];if(Object.keys(n).forEach(e=>{n[e].forEach(t=>{r.push({...t,asset:e})})}),r.length===0){e.innerHTML=`
            <div class="dashboard-card">

                <h3>
                    No transactions yet
                </h3>

                <p>
                    Your deposits, withdrawals and other
                    account activity will appear here.
                </p>

            </div>
        `;return}e.innerHTML=r.map(e=>`
                <div class="dashboard-card">

                    <h3>
                        ${e.type}
                    </h3>

                    <p>
                        ${e.status} ·
                        ${e.amount}
                    </p>

                    <p>
                        ${e.date}
                    </p>

                </div>
            `).join(``)}n(),r.setAttribute(`aria-hidden`,`false`)}function I(e){let t=P[e]||[];if(t.length===0){S.innerHTML=`
            <div class="asset-transaction-empty">

                <p>
                    No transactions yet
                </p>

                <span>
                    Your ${e} activity will appear here.
                </span>

            </div>
        `;return}S.innerHTML=t.map(e=>`
                <div class="asset-transaction">

                    <div class="asset-transaction-top">

                        <span class="asset-transaction-type">
                            ${e.type}
                        </span>

                        <span class="asset-transaction-status">
                            ${e.status}
                        </span>

                    </div>

                    <div class="asset-transaction-details">

                        <span class="asset-transaction-amount">
                            ${e.amount}
                        </span>

                        <span class="asset-transaction-date">
                            ${e.date}
                        </span>

                    </div>

                </div>
            `).join(``)}_.addEventListener(`click`,()=>{let e=s.textContent.trim(),t=M[e];t&&(p.textContent=e,m.textContent=t.symbol,h.textContent=`Wallet address will appear here`,f.classList.add(`active`),f.scrollIntoView({behavior:`smooth`,block:`start`}))}),v.addEventListener(`click`,()=>{let e=s.textContent.trim(),t=M[e];t&&(b.textContent=e,x.textContent=t.symbol,y.classList.add(`active`),y.scrollIntoView({behavior:`smooth`,block:`start`}),T.addEventListener(`click`,()=>{let e=C.value.trim(),t=Number(w.value);if(!e){alert(`Please enter a wallet address.`);return}if(!t||t<=0){alert(`Please enter a valid amount.`);return}let n=b.textContent.trim(),r=M[n];D.textContent=r.symbol,O.textContent=`${t} ${r.symbol}`,k.textContent=e,E.classList.add(`active`),E.scrollIntoView({behavior:`smooth`,block:`start`}),j.addEventListener(`click`,()=>{E.classList.remove(`active`)}),A.addEventListener(`click`,()=>{let e=b.textContent.trim(),t=M[e],n=Number(w.value);C.value.trim(),P[e].unshift({type:`Withdrawal`,status:`Pending`,amount:`${n} ${t.symbol}`,date:new Date().toLocaleString()}),localStorage.setItem(`deetriveAssetTransactions`,JSON.stringify(P)),I(e),E.classList.remove(`active`),renderDashboardTransactions(),alert(`Withdrawal request added to your activity.`)})}))}),g.addEventListener(`click`,async()=>{let e=h.textContent.trim();if(!e||e===`Wallet address will appear here`){alert(`No wallet address is available yet.`);return}await navigator.clipboard.writeText(e),g.textContent=`Address Copied ✓`,setTimeout(()=>{g.textContent=`Copy Address`},2e3)});function L(){r.classList.remove(`active`),r.setAttribute(`aria-hidden`,`true`)}n.forEach(e=>{let t=e.querySelector(`h3`);t&&M[t.textContent.trim()]&&e.addEventListener(`click`,()=>{F(t.textContent.trim())})}),i.addEventListener(`click`,L);let R=document.querySelector(`#logout-btn`);R&&R.addEventListener(`click`,async()=>{try{let{logoutUrl:t}=await e.auth.logout(`https://dudusmart4129-eng.github.io/deetrive/login.html`);window.location.href=t}catch(e){console.error(`Logout error:`,e),alert(`Unable to log out right now.`)}})})}))();