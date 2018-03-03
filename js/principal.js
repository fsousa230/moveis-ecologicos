var banners=["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual=0;
var banners= ["Do lixo ao luxo!","Reaproveitar é aproveitar!"];

functiontrocaBanner() {
bannerAtual= (bannerAtual+1) %2;
document.querySelector(’h2#mensagem’).textContent=banners[bannerAtual];
}

setInterval(trocaBanner,2000);
setInterval(trocaBanner,1000);