<template>
    <footer class="bg-gradient-to-r from-sky-400 to-blue-600">
        <div class=" container pt-20 pb-[60px] flex items-start justify-between">
            <div class="flex flex-col gap-4">
                <h3 class=" text-2xl font-bold text-[#fafafa] font-inter">Exclusive</h3>
                <h3 class=" text-xl font-medium text-[#fafafa] font-inter">
                    Subscribe
                </h3>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Get 10% off your first order
                </span>
                <div class="relative">
                    <input
                        class=" h-12 border-[1.5px] bg-transparent py-[12px] pl-4 rounded outline-none  focus:outline-none placeholder:text-xs placeholder:text-white"
                        placeholder="Enter your email" type="text">
                    <AkSend  class="h-6 w-6 absolute top-1/4 right-1 cursor-pointer text-white" />
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class=" text-xl font-medium text-[#fafafa] font-inter">Support</h3>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    111 Bijoy sarani, Dhaka,
                    <br>
                    DH 1515, Bangladesh.
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    exclusive@gmail.com
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    +88015-88888-9999
                </span>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class=" text-xl font-medium text-[#fafafa] font-inter">Account</h3>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    My Account
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Login / Register
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Cart
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Wishlist
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Shop
                </span>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class=" text-xl font-medium text-[#fafafa] font-inter">Quick Link</h3>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Privacy Policy
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Terms Of Use
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    FAQ
                </span>
                <span class="text-base font-normal font-poppins text-[#fafafa]">
                    Contact
                </span>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class=" text-xl font-medium text-[#fafafa] font-inter">Download App</h3>
                <span class="text-xs font-medium text-[#fafafa]">Save $3 with App New User Only</span>
                <div class="flex">
                    <div>
                        <img src='../assets/img/Qrcode1.svg' alt="">
                    </div>
                    <div>
                        <a class="overflow-hidden" href="#">
                            <img src='../assets/img/GooglePlay.svg' alt="">
                        </a>
                        <a class="overflow-hidden" href="#">
                            <img src='../assets/img/AppStore.svg' alt="">
                        </a>
                    </div>
                </div>
                <ul class="flex gap-6 items-end">
                    <li>
                        <CgFacebook class="h-7 w-7 text-[#fafafa]" />
                    </li>
                    <li>
                        <AkInstagramFill  class="h-6 w-6 text-[#fafafa]" />
                    </li>
                    <li>
                        <AkLinkedInFill  class="h-6 w-6 text-[#fafafa]" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t  border-t-black/40 h-16 flex items-center justify-center">
            <p class="text-[#fafafa]"> @ Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
</template>

<script setup>
import { CgFacebook , AkInstagramFill , AkLinkedInFill , AkSend   } from "@kalimahapps/vue-icons";

</script>
