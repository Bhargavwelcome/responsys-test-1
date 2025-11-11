<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/webpush-service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch(function(error) {
      console.error('Service Worker registration failed:', error);
    });
}
</script>
