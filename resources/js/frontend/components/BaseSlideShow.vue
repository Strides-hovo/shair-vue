<template>


    <div class="gallery-page__body-item" v-for="(gallery, i) in images" :key="i" >

        <span class="gallery-page__body-img"  @click="openModal(i)" >
            <img v-lazy="gallery.src" :alt="gallery.title" :title="gallery.title">
        </span>
        <span class="gallery-page__body-title">
            {{ gallery.title }}
        </span>
    </div>


    <div class="gallery-photo__modal" :class="{ active: ButtonModal }">
        <div class="gallery-photo__modal-bg" ref="outClick" @click="closeModal"></div>
        <button class="gallery-photo__modal-prev" @click="prev" v-if="images.length > 0">
            <img src="@img/icons/slider-btn.svg">
        </button>
        <button class="gallery-photo__modal-next" @click="next" v-if="images.length > 0">
            <img src="@img/icons/slider-btn.svg">
        </button>
        <div class="gallery-photo__modal-content">
            <div class="gallery-photo__modal-close" @click="closeModal">
                <img src="@img/gallery/modal-close.svg">
            </div>
            <div class="gallery-photo__modal-img">
                <img :src="image.src">
            </div>
            <div class="gallery-photo__modal-title">
                {{ image.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseSlideShow',
    props: ['images'],
    
    data: () => ({
        index: 0,
        image: { title: '' },
        ButtonModal: false,
    })
    ,
    methods: {
        next() {
            this.index = (this.index + 1) % this.images.length;
            this.image = this.images[this.index];
        },
        prev() {
            this.index = this.index === 0 ? (this.images.length - 1) : (this.index - 1) % this.images.length;
            this.image = this.images[this.index];
        },
        autoChangeSlide() {
            setInterval(() => {
                this.next();
            }, 2000);
        },
        openModal(i){
            this.index = i
            this.image = this.images[this.index]
            this.ButtonModal = true
        },
        closeModal() {
            this.ButtonModal = false
        },

    },
 
    beforeMount() {
        //this.autoChangeSlide();
    },
}
</script>

