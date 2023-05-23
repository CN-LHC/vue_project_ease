import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    meta: {
      auth: false,
    },
    redirect: "/list",
    component: () => import('../layout/basicLayout.vue'),
    children: [
      {
        path: "/list",
        name: "列表",
        meta: {
          auth: false,
        },
        component: () => import("../views/list.vue"),
      },
      {
        path: "/submit",
        name: "提交",
        meta: {
          auth: false,
        },
        component: () => import("../views/submit.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  //根据字段判断是否路由过滤
  if (to.matched.some((record) => record.meta.auth)) {
    console.log('权限判断')
  } else {
    // 当输入不存在的页面地址时候，返回首页
    if (to.matched.length > 0) {
      next();
    } else {
      next({
        path: "/",
      });
    }
  }
});

export default router;
