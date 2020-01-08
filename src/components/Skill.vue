<template>
	<Td>
		<A Class = "skillTree_skill" Href = "#">
			<Img Alt = "${skillName}" :Src = "assetUrl" />
		</A>
	</Td>
</template>

<style lang="scss" scoped>

</style>

<script>
	export default {
		props: {
			treeId: Number,
			row: Number,
			column: Number
		},

		computed: {
			assetUrl () {
				const { character } = this.$store.state;
				const { treeId, row, column } = this;

				return `./assets/skill/${character}${treeId || "00"}.png`;
			}
		}
	};
</script>