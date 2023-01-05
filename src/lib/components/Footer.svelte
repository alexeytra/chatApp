<script>

    import Button from "./Button.svelte";
    import SendIcon from "../../assets/send-icon.svg"
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 20px 25px;

    &__input {
      border: none;
      outline: none;
      font-family: 'Roboto-Regular';
      font-size: 17px;
      flex: .9;

      &::placeholder {
        color: #aeaeae;
      }
    }

    :global(.footer__btn) {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: var(--primary-color);
      padding: 15px 25px;
    }

    :global(.footer__btn-text) {
      font-family: 'Roboto-Regular';
      font-size: 17px;
      color: #fff;
      margin-right: 15px;
    }

    :global(.footer__btn-img) {
      width: 20px;
      height: 20px;
    }
  }
</style>

<footer class="footer">
    <input placeholder="Напишите сообщение" type="text" class="footer__input">
    <Button on:click={() => alert('sdsd')} class="footer__btn">
        <span class="footer__btn-text">
            Отправить
    </span>
        <img class="footer__btn-img" width="100%" src={SendIcon} />
    </Button>
</footer>