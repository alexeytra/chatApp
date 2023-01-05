<script>
    import Avatar from "./Avatar.svelte";

    export let imageUrl;
    export let name;
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    padding: 15px 20px;
    margin-top: 20px;

    &__title {
      font-family: 'Roboto-Regular';
      font-size: 1.875rem;
      color: #000;
    }
  }

</style>

<header class="header">
    <Avatar imageUrl={imageUrl}/>
    <h3 class="header__title">{name}</h3>
</header>