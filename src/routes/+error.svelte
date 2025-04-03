<script lang="ts">
    import { page } from "$app/state";
    const back = () => {
        window.history.back();
    };
</script>
<h1 class="text-4xl font-bold mb-4 text-center">Uh Oh!</h1>
<p class="text-lg mb-8">An error occurred while loading the page.</p>
<a href="/" class="text-blue-500 hover:underline cursor-pointer block">Go to the homepage</a>
<button on:click={back} class="text-blue-500 hover:underline cursor-pointer block">Go back</button>
<p class="text-lg mb-8">{page.status}: {page.error!.message}</p>