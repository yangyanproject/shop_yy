<template>
  <div class="pagination">
    <button :disabled="currentPageNo > 1" @click="$emit('changePageNo', 1)">
      上一页
    </button>
    <button v-if="startEnd.start !== 1" @click="$emit('changePageNo', 1)">
      1
    </button>
    <button v-if="startEnd.start > 2" @click="$emit('changePageNo', page)">
      ···
    </button>

    <button
      v-for="page in startEnd.end"
      v-if="page >= startEnd.start"
      :key="page"
      :class="{ active: currentPageNo === page }"
      @click="$emit('changePageNo', page)"
    >
      {{ page }}
    </button>

    <button v-if="startEnd.end <totalPage - 1">···</button>
    <button
      v-if="startEnd.end !== totalPage"
      @click="$emit('changePageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="currentPageNo === totalPage"
      @click="$emit('changePageNo', currentPageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPageNo: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 3,
    },
    contiueNo: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    // 计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      let start = 0;
      let end = 0;
      let { totalPage, currentPageNo, contiueNo } = this;
      if (totalPage <= contiueNo) {
        (start = 1), (end = totalPage);
      } else {
        start = currentPageNo - Math.floor(contiueNo / 2);
        end = currentPageNo + Math.floor(contiueNo / 2);
        if (start <= 1) {
          start = 1;
          end = contiueNo;
        }
        if (end >= totalPage) {
          end = totalPage;
          start = end - contiueNo + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>