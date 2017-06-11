import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import incrementer from '@/components/incrementer'
import hsl from '@/components/hsl'
import sender from '@/components/sender'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/incrementer',
			name: 'Incrementer',
			component: incrementer
		},
		{
			path: '/hsl',
			name: 'HSL',
			component: hsl
		},
		{
			path: '/send_receive',
			name: 'sender',
			component: sender
		}
	]
})
