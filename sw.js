self.addEventListener('fetch', async (e) => {
    if (e.request.url.includes('page2.html') && !navigator.onLine) {
        console.log(e.request.url)
        e.respondWith(fetch('pages/offline.html'))
    }
})


