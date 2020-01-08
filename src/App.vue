<template>
	<Div Id = "App">
		<Main>
			<Navigation />
			<router-view :character = "$route.params.character" />
		</Main>

		<Footer />
	</Div>
</template>

<style lang="scss">
	*, *::before, *::after { box-sizing: border-box }

	html {
		&, body {
			margin: 0;
			overflow: hidden;
		}
		
		body { background-color: initial }
	}
</style>

<script>
	import Navigation from "./components/Navigation";
	import Footer from "./components/Footer";

	export default {
		components: { Navigation, Footer }
	};
</script>