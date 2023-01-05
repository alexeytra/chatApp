<script>
    import ChatLayout from "../lib/components/ChatLayout.svelte";
    import Message from "../lib/components/Message.svelte";

    const imageUrl = 'images/girl-face.png';
    const name = 'Ketty Bell'
</script>

<style>
    .chat {
        width: 100%;
        height: calc(100vh - 260px);
        background: #fff;
        border-radius: 20px;
        padding: 20px;
        overflow: auto;
    }
</style>

<ChatLayout name={name} imageUrl={imageUrl}>
    <div class="chat">
        <Message avatarImage={imageUrl} text="lala lalalla" />
        <Message text="looogggg" />
    </div>
</ChatLayout>