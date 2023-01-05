<script lang="ts">

    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    export let imageUrl;
    export let name;
</script>


<style lang="scss">
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
</style>

<div class="layout">
    <Header name={name} imageUrl={imageUrl} />
    <slot/>
    <Footer />
</div>