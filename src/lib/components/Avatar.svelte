<script lang="ts">
    export let imageUrl;
    export let width;
    export let height;

    const avatarWidth = width || '50px'
    const avatarHeight = height || '50px'
</script>

<style lang="scss">
    .avatar {

      &__img {
        border-radius: 50%;
      }
    }

</style>

<div class="avatar" style="width: {avatarWidth}; height: {avatarHeight}; min-width: {avatarWidth}; min-height: {avatarHeight}">
    <img width="100%" class="avatar__img" src="{imageUrl}" alt="Avatar logo">
</div>