import router from './router';
// import store from './store';
router.beforeEach(async (to, from, next) => {
  // set page title
  console.log('权限', from);
  if (to.meta.title){
    document.title = to.meta.title;
  }
  next();
});
