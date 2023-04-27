<script>
import { navLinks } from '../../constatnts/navLinks';

    export default{
        data(){
            return{
                navLinks: navLinks
            }
        }
    };
</script>

<template>
    <div class="sidebar w-[250px] shadow-lg min-h-screen relative bg-purple-200">
        <a href="#" class="logo text-center text-2xl p-3 block font-bold">CRUD OPERATIONS</a>
        <div class="card items-center">
            <img src="../../images/pexels-photo-2379004 1.png" alt="rasm" class="rounded-full w-[141px] h-[141px] m-auto mt-10">
            <h1 class="text-center mt-5 font-bold">Karthi Madesh</h1>
            <p class="text-center text-yellow-500 font-bold">Admin</p>
        </div>
        <ul class="list w-[193px] h-[497px] m-auto mt-10">
            <li class="list_item p-4 shadow my-2 rounded-md bg-purple-50 hover:bg-yellow-300 duration-100 hover:text-black" v-for="el in navLinks">
                <a :href="el.link" class="list_item--link text-sm font-bold">
                    <i :class="el.icon"></i><span class="ms-4">{{ el.title }}</span>
                </a>
            </li>
            <div class="mt-10 font-bold  hover:bg-yellow-300 duration-100 shadow p-4 rounded-md  bg-purple-50"><a href="#" class="m-auto font-bold">Logout</a><i class='bx bx-log-out ms-20'></i></div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>