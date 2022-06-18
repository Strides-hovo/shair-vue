import { mapGetters } from 'vuex'

export default {
    data: () => ({
        canvasStatusMove: true,
        image: {
            width: null,
            height: null,
            src: null
        },
        coordinates: {
            width: 0,
            height: 0,
            y: 0,
            x: 0,
            src: '',
            type: null,
        },

    }),
    computed: {
        ...mapGetters({ portions: 'Portions/getPortions' }),

        CanvasStyle() {
            return {
                'width': this.coordinates.width + 'px',
                'height': this.coordinates.height + 'px',
                'transform': `translateX(${this.coordinates.x}px) translateY(${this.coordinates.y}px)`,
            }
        },

        // background() {

        //     let img = this.$refs.img
        //     console.log(img)
        //     if (this.coordinates.src) {

        //         return {
        //             'width': img.clientWidth + 'px',
        //             'height': img.clientHeight + 'px',

        //         }
        //     }
        //     return {
        //         width: null,
        //         height: null,

        //     }




        // }
    },
    watch: {
        canvasStatusMove(newval) {
            // console.log(newval)
        },

    },
    methods: {
        DragStart(evt) {

            let img = this.$refs.img
            let canvas = this.$refs.canvas

            this.coordinates.offsetY = evt.offsetY
            this.coordinates.offsetX = evt.offsetX

            this.coordinates.pageX = (evt.pageX )
            this.coordinates.pageY = (evt.pageY )

            console.log('start', evt.pageX, evt.pageY)
        },

        DragEnd(evt) {

            // if (this.canvasStatusMove === true) {
            let bg = this.$refs.bg;
            let canvas = this.$refs.canvas
            bg.append(canvas)
            
            // this.coordinates.x = (evt.pageX - this.coordinates.pageX ) 
            // this.coordinates.y = (evt.pageY - this.coordinates.pageY ) 

            // this.coordinates.x = evt.pageX - this.coordinates.offsetX
            // this.coordinates.y = evt.pageY - this.coordinates.offsetY
            //   this.coordinates.x = evt.pageX - (this.coordinates.pageX + this.coordinates.offsetX)
            //   this.coordinates.y = evt.pageY - (this.coordinates.pageY + this.coordinates.offsetY)
            // }



            console.log('end', bg.getBoundingClientRect(),canvas.getBoundingClientRect() );
            console.log('evt', evt.pageX, evt.pageY)
        },



        Mouseover(evt) {
            this.canvasStatusMove = true
            this.image.pageX = evt.pageX
            this.image.pageY = evt.pageY

            // console.log('mouse', evt.pageY)
        },


        loadImage(event) {

            let file = this.$refs.file.files[0];
            let image = this.$refs.img
            if(!file || file.type.indexOf('image/') !== 0) return;
            
            this.image.size = file.size;
            
            let reader = new FileReader();
            
            reader.readAsDataURL(file);
            reader.onload = evt => {
              let img = new Image();
              img.onload = () => {
                this.image.width = img.width + 'px';
                this.image.height = img.height + 'px';
                this.image.src = evt.target.result;
              }
              img.src = evt.target.result;
            //   console.log('load',  image.pageY )
            }
        },
    }



}