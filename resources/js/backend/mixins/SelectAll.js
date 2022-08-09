
export  function selectAll (items,selectedItems ) {
    return {
        get () {
            return items.length  ===  selectedItems.length;
        },
        set (value){
            selectedItems = value ? items.map(i => i.id) : []
        }
        // get () {
        //     return this.photos.length  ===  this.selectedItems.length;
        // },
        // set(value){
        //     this.selectedItems = value ? this.photos.map(i => i.id) : []
        // }
    }
}

