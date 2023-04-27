<script>
    export default{name: "Header", props: {toggle: Function}};
</script>

<template>
    <header class="shadow w-[1170] h-[60]">
        <nav class="flex justify-between">
            <div class="flex">
                <button  @click="toggle" class="ms-80 text-3xl absolute left-0 top-3 w-[36px] h-[36px] rounded-lg focus:ring-1"><i class='bx bxs-left-arrow-circle'></i></button>
            </div>
            <div class="flex">
                <input type="text" class="absolute right-20 top-3 w-[212px] h-[37px] rounded-lg ps-4 border-2 border-gray-500" placeholder="Search">
                <a href="#"><i class="bx bx-search absolute right-20 mt-4 mr-2 text-2xl text-gray-500"></i></a>
            </div>
            <div>
                <i class="bx bx-bell absolute right-5 mt-3 text-3xl text-gray-500"></i>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
</style>