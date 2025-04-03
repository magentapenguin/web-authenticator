<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="container mx-auto px-4 py-8 flex-1">
	{@render children()}
</main>
