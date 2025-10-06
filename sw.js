self.addEventListener('install',(event)=>{
    console.info('[Sw] Install..');
});
self.addEventListener('activate',async(event)=>{
    console.info('[Sw] Activate..');
});
self.addEventListener('fetch',(event)=>{
    console.info('[Sw] Fetch..');
});
