<template>

  <!-- <transition name="fade">
    <div class="products-modal-size__new" v-if="ButtonNewSize">
      <button>הוסף</button>
      <input type="number" placeholder="new size" v-model.number="NewSize">
    </div>
  </transition> -->


  <base-translate-slide :is-active="ButtonNewSize">
    <div class="products-modal-size__new" v-show="ButtonNewSize">
      <button>הוסף</button>
      <input type="number" placeholder="new size" v-model.number="NewSize">
    </div>
  </base-translate-slide>

  <div class="products-modal-size__content">
    <ul class="nav nav-tabs ">

      <li class="nav-item" @click="setActive('2.1')" :class="{ active: isActive('2.1') }">
        <span class="nav-link">2.1</span>
      </li>

      <li class="nav-item" @click="setActive('2.3')" :class="{ active: isActive('2.3') }">
        <span class="nav-link">2.3</span>
      </li>

    </ul>
    <div class="tab-content py-3" id="myTabContent">

      <div class="tab-pane fade" :class="{ 'active show': isActive('2.1') }">
        <div>
          <table>
            <thead>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" v-model="selectFirst">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>מידה</td>
                <td>מקום סידורי</td>
                <td>גודל סוכה</td>
                <td>ברירת מחדל</td>

              </tr>
            </thead>
            <tbody>

              <tr v-for="s in sizes['2.1']" :key="s">

                <td>
                  <label>
                    <input type="checkbox" v-model="SelectedFirstList" :value="s.id">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>
                  <span> {{ s.width }}</span>
                </td>
                <td>
                  <label class="select-num">
                    <select @change="UpdateSort($event.target.value, s)" v-model.number="s.sorting">
                      <option v-for="sort in sizes['2.1'].length" :key="sort" :value="sort">
                        {{ sort }}
                      </option>
                    </select>
                  </label>
                </td>

                <td>
                  <label class="radio">
                    <input type="radio" name="byDefault2.1" @change="SetDefault(s)" :checked="s.by_default">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>
                  <span @click="updateSize(s)">
                    <img src="@img/icons/show.svg" alt="" v-if="s.status">
                    <img src="@img/icons/notshow.svg" alt="" v-else>
                    להסתיר
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      <div class="tab-pane fade" :class="{ 'active show': isActive('2.3') }">
        <div>
          <table>
            <thead>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" v-model="selectLast">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>מידה</td>
                <td>מקום סידורי</td>
                <td>גודל סוכה</td>
                <td>ברירת מחדל</td>

              </tr>
            </thead>
            <tbody>

              <tr v-for="s in sizes['2.3']" :key="s">

                <td>
                  <label>
                    <input type="checkbox" v-model="SelectedLastList" :value="s.id">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>
                  <span> {{ s.width }}</span>
                </td>
                <td>
                  <label class="select-num">
                    <select @change="UpdateSort($event.target.value, s)" v-model.number="s.sorting">
                      <option v-for="sort in sizes['2.3'].length" :key="sort" :value="sort">
                        {{ sort }}
                      </option>
                    </select>
                  </label>
                </td>

                <td>
                  <label class="radio">
                    <input type="radio" name="byDefault" @change="SetDefault(s)" :checked="s.by_default">
                    <span class="fake"></span>
                  </label>
                </td>
                <td>
                  <span @click="updateSize(s)">
                    <img src="@img/icons/show.svg" alt="" v-if="s.status">
                    <img src="@img/icons/notshow.svg" alt="" v-else>
                    להסתיר
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div class="products-modal-size__btns">
      <div class="products-modal-size__btns-btn btn" @click="store">
        Save
      </div>
      <base-translate-slide :is-active="SelectedFirstList.length > 0 || SelectedLastList.length > 0">
        <div class="products-modal-size__btns-btn btn" @click="DeleteSize" v-if="SelectedFirstList.length > 0 || SelectedLastList.length > 0" >
          Delete
        </div>
      </base-translate-slide>


    </div>
  </div>

</template>

<script>

import { mapActions } from "vuex";
import BaseTranslateSlide from '@backend/components/BaseTranslateSlide'

export default {
  name: "StrSize",

  components: { BaseTranslateSlide },

  emits: ['FilterSizes'],
  data: () => ({
    activeItem: '2.1',
    SelectedFirstList: [],
    SelectedLastList: [],
    SelectedFileList: [],
    NewSize: null
  }),
  props: {
    sizes: {},
    ButtonNewSize: false,
    category_id: null
  },

  computed: {
    size() {
      return this.sizes[this.activeItem] || []
    },
    selectFirst: {
      get() {
        return this.size.length === this.SelectedFirstList.length
      },
      set(value) {
        this.SelectedFirstList = value ? this.size.map(i => i.id) : []
      }
    },

    selectLast: {
      get() {
        return this.size.length === this.SelectedLastList.length
      },
      set(value) {
        this.SelectedLastList = value ? this.size.map(i => i.id) : []
      }
    },
  },

  methods: {

    ...mapActions([
      'category/updateSize',
      'category/deleteSize',
      'category/createSize'
    ]),

    isActive(menuItem) {
      return this.activeItem == menuItem
    },

    setActive(menuItem) {
      this.size = this.sizes[menuItem]
      this.activeItem = menuItem
    },

    updateSize(size) {
      size.status = !size.status
      this.update(size)
    },

    UpdateSort(evt, size) {
      size.sorting = evt
      this.update(size)
    },

    SetDefault(size) {
      size.by_default = true
      this.update(size)
    },

    async DeleteSize() {
      let ids = this.activeItem === '2.1' ? 'SelectedFirstList' : 'SelectedLastList'
      await this['category/deleteSize'](this[ids])
      this.$emit('FilterSizes', this.category_id)
      this[ids] = []
    },

    async store() {

      let size = {
        width: this.NewSize,
        height: parseFloat(this.activeItem),
        category_id: this.category_id
      }
      await this['category/createSize'](size)
      this.$emit('FilterSizes', this.category_id)
      this.NewSize = null
    },

    update(size) {
      this['category/updateSize'](size)
    }

  }



}
</script>

<style >

.products-modal-size table td label.select-num::before{
  left: 28px;
}

.nav-link {
  cursor: pointer;
  justify-content: flex-start;
}

.nav-item {
  background: #286b9e;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  color: #fff;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  /* Абсолютное позиционирование */
  left: 20px;
  bottom: -20px;
  /* Положение треугольника */
  border: 10px solid transparent;
  /* Прозрачные границы */
  border-top: 10px solid #fff;
  /* Добавляем треугольник */
}
</style>