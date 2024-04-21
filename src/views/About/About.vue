<template>
    <div class="container pt-[140px]">
        <div class="flex justify-between">
            <div class="flex flex-col  justify-center items-start w-[45%]">
                <h3 class="text-[54px] font-semibold font-inter mb-10">
                    Our Story
                </h3>
                <p class=" font-poppins text-base font-normal mb-6">Launced in 2015, Exclusive is South Asia’s premier
                    online shopping makterplace with an active
                    presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                    Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                </p>
                <p class=" font-poppins text-base font-normal">Exclusive has more than 1 Million products to offer,
                    growing at a very fast. Exclusive offers a
                    diverse assotment in categories ranging from consumer.
                </p>
            </div>
            <div>
                <img class=" object-cover object-center h-[550px] w-[550px]" src="@/assets/img/SideImage.svg" alt="">
            </div>
        </div>
        <div class=" flex justify-between my-28">
            <div v-for="item in Carts"
                class="box h-[230px] w-[270px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex flex-col items-center ">
                    <div
                        class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                        <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                            <component :is="item?.icon" class="text-white h-10 w-10" />
                        </div>
                    </div>
                    <h4 class=" font-poppins font-semibold text-[32px] mb-3">
                        {{ item?.title }}
                    </h4>
                    <p class=" font-poppins font-normal text-base">{{ item?.text }}</p>
                </div>
            </div>
        </div>
        <div class=" flex flex-col ">
            <div class="flex justify-between">
                <div class="card ">
                    <div class="w-[370px] h-[430px] bg-[#f5f5f5] flex justify-center items-end rounded">
                        <img class=" object-cover object-center" src="@/assets/img/image46.svg" alt="">
                    </div>
                    <div class="flex flex-col mt-8">
                        <h3 class="mb-2 text-[32px] font-medium font-inter">Tom Cruse</h3>
                        <p class="mb-4 text-base font-normal font-poppins">Founder & Chairman</p>
                        <div class="flex gap-4">
                            <IcFacebook class="h-6 w-6" />
                            <AkInstagramFill class="h-6 w-6" />
                            <ReLinkedinLine class="h-6 w-6" />
                        </div>
                    </div>
                </div>
                <div class="card ">
                    <div class="w-[370px] h-[430px] bg-[#f5f5f5] flex justify-center items-end rounded">
                        <img class=" object-cover object-center" src="@/assets/img/image51.svg" alt="">
                    </div>
                    <div class="flex flex-col mt-8">
                        <h3 class="mb-2 text-[32px] font-medium font-inter">Emma Watson</h3>
                        <p class="mb-4 text-base font-normal font-poppins">Managing Director</p>
                        <div class="flex gap-4">
                            <IcFacebook class="h-6 w-6" />
                            <AkInstagramFill class="h-6 w-6" />
                            <ReLinkedinLine class="h-6 w-6" />
                        </div>
                    </div>
                </div>
                <div class="card ">
                    <div class="w-[370px] h-[430px] bg-[#f5f5f5] flex justify-center items-end rounded">
                        <img class=" object-cover object-center" src="@/assets/img/image47.svg" alt="">
                    </div>
                    <div class="flex flex-col mt-8">
                        <h3 class="mb-2 text-[32px] font-medium font-inter">Will Smith</h3>
                        <p class="mb-4 text-base font-normal font-poppins">Product Designer</p>
                        <div class="flex gap-4">
                            <IcFacebook class="h-6 w-6" />
                            <AkInstagramFill class="h-6 w-6" />
                            <ReLinkedinLine class="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center my-20">
                <div class="flex justify-around  w-full">
                    <div class="flex flex-col items-center ">
                        <div
                            class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                            <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                                <LaShippingFastSolid class="text-white h-10 w-10" />
                            </div>
                        </div>
                        <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                            FREE AND FAST DELIVERY
                        </h4>
                        <p class=" font-poppins font-normal text-sm">Free delivery for all orders over $140</p>
                    </div>
                    <div class="flex flex-col items-center ">
                        <div
                            class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                            <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                                <ThHeadphoneAlt class="text-white h-10 w-10" />
                            </div>
                        </div>
                        <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                            24/7 CUSTOMER SERVICE
                        </h4>
                        <p class=" font-poppins font-normal text-sm">
                            Friendly 24/7 customer support
                        </p>
                    </div>
                    <div class="flex flex-col items-center ">
                        <div
                            class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                            <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                                <BsShieldCheck class="text-white h-10 w-10" />
                            </div>
                        </div>
                        <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                            MONEY BACK GUARANTEE
                        </h4>
                        <p class=" font-poppins font-normal text-sm">We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { BxStoreAlt, AnTwotoneDollar, FlShoppingBag, FaSackDollar, LaShippingFastSolid, ThHeadphoneAlt, BsShieldCheck, IcFacebook, ReLinkedinLine, AkInstagramFill } from "@kalimahapps/vue-icons";
const Carts = [
    {
        icon: BxStoreAlt,
        title: '10.5k',
        text: 'Sallers active our site',
    }, {
        icon: AnTwotoneDollar,
        title: '33k',
        text: 'Mopnthly Produduct Sale',
    }, {
        icon: FlShoppingBag,
        title: '45.5k',
        text: 'Customer active in our site',
    }, {
        icon: FaSackDollar,
        title: '25k',
        text: 'Anual gross sale in our site',
    },
]


</script>
