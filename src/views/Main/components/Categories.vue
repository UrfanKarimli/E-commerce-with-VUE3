<template>
    <section class=" container flex flex-col mt-24 gap-10">
        <div class="todays flex gap-4 items-center">
            <span class=" w-5 h-10 rounded bg-gradient-to-r from-sky-400 to-blue-600 "></span>
            <p
                class=" text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-xl font-bold font-poppins">
                Categories</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Browse By Category
                </h3>
            </div>

        </div>
        <div class=" flex justify-between">
            <div v-for="item in Box"
                class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <component :is="item?.icon" class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base"> {{ item?.title }} </span>
                </div>
            </div>
        </div>
        <hr class="my-10">
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, BsPhone, HiComputerDesktop, IoOutlineWatch, CaCamera, FlHeadphones, IcGamepad } from "@kalimahapps/vue-icons";

const Box = [
    {
        title: 'Phones',
        icon: BsPhone,
    }, {
        title: 'Computers',
        icon: HiComputerDesktop,
    }, {
        title: 'SmartWatch',
        icon: IoOutlineWatch,
    }, {
        title: 'Camera',
        icon: CaCamera,
    }, {
        title: 'HeadPhones',
        icon: FlHeadphones,
    }, {
        title: 'Gaming',
        icon: IcGamepad,
    }
]
</script>
