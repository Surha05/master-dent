(function(){
   const auth = sessionStorage.getItem('auth');
   if(!auth) location.replace('/admin/pages/auth/');
})();