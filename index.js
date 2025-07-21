import{i as n,a as d,S as f}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g({webformatURL:s,largeImageURL:r,tags:i,likes:o,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a href="${r}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${i}"
          loading="lazy"
        >
      </a>
      <div class="gallery-info">
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Likes</p>
          <p class="gallery-info-div-value">${o.toLocaleString()}</p>
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
          <p class="gallery-info-div-value">${a.toLocaleString()}</p>
        </div>
      </div>
    </li>
  `}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");p.addEventListener("submit",u);function u(s){s.preventDefault();const r=s.target.elements.formInput.value.trim();if(l.classList.remove("visually-hidden"),c.innerHTML="",!r){n.show({message:"Please enter a search term.",backgroundColor:"#ef4040",position:"topRight"}),l.classList.add("visually-hidden");return}d.get("https://pixabay.com/api/",{params:{key:"47396340-f7005e76dc1b3bde31bf703a9",q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(i=>{const o=i.data.hits;if(!o.length)throw new Error("Sorry, there are no images matching <br /> your search query. Please try again!");const e=o.map(a=>g(a)).join("");c.innerHTML=e,new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}).catch(i=>{n.show({message:i.message,backgroundColor:"#ef4040",position:"topRight"})}).finally(()=>{l.classList.add("visually-hidden")}),s.target.reset()}
//# sourceMappingURL=index.js.map
