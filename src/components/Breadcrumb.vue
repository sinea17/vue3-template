<template>
	<div class="breadcrumb">
		<el-breadcrumb separator=">">
			<transition-group name="breadcrumb" mode="out-in">
				<el-breadcrumb-item v-for="item in matched" :key="item.path" :to="{ path: item.path }">
					{{ item.meta.title }}
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const matched = computed(() => route.matched.filter(item => item.meta && item.meta.title));
</script>

<style lang="scss" scoped>
.breadcrumb {
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	border-bottom: 1px solid #E6E6E6;
	box-sizing: border-box;
	background: #fff;

	.el-breadcrumb {
		font-size: 12px;
	}

	:deep(.el-breadcrumb__separator) {
		margin: 0 8px;
	}

	:deep(.el-breadcrumb__inner) {
		font-weight: normal;
	}
}
</style>