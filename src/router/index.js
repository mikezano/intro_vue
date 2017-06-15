import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import incrementer from '@/components/incrementer'
import hsl from '@/components/hsl'
import sender from '@/components/sender'
import sandbox from '@/components/sandbox'
import comments from '@/components/comments'
import slots from '@/components/slots'
import dialog from '@/components/dialog'
import sky from '@/components/environment/sky'

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
		},
		{
			path: '/sandbox',
			name: 'sandbox',
			component: sandbox
		},
		{
			path: '/comments',
			name: 'comments',
			component: comments
		},
		{
			path: '/slots',
			name: 'slots',
			component: slots
		},
		{
			path: '/dialog',
			name: 'dialog',
			component: dialog
		},
		{
			path: '/environment',
			name: 'environment',
			component: sky
		}		
	]
})
