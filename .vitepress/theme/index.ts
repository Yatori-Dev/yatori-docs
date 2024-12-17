import  Theme from "vitepress/theme";
import {h} from 'vue'
import './style/var.css'
import HomeHero from "./components/HomeHero.vue";
export default{
    ...Theme,
    Layout: ()=>{
        return h(Theme.Layout,null,{
            'home-hero-image': ()=>h(HomeHero)
        })
    }
}