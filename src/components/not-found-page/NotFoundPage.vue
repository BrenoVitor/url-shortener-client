<template>
	<section class="container">
		<article>
        <header class="row">
        <div class="col-lg">
		<Title title="Page not found!"></Title>
	</div>
		</header>
		<main class="row">
		<div class="col-lg">
			<p>Please go back to Home page</p>
		</div>
		</main>
		<footer class="row">
		<div class="col-lg">
		<router-link :to="{name: 'UrlShortener'}"><ButtonInfo id="btn-back" name="btn-back" title="Back" :confirmActionEnabled="false"></ButtonInfo></router-link>
	</div>
	</footer>
	</article>
	</section>
</template>

<script>
import ButtonInfo from "../shared/button-info/ButtonInfo.vue";
import Title from "../shared/title/Title.vue";


export default {
  name: "NotFoundPage",
  components: { ButtonInfo: ButtonInfo, Title: Title }
};
</script>

<style scoped></style>
