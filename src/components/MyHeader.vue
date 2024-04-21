<script setup>
import { AkHeart  , AkSearch , McShoppingCart2Line   } from "@kalimahapps/vue-icons";
</script>

<template>
    <header class="border w-full fixed top-0 z-40 border-b-black/30 ">
        <div class="h-12 bg-gradient-to-r from-[#4b5563] to-[#030712] flex items-center  text-white  w-full  ">
            <div class="container flex items-center justify-end gap-28">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a></p>
                <select class="bg-transparent outline-none border-none">
                    <option class="" value="">English</option>
                    <option value="">Russian</option>
                </select>
            </div>
        </div>
        <div class=" bg-white h-[94px] container flex items-center justify-between border-b-black/30">
            <h2 class=" text-2xl font-bold">Exclusive</h2>
            <nav class=" flex gap-12">
                <RouterLink class="text-base font-poppins font-normal text-center" to="/">Home</RouterLink>
                <RouterLink class="text-base font-poppins font-normal text-center" to="/contact">Contact</RouterLink>
                <RouterLink class="text-base font-poppins font-normal text-center" to="/about">About</RouterLink>
                <RouterLink class="text-base font-poppins font-normal text-center" to="/">Sign Up</RouterLink>
            
            </nav>
            <div class="flex items-center gap-6">
                <div class="relative">
                    <input class=" border-none bg-[#f5f5f5] py-[7px] px-5 rounded focus:outline-none placeholder:text-xs"
                        placeholder="What are you looking for?" type="text">
                    <AkSearch  class="h-6 w-6 absolute top-1/4 right-1 text-black" />
                </div>
                <a href="#">
                    <AkHeart  class="h-6 w-6 text-black bg-transparent" />
                </a>
                <a href="#">
                    <McShoppingCart2Line  class="h-6 w-6 text-black" />
                </a>
            </div>
        </div>
    </header>

</template>