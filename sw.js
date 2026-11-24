self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(event){ event.waitUntil(self.clients.claim()); });

self.addEventListener("push", function(event){
  var data = { title:"Koha të marrësh fëmijët!", body:"Mësimet kanë mbaruar." };
  try{
    var payload = event.data ? event.data.json() : null;
    if(payload && payload.title) data = payload;
  }catch(e){}
  event.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    tag: data.tag || "school-pickup",
    vibrate: [200,100,200]
  }));
});

self.addEventListener("message", function(event){
  var m = event.data || {};
  if(m.type === "notify" && m.title){
    self.registration.showNotification(m.title, {
      body: m.body || "",
      icon: "./icon-192.png",
      badge: "./icon-192.png",
      tag: "school-pickup",
      vibrate: [200,100,200]
    });
  }
});

self.addEventListener("notificationclick", function(event){
  event.notification.close();
  event.waitUntil(self.clients.matchAll({type:"window", includeUncontrolled:true}).then(function(list){
    if(list.length) return list[0].focus();
    return self.clients.openWindow("./index.html");
  }));
});
