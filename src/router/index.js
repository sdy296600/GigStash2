import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layouts/AdminLayout.vue'
import WorkerLayout from '../layouts/workerLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 로그인 페이지
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/auth/LoginView.vue'),
    },
    // 관리자 페이지  (사이드바 레이아웃 적용)
    {
      path: '/admin',
      component: AdminLayout,
      redirect: '/admin/adminmain',
      children: [
        {
          path: 'adminmain',
          name: 'adminMain',
          component: () => import('../pages/admin/AdminMain.vue'),
          meta: { title: '대시보드' },
        },
        {
          path: 'event-management',
          name: 'adminEventManagement',
          component: () => import('../pages/admin/EventView.vue'),
          meta: { title: '행사관리' },
        },
        {
          path: 'reservations',
          name: 'adminReservations',
          component: () => import('../pages/admin/ReservationView.vue'),
          meta: { title: '예약관리' },
        },
        {
          path: 'monitoring',
          name: 'adminMonitoring',
          component: () => import('../pages/admin/MonitoringView.vue'),
          meta: { title: '모니터링' },
        },
        {
          path: 'demo',
          name: 'adminComponentDemo',
          component: () => import('../pages/admin/ComponentDemo.vue'),
          meta: { title: '설정' },
        },
      ],
    },

    // 기사 페이지 ===================================
    {
      path: '/worker',
      redirect: '/worker/workermain',
    },
    {
      path: '/worker/workermain',
      component: () => import('../layouts/workerLayout.vue'),
      children: [
        {
          path: '',
          name: 'WorkerWork',
          component: () => import('../pages/worker/WorkerMain.vue'),
        },
        {
          path: 'calendar',
          name: 'WorkerCalendar',
          component: () => import('../pages/worker/Calendar.vue'),
        },
        {
          path: 'edit-profile',
          name: 'WorkerEditProfile',
          component: () => import('../pages/worker/EditProfile.vue'),
        },
        {
          path: 'salary-detail',
          name: 'WorkerSalaryDetail',
          component: () => import('../pages/worker/SalaryDetail.vue'),
        },
        {
          path: 'settings',
          name: 'WorkerSettings',
          component: () => import('../pages/worker/WorkerSettings.vue'),
        },
        {
          path: 'remain-customer',
          name: 'WorkerRemainCustomer',
          component: () => import('../pages/worker/RemainCustomer.vue'),
        },
        {
          path: 'qr-code',
          name: 'WorkerQrCode',
          component: () => import('../pages/worker/QrCode.vue'),
        },
      ],
    },
  ],
})

export default router
