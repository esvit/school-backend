<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">
            Test
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <el-menu class="mr-auto" :router="true" :default-active="activeLink" mode="horizontal">
                <template v-for="rule in $router.options.routes" v-if="rule.title">
                    <el-submenu v-if="rule.children && rule.children.length > 0" :index="rule.path">
                        <template slot="title"><i :class="rule.icon"></i>{{ rule.title }}</template>
                        <el-menu-item v-for="child in rule.children" :index="rule.path + '/' + child.path">{{ child.title }}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="rule.path"><i :class="rule.icon"></i> {{ rule.title }}</el-menu-item>
                </template>
            </el-menu>

        </div>
    </nav>
</template>

<style>
    .el-menu.el-menu--horizontal {
        background: transparent;
        border-bottom: 0 none;
        margin: -0.5rem 0;
    }
    .navbar-brand {
        width: 200px;
        padding: 0;
    }
</style>
<script>
export default {
    components: {
    },
    data() {
        return {
            activeLink: null
        };
    },
    events: {
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.activeLink = to.path
            })
        },
        beforeRouteUpdate (to, from, next) {
            this.activeLink = to.path;
            next()
        },
    }
};
</script>
