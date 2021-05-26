import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  const  roles  = ['developer','editor']
  // generate accessible routes map based on roles
  const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
  console.log('获取数组', accessRoutes);
  // dynamically add accessible routes
  // router.addRoutes(accessRoutes)

  // hack method to ensure that addRoutes is complete
  // set the replace: true, so the navigation will not leave a history record
  // next({ ...to, replace: true })
  next()

})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
