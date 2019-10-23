<template>
    <div>
        <client-only>
            <notifications group="alerts" position="bottom right"></notifications>
        </client-only>
        <top-nav />
        <nuxt/>
    </div>
</template>

<script>
import TopNav from "./partials/TopNav";

export default {
    components: {
        TopNav
    }
};
</script>
