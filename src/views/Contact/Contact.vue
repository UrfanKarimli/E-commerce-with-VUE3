<template>
    <div class=" container flex justify-between py-28">
        <div class="p-10 flex flex-col gap-8 w-[340px] shadow-md">
            <div class="flex flex-col gap-6">
                <div class=" flex items-center gap-4 text-base font-medium font-poppins">
                    <div
                        class=" bg-gradient-to-r from-sky-400 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <IoOutlineCall class=" h-5 w-5  text-white " />
                    </div>
                    Call To Us
                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-poppins text-sm font-normal">We are available 24/7, 7 days a week.</p>
                    <p class="font-poppins text-sm font-normal">Phone:+9940507564177</p>
                </div>
            </div>
            <hr class="w-full bg-black/50">
            <div class="flex flex-col gap-6">
                <div class=" flex items-center gap-4 text-base font-medium font-poppins">
                    <div
                        class=" bg-gradient-to-r from-sky-400 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <ByMail class=" h-5 w-5  text-white " />
                    </div>
                    Write To US
                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-poppins text-sm font-normal">Fill out our form and we will contact you within 24
                        hours.</p>
                    <p class="font-poppins text-sm font-normal">E-mail: urfankarim@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="w-[68%] p-10 shadow-md  flex flex-col bg-white gap-8 ">
            <div class="flex items-center justify-between">
                <span class="relative">
                    <FloatLabel>
                        <InputText id="name" v-tooltip.left="'Enter your name'" v-model="data.name"
                            class=" text-black font-poppins text-base font-normal bg-[#f8f5f5] transition-none h-[50px] w-[230px]  focus-visible:ring-0   border-none outline-none  " />
                        <label for="name" class="text-black font-poppins text-base font-normal">Your Name...</label>
                    </FloatLabel>
                </span>
                <span class="relative">
                    <FloatLabel>
                        <InputText id="name" v-tooltip.top="'Enter your mail'" v-model="data.mail"
                            class=" text-black font-poppins text-base font-normal bg-[#f8f5f5] transition-none h-[50px] w-[230px]  focus-visible:ring-0   border-none outline-none  " />
                        <label for="name" class="text-black font-poppins text-base font-normal">Your Email...</label>
                    </FloatLabel>
                </span>
                <span class="relative">
                    <FloatLabel>
                        <InputText id="name" v-tooltip.right="'Enter your phone'" v-model="data.phone"
                            class=" text-black font-poppins text-base font-normal bg-[#f8f5f5] transition-none h-[50px] w-[230px]  focus-visible:ring-0   border-none outline-none  " />
                        <label for="name" class="text-black font-poppins text-base font-normal">Your Phone...</label>
                    </FloatLabel>
                </span>
            </div>
            <div class="w-full">
                <Textarea v-tooltip.bottom="'Enter the massage'" placeholder="Your Massage" v-model="data.message"
                    rows="5" cols="30"
                    class="w-full min-h-[207px] text-black font-poppins text-base font-normal bg-[#f8f5f5] transition-none focus-visible:ring-0   border-none outline-none" />
            </div>
            <div class="flex justify-end">
                <Button @click="submitForm" type="submit"
                    class="text-base font-medium font-poppins py-4 px-12 transition-none border-none outline-none focus-visible:ring-0 focus:ring-0  bg-gradient-to-r from-sky-400 to-blue-600">
                    Send Massage
                </Button>
            </div>
        </div>
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <Card class="w-full">
                <template #title> {{ data.name }}</template>
                <template #subtitle> {{ data.mail }} </template>
                <template #footer> {{ data.phone }} </template>
                <template #content>
                    <p class="m-0">
                        {{ data.message }}
                    </p>
                </template>
            </Card>
        </Dialog>
    </div>
</template>

<script setup>
import { IoOutlineCall, ByMail } from "@kalimahapps/vue-icons";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import FloatLabel from 'primevue/floatlabel';

import { reactive, ref } from "vue";
import Card from "primevue/card";



const visible = ref(false);
const data = reactive({
    name: '',
    phone: '',
    mail: '',
    message: '',
})


const submitForm = () => {
    console.log('data', data)
    visible.value = true
};

</script>
