<script>
    import Avatar from "./Avatar.svelte";

    export let avatarImage = '';
    export let text = '';
    const messageClasses = avatarImage ? "message" : "message message--personal"
</script>

<style lang="scss">
  .message {
    display: flex;
    align-items: center;
    margin-top: 25px;

    &:first-child {
      margin-top: 0;
    }

    &--personal {
      justify-content: flex-end;
      margin-top: 25px;
    }

    &--personal &__text {
      color: white;
      margin-left: 0;
      background: var(--primary-color);
    }

    &__text {
      font-family: 'Roboto-Regular';
      background: var(--secondary-color);
      color: #000;
      font-size: 1.375rem;
      padding: 20px;
      border-radius: 25px;
      border-bottom-left-radius: 0;
      margin-left: 20px;
    }
  }
</style>

<div class={messageClasses}>
    {#if avatarImage}
        <Avatar imageUrl={avatarImage}/>
    {/if}

    <p class="message__text">
        {text}
    </p>
</div>

