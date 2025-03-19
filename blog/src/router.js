import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/main.vue'),
        },
        {
            path: '/about',
            component: () => import('./views/about.vue'),
        },
        {
            path: '/contact',
            component: () => import('./views/contact.vue'),
        },
        {
            path: '/blogeditor',
            component: () => import('./views/blogEditor.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/signIn',
            component: () => import('./views/SignIn.vue'),
        },
        {
            path: '/Register',
            component: () => import('./views/Register.vue'),
        },
        {
            path: '/blog',
            component: () => import('./views/blogWeek.vue'),
        },
        {
            path: '/blog/:id',
            component: () => import('./views/specificBlog.vue'),
        }
    
    ],
});

const GetCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(getAuth(), (user) => {
            removeListener();
            resolve(user);
        }, reject);
    });
};

router.beforeEach(async (to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (await GetCurrentUser()) {
            next();
        } else {
            alert("You don't have acces to this page");
            next('/');
        }
    } else {
        next();
    }
});

export default router;