<template>
	<div class="main">
		<h3>Let's trigger this here modal!</h3>
			<button @click="toggleShow">
				<span v-if="isShowing">Hide child</span>
				<span v-else>Show child</span>
			</button>
			<button @click="toggleBounce">Bounce</button>
		<transition name="fade">
			<modal v-if="isShowing" class="modal">
				<button @click="toggleShow">
					Close
				</button>
			</modal>
		</transition>
		<transition
			name="ballmove"
			enter-active-class="bouncein"
		>
			<ball v-if="isBouncing" class="ball"></ball>
		</transition>

		<!--Templates-->
		<script type="text/x-template" id="childarea">
			<div>
				<h2>Here I am!</h2>
				<slot></slot>
			</div>
		</script>
		<script type="text/x-template" id="ball">
			<div>Ball</div>
		</script>
	</div>	
</template>



<script>

const Child = {
	template: '#childarea'
};

const Ball = {
	template: '#ball'
}

export default {
  	data() {
    	return {
      		isShowing: false,
			isBouncing: false
    	}
  	},
  	methods: {
    	toggleShow() {
      		this.isShowing = !this.isShowing;
    	},
		toggleBounce() {
			this.isBouncing = !this.isBouncing;
		}
  	},
  	components: {
   		modal: Child,
		ball: Ball
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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

@mixin ballb($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}

@keyframes bouncein { 
  1% { @include ballb(-400px); }
  20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
  30% { @include ballb(-80px); }
  50% { @include ballb(-40px); }
  70% { @include ballb(-30px); }
  90% { @include ballb(-15px); }
  97% { @include ballb(-10px); }
}

.bouncein { 
  animation: bouncein 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.ballmove-enter {
  @include ballb(-400px);
}

//.ball{background-color:red;}
</style>
