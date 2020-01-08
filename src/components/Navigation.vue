<template>
	<Nav Class = "navigation">
		<Li Class = "navigation_tab"><router-link to = "./Axton">Axton</router-link></Li>
		<Li Class = "navigation_tab"><router-link to = "./Maya">Maya</router-link></Li>
		<Li Class = "navigation_tab"><router-link to = "./Salvador">Salvador</router-link></Li>
		<Li Class = "navigation_tab"><router-link to = "./Zer0">Zer0</router-link></Li>
		<Li Class = "navigation_tab"><router-link to = "./Gaige">Gaige</router-link></Li>
		<Li Class = "navigation_tab navigation_tab--active"><router-link to = "./Krieg">Krieg</router-link></Li>
	</Nav>
</template>

<style lang="scss" scoped>
	.navigation {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		list-style: none;


		&_tab {
			padding: 0.5em 1em;
		}
	}
</style>

<script>
	export default {};
</script>