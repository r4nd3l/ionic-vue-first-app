import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            memories:[
                {
                    id: "m1",
                    image: "https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    title: 'This is a good memory',
                    description: 'A short description nothing more'
                },
                {
                    id: "m2",
                    image: "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    title: 'This one is even better',
                    description: 'Another short description nothing more'
                },
                {
                    id: "m3",
                    image: "https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    title: 'That is twice as good',
                    description: 'Aagin short description nothing more'
                },
            ],
        };
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        },
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData);
        }
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            };
        }
    }
});

export default store;