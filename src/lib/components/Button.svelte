<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()

    function handleClick() {
        dispatch('click')
    }
</script>

<style>
    .button {
        background: none;
        cursor: pointer;
        border: none;
    }
</style>

<button on:click={handleClick} class={`button ${$$props.class}`}>
    <slot/>
</button>