Vue.component('v-autocompleter', {
    template: `
        <div class="v-autocompleter">
            <input class="v-autocompleter-input" type="text" v-model="input">	
				<ul v-if="input.length > 0">	
				<div class="space">
				</div>
                    <li v-for="animal in data">
						<div> <span>
						{{ animal }}
						</span>
						</div>
                    </li>
            </ul>
            </div>
    `
	,
	props: {
        data: { type: Array, required: true },
    }
    ,
    computed:{
        data: function () {			
            var self = this;
            var filteredAnimals = animals.filter( function(animal) {
                return animal.toLowerCase().startsWith(self.input.toLowerCase());
            });
            return filteredAnimals.length > 9 ? filteredAnimals.slice(0, 10) : filteredAnimals;
        }  
    },
    data() {
        return {
            input: ''
        }
    }
})

new Vue ({
    el: ".mainSearch",
})