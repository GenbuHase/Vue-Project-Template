<template>
	<Table Class = "skillTree" :character = "character">
		<Tr>
			<!--
			<Td>
				<A Class = "skillTree_skill skillTree_skill--base" Href = "#">
					<Img Alt = "${skillName}" Src = "../assets/skill/krieg00.png" />
				</A>
			</Td>
			-->

			<Skill />
		</Tr>
		
		<Tr>
			<Td>
				<Table Class = "skillTree_subTree" data-align = "left">
					<Tr>
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-01-01.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-01-02.png" />
							</A>
						</Td>
					</Tr>
					
					<Tr>
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-01.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-02.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-03.png" />
							</A>
						</Td>
					</Tr>
				</Table>
			</Td>
			
			<Td>
				<Table Class = "skillTree_subTree" data-align = "center">
					<Tr>
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-01-01.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-01-02.png" />
							</A>
						</Td>
					</Tr>
					
					<Tr>
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-01.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-02.png" />
							</A>
						</Td>
						
						<Td>
							<A Class = "skillTree_skill" Href = "#">
								<Img Alt = "${skillName}" Src = "../assets/skill/krieg01-02-03.png" />
							</A>
						</Td>
					</Tr>
				</Table>
			</Td>
		</Tr>
	</Table>
</template>

<style lang="scss" scoped>
	.skillTree {
		&, &_subTree {
			width: 100%;
			
			> tr {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
			}
		}
		
		&:not(:first-child) > td { flex: 1 }
	}
</style>

<script>
	import { mapActions } from "vuex";
	import { updateCharacter } from "../store/index";

	import Skill from "../components/Skill.vue";



	export default {
		components: { Skill },

		props: {
			character: String
		},

		methods: {
			updateCharacter () {
				if (this.character !== this.$store.state.character) {
					this.$store.commit({
						type: updateCharacter,
						character: this.character
					});

					this.fetchSkill();
				}
			},

			...mapActions([
				"fetchSkill"
			])
		},

		created () { this.updateCharacter() },
		updated () { this.updateCharacter() }
	};
</script>