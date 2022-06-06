## File Manager 

  1. replace CropperModule in path node_modules\laravel-file-manager\src\components\modals\additions\CropperModule.vue
  2. add computed Portions
  3. add method cropPortion
  4. add html <div class="input-group input-group-sm">
     <label class="input-group-text" for="dataHeight">Portion</label>
     <select class="custom-select form-control" @change="cropPortion($event)"><option :value="`${por.width},${por.height}`" v-for="(por,i) in Portions" :key="i">{{ `${por.width} x ${por.height}` }}</option></select><span class="input-group-text">px</span></div>
  5. add state Portion
  6. icons replace in path node_modules\laravel-file-manager\src\components\blocks\NavbarBlock