<template>
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
        aria-controls="offcanvasExample">
        開
    </a>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/#register">記錄本(測試註冊用)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#login">群組(測試登錄用)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">筆記本</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">給宇宙的話</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

</script>

<style lang="scss" scoped></style>