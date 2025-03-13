<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
            <img src="../assets/logoipsum-288.svg" class="h-7" alt="Logo Ipsum">
        </div>
        <ul class="flex justify-end space-x-6 mr-30">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComp'
}
</script>