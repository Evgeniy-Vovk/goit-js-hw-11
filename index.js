import{i as n,a as d,S as f}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p({webformatURL:a,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:o}){return`
    <li class="gallery-item">
      <a href="${r}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${s}"
          loading="lazy"
        >
      </a>
      <div class="gallery-info">
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Likes</p>
          <p class="gallery-info-div-value">${i.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Views</p>
          <p class="gallery-info-div-value">${e.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Comments</p>
          <p class="gallery-info-div-value">${t.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Downloads</p>
          <p class="gallery-info-div-value">${o.toLocaleString()}</p>
        </div>
      </div>
    </li>
  `}const g=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",u);async function u(a){a.preventDefault();const r=a.target.elements.formInput.value.trim();if(c.innerHTML="",l.classList.remove("visually-hidden"),!r){n.show({message:"Please enter a search term.",backgroundColor:"#ef4040",position:"topRight"}),l.classList.add("visually-hidden");return}try{const i=(await d.get("https://pixabay.com/api/",{params:{key:"47396340-f7005e76dc1b3bde31bf703a9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data.hits;if(!i.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");const e=i.map(o=>p(o)).join("");c.innerHTML=e,new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(s){n.show({message:s.message,backgroundColor:"#ef4040",position:"topRight"})}finally{l.classList.add("visually-hidden"),a.target.reset()}}
//# sourceMappingURL=index.js.map
