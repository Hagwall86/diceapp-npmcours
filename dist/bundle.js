(()=>{"use strict";var t,n={987:(t,n,o)=>{const e=o(433);t.exports={diceRoll1:function(){let t=e.getRolls();return e.addRoll(),t},diceRoll2:function(){e.roll2()},diceRoll3:function(){e.roll3(),e.addRoll()}}},619:t=>{t.exports={roll1:function(){return Math.floor(6*Math.random())+1},roll2:function(){return Math.floor(6*Math.random()),Math.floor(6*Math.random())+1},roll3:function(){return Math.floor(6*Math.random()),Math.floor(6*Math.random()),Math.floor(6*Math.random())+1}}},433:(t,n,o)=>{const e=o(619),r=[];t.exports={addRoll:function(){const t=e.roll1();return r.push(t),t},getRolls:function(){return r}}}},o={};function e(t){var r=o[t];if(void 0!==r)return r.exports;var l=o[t]={exports:{}};return n[t](l,l.exports,e),l.exports}t=e(987),document.getElementById("main-Con"),function(){const n=document.getElementById("main-Con"),o=document.createElement("button");o.id="dice-1-Btn",o.innerText="Slå 1 tärning",n.append(o);const e=document.createElement("div");o.addEventListener("click",(()=>{const o=(0,t.diceRoll1)();e.id="cont-result",e.innerText="",e.innerText=o,n.append(e)}))}(),function(){const t=document.getElementById("head-Con"),n=document.createElement("h1");n.textContent="Dice Roll 123",t.appendChild(n)}()})();