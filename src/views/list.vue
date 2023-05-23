<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="活动名称"></el-table-column>
      <el-table-column prop="region" label="活动区域"></el-table-column>
      <el-table-column prop="date" label="活动时间" width="180"></el-table-column>
      <el-table-column prop="delivery" label="是否即时配送">
        <template slot-scope="scope">
            {{ scope.row.delivery }}
        </template>
      </el-table-column>
      <el-table-column prop="type" label="活动性质"></el-table-column>
      <el-table-column prop="resource" label="特殊资源"></el-table-column>
      <el-table-column prop="desc" label="活动形式"></el-table-column>
    </el-table>
</template>

  <script>
    export default {
      data() {
        return {
          tableData: []
        }
      },
      created() {
        this.getList()
      },
      methods: {
        getList() {
            let url = 'http://www.baidu.com'
            fetch(url).then((res) => {
                this.tableData = res?.data || []
            }).catch((error) => {
                console.log(error)
                this.tableData = [{
                    name: '名称',
                    region: '区域',
                    date: '时间',
                    delivery: false,
                    type: ['性质'],
                    resource: '资源',
                    desc: '形式'
                }]
            })
        }
      }
    }
  </script>