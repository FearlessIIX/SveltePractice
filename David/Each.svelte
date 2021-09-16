<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
	let foxes = [
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FlFJdwsBje-XIJ5lneszNgHaEo%26pid%3DApi&f=1',
		'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FDesktop-cute-images-of-Foxes-download.jpg&f=1&nofb=1',
		'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.incrediblesnaps.com%2Fwp-content%2Fuploads%2F2013%2F03%2Fcute-fox-photographs-4.jpg&f=1&nofb=1'
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
	<!-- open each block -->
	{#each cats as cat}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li>
	{/each}
	<!-- close each block -->
</ul>
{#each foxes as fox}
	<img src={fox} alt="A Red Fox">
{/each}

<style>
	img {
		width: 300px
	}
</style>
