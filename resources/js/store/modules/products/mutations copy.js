

const mutations = {


  set(state, products) {
    state.PRODUCTS_TR = products;
  },


// SET_PRODUCTS_TR: (state, languageId) => {
//   state.languageId = languageId;
//   TranslateProducts(state, languageId)
// },

UPDATE_LANGUAGE: (state, languageId) => {
  state.languageId = +languageId
},

CREATE_PRODUCT: (state, product) => {
  create_product(state, product)
},


UPDATE_PRODUCT: (state, product) => {
  update_product(state, product)
},


DELETE_PRODUCTS: (state, ids) => {
  state.PRODUCTS_TR = state.PRODUCTS_TR.filter(pr => !ids.includes(pr.id)) 
},



CREATE_PHOTO: (state, photo) => {
  create_photo(state, photo)
},


UPDATE_PHOTO: (state, photo) => {
  update_photo(state, photo)
},



DELETE_PHOTOS: (state, ids) => {
  delete_photos(state, ids)
}






};

 const TranslateProducts = (state,language_id) => {
  
  state.PRODUCTS_TR = state.PRODUCTS_TR.map((product) => {
    product.translate = create_translate(product,language_id);

    product.photos = product.photos.map((photo) => {
      photo.translate = create_translate(photo,language_id);
      return photo;
    });
    return product;
  });
}


//create new product
const create_product = (state, product) => {
    product.translate = create_translate(product,state.languageId) //{}
  if(product.photos.length > 0){
    product.photos = product.photos.map(photo => {
      photo.translate = create_translate(photo,state.languageId);
      return photo
    })
  }
  state.PRODUCTS_TR.push(product)
}



const update_product = (state, product) => {
  
  state.PRODUCTS_TR = state.PRODUCTS_TR.map(pr => {
    if(pr.id === product.id){
      pr.translate = create_translate(product,state.languageId)
      if(product.photos.length > 0){
        pr.photos = product.photos.map(photo => {
          photo.translate = create_translate(photo,state.languageId)
          return photo
        })
      }
    }
    return pr
  })
}




const create_photo = (state, photo) => {
  state.PRODUCTS = state.PRODUCTS.map(pr => {
    if(pr.id === photo.product_id){
      pr.photos.push(photo)
    }
    return pr
  })

  state.PRODUCTS_TR = state.PRODUCTS_TR.map(pr => {
    if(pr.id === photo.product_id){
      photo.translate = create_translate(photo,state.languageId)
      pr.photos.push(photo)
    }
    return pr
  })

}




const update_photo = (state, photo) => {
  state.PRODUCTS = state.PRODUCTS.map(product => {
    if(product.id === photo.product_id ){
      product.photos = product.photos.map(ph => ph.id === photo.id ? photo : ph)
    }
    return product
  })

  state.PRODUCTS_TR = state.PRODUCTS_TR.map(product => {
    if(product.id === photo.product_id  ){
      product.photos = product.photos.map(ph => {
        if(ph.id === photo.id){
          photo.translate = create_translate(photo,state.languageId)
          
          ph = photo
          console.log(ph);
        }
        return ph
      })
    }
    return product
  })
}


const delete_photos = (state, ids) => {
  state.PRODUCTS = state.PRODUCTS.map(product => {
    product.photos = product.photos.filter(photo => !ids.includes(photo.id) )
    return product
  })
  state.PRODUCTS_TR = state.PRODUCTS_TR.map(product => {
    product.photos = product.photos.filter(photo => !ids.includes(photo.id) )
    return product
  })
}


const  create_translate = (data,languageId) => {
  return data.translations.find(translate => translate.language_id === +languageId) || {}
}






export default mutations 
