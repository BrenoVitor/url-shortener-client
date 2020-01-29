<template>
  <section>
      <Title title="Url Shortener"></Title>
          <ValidationObserver ref="form">
      <form @submit.prevent="shorter()" name="form" id="form">
        <Row>
          <ColLg>
        <FormGroup>
          <Label for="url" title="URL"></Label>
          <ValidationProvider name="address" rules="required" v-slot="{ errors }">
           <Input type="url" name="address" id="address" v-model="urlOriginal.address" />
            <span class="alert alert-danger d-print-inline-flex" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
        </FormGroup>  
      </ColLg>
        </Row>
        <Clear></Clear>
        <Row>
         <ColLg>
        <FormGroup>
        <ButtonInfo name="btn-shortener" id="btn-shortener" type="submit" title="Shorten"></ButtonInfo>
        <div class="clear"></div>
      </FormGroup>
    </ColLg>
  </Row>
     <Clear></Clear>
        <Row>
         <ColLg>
        <FormGroup>
                  <a class="alert alert-info alert-url-shortener form-control" :href="presentationAddress" v-if="urlShortened.shortenedAddress">{{ presentationAddress }}</a>
</FormGroup>
</ColLg>
</Row>
      </form>
    </ValidationObserver>
    </section>
</template>

<script>
import UrlOriginal from '../../models/UrlOriginal.js';
import UrlShortened from '../../models/UrlShortened.js';
import UrlService from '../../services/UrlService.js';

import Label from '../shared/label/Label.vue';
import Input from '../shared/input/Input.vue';
import FormGroup from '../shared/form-group/FormGroup.vue';
import ButtonInfo from '../shared/button-info/ButtonInfo.vue';
import Row from '../shared/row/Row.vue';
import ColLg from '../shared/col-lg/ColLg.vue';
import Clear from '../shared/clear/Clear.vue';
import Title from '../shared/title/Title.vue';



export default {
  name: 'UrlShortener',
  components: { Label: Label, Input: Input, FormGroup: FormGroup, ButtonInfo: ButtonInfo, Row: Row, ColLg: ColLg, Clear: Clear, Title: Title },
  data() {
    return {
      urlOriginal: new UrlOriginal(),
      urlShortened: new UrlShortened(),
      urlService: new UrlService(this.$resource),
      domain: "",
      presentationAddress: ""
    }
  },
  methods: {
    shorter() {
            this.$refs.form.validate().then(success => {
if (!success || !this.urlOriginal || !this.urlOriginal.address ) {
          this.flashMessage.error({
            title: "Invalid URL!",
            message:
              "Please check the sent URL"
          });
          return;
        }
      this.urlService.shorter(this.urlOriginal).then(response => {
        console.log(response.url);
        this.urlShortened = response.body;
        console.log(this.urlShortened);
        this.domain = response.url;
        this.presentationAddress=`${this.domain}/${this.urlShortened.shortenedAddress}`;
      }, response => {
        this.flashMessage.error({
            title: "Shortenation Error!",
            message:
              `an error occurred while shortening the url: response status: ${response.status}, body: ${response.body}`
          });
      });
    });
    }
  }
};
</script>

<style scoped>
.clear {
  clear: both;
}
.alert-url-shortener {
  display: inline-table;
  padding: 10px;
  margin-top: 20px !important;
}
.d-print-inline-flex{
  margin-top: 10px;
  display: inline-flex;
}
</style>
