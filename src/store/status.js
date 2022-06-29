import { defineStore } from "pinia";
// 定义store
const useStore = defineStore("status", {
    // 定义state, 跟组件的data一样，必须定义方法
    state(){
        return {
           text: ""
        };
    },
    // 定义actions
    actions: {
        setText(text){
            this.text = text;
        }
    }
});
export default useStore;