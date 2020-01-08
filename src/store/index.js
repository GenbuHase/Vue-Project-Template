import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export const initCharacter = "Character/init";
export const updateCharacter = "Character/update";


export default new Vuex.Store({
	strict: process.env.NODE_ENV !== "production",

	state: {
		character: "",
		skills: {}
	},
	
	mutations: {
		[initCharacter] (state, { data }) {
			state.skills = data;
		},

		[updateCharacter] (state, { character }) {
			state.skills = {},
			state.character = character;
		}
	},

	actions: {
		async fetchSkill ({ state, commit }) {
			commit({
				type: initCharacter,
				data: await import(`./../skills/${state.character}.json`).catch(() => ({}))
			});
		}
	}
});