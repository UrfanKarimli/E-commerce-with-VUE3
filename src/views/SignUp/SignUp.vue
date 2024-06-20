<template>
    <div class="py-16">
        <div class="relative">
            <div class="absolute left-0 top-0 w-[50%] h-[100%] flex items-start justify-start">
                <div class="bg-[url(@/assets/img/SideImage2.svg)] bg-no-repeat bg-cover w-full h-full"></div>
            </div>
            <div class=" container flex items-center min-h-screen">
                <div class=" w-1/2 h-full">
                </div>
                <div class="w-1/2 my-auto   flex  justify-center">
                    <div class="w-[370px] flex flex-col gap-12">
                        <div class="flex flex-col gap-6">
                            <h3 class=" font-medium text-4xl font-inter">Create an account</h3>
                            <p class=" font-poppins text-base font-normal">Enter your details below</p>
                        </div>
                        <form class="flex flex-col gap-12">
                            <FloatLabel class="border-b border-b-black border-opacity-20 text-black/60">
                                <InputText class="w-full bg-transparent border-none focus:ring-0  " id="username" />
                                <label class="" for="username">Name</label>
                            </FloatLabel>
                            <FloatLabel class=" border-b border-b-black border-opacity-20 text-black/60">
                                <InputText class="w-full bg-transparent border-none focus:ring-0  " id="Email" />
                                <label for="Email">Email or Phone Number</label>
                            </FloatLabel>
                            <FloatLabel class=" border-b border-b-black border-opacity-20 text-black/60 ">
                                <Password
                                    class="w-full bg-transparent border-none focus:[&>input]:ring-0  [&>input]:border-none"
                                    :feedback="false" />
                                <label for="username">Password</label>
                            </FloatLabel>
                            <div class="flex flex-col gap-2">
                                <Button class="border-none py-4 rounded bg-[#DB4444] hover:bg-[#ff6868]"
                                    label="Create Account" />
                                <button class="border py-4 rounded flex items-center justify-center ">
                                    <DeGoogleOriginal class="mr-[10px] text-2xl" /> Sign up with Google
                                </button>
                            </div>

                            <div class="flex justify-center">
                                <span class="font-poppins text-base font-normal">Already have account? <a href="#">Log
                                        in</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { DeGoogleOriginal } from '@kalimahapps/vue-icons';
</script>

<style lang="scss" scoped></style>