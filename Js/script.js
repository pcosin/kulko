var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?74838';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Escríbenos ",
  "borderRadius":"30",
  "marginLeft":"0",
  "marginBottom":"60",
  "marginRight":"60",
  "position":"left"
},
"brandSetting":{
  "brandName":"Kulko App",
  "brandSubTitle":"Respondemos en Minutos",
  "brandImg":"https://res.cloudinary.com/developbile/image/upload/v1614275767/kulko_1_xo0f4a.png",
  "welcomeText":"Hola\n\nEn qué podemos ayudarte?",
  "messageText":"Hello, I have a question about {{page_link}}",
  "backgroundColor":"#830b93",
  "ctaText":"Comenzar Chat",
  "borderRadius":"25",
  "autoShow":true,
  "phoneNumber":"5571996153825"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);