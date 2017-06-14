<template>
	<div class="main">
		<h3>Let's trigger this here modal!</h3>
			<button @click="toggleShow">
			<span v-if="isShowing">Hide child</span>
			<span v-else>Show child</span>
		</button>
		<transition name="fade">
			<modal v-if="isShowing" class="modal">
				<button @click="toggleShow">
					Close
				</button>
			</modal>
		</transition>
		<script type="text/x-template" id="childarea">
			<div>
				<h2>Here I am!</h2>
				<slot></slot>
			</div>
		</script>
	</div>	
</template>



<script>

const Child = {
	template: '#childarea'
};

export default {
  	data() {
    	return {
      		isShowing: false
    	}
  	},
  	methods: {
    	toggleShow() {
      		this.isShowing = !this.isShowing;
    	}
  	},
  	components: {
   		modal: Child
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
	width:100%;
	height:400px;
}

.modal{
	background:linear-gradient(blue, #0071c5);
	border:1px solid darkblue;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
