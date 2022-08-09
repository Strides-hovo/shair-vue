import apiRoutes from "@/routes/api-routes";
import axios from "axios";


const state = {
    SiteMenu: [],
};


const actions = {
        SET_PHOTO_PAGE: ({commit}) => {

        } 
};


const mutations = {
    SET_PHOTO_PAGE: (state, pages) => {
        state.PHOTO_PAGES = pages
    } 
};


const getters = {
    GET_PHOTO_PAGE: (state,language_id) => {
        const page = state.SiteMenu.PHOTO_PAGES.filter(page => {
            
        })
    }
}











const SiteMenu = [
  {
    url: "/",
    text: "Home",
    isActive: false,
    hasItem: [],
  },
  {
    url: "/price-list",
    text: "Price list",
    isActive: false,
    hasItem: [],
  },
  {
    url: "/o-nas",
    text: "O nas i informaziya",
    isActive: false,
    hasItem: [],
  },
  {
    url: "/shatri-arendu",
    text: "Shatri v arendu",
    isActive: false,
    hasItem: [],
  },
  {
    url: "/galerei",
    text: "Galerei",
    isActive: false,
    hasItem: [],
  },
];
