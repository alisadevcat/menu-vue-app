import menu_types from "../jsons/tbl_menu_type.json";

export default {
	namespaced: true,
	state: {
		types: getMenuTypes()
	},
	getters: {
		all: state => state.types,
		indexById: state => id => state.items.findIndex(item => item.id == id),
		getAllMenuTypes: (state) => code => state.types.filter(item => item.branch == code),
		// indexById: state=>id 
	},
    //computed
	mutations: {
		
	},
    //methods
	actions: {
		// getCategories({commit}) {
        //     // fetch the categories and attached products from the api
        //     axios.get('/api/products')
        //         .then((response) => {
        //             commit('updateProducts', response.data);
        //         })
        //         .catch((error) => console.error(error));
        // },
        // clearCart({commit}) {
        //     commit('updateCart', []);
        // }
		
	}
    //async
}
function getMenuTypes(){
return menu_types
}