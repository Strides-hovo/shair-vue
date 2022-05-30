<template>

    <file-manager></file-manager>

</template>

<script>

    export default {
        name: "Library",
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