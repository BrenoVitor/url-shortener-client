<template>
	<footer id="footer">
		<div class="container-fluid">
		<div class="row">
			<div class="col-lg">
				<h4>© Copyright {{company}}</h4	>
			</div>
		</div>
	</div>
	</footer>
</template>

<script>

export default {
  name: "Footer",
  props: [ "company" ]
};
</script>

<style scoped>
	#footer {
		background: #17a2b8;
		border-color: #17a2b8;
		margin-top: 50px;
		width: 100%;
		color: #fff;
		padding: 20px;
		text-align: center;	
	}
</style>
