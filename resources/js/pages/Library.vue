<template>

    <file-manager :viewType="viewType" ></file-manager>

</template>

<script>

    export default {
        name: "Library",
        computed: {
            viewType() {
                return this.$store.state.fm[this.$store.state.fm.activeManager].viewType = 'grid';
            },
        }

    }
</script>


<style>
    [title~=Copy], [title~=Cut], [title~=Paste], [title~=Back], [title~=Forward], [title~=Hidden] {
        display: none;
    }

    .fm {
        width: 100%;
    }
</style>