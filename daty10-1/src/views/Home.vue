<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-13 16:12:51
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-14 14:53:22
 * @Description: 
 -->
<template>
  <div class="home">
    <el-container class="box">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <template>
            <el-button type="primary" plain @click="dialogFormVisible = true">添加</el-button>
            <el-dialog title="添加地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="评论" :label-width="formLabelWidth">
                  <el-input v-model="form.remark" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型" :label-width="formLabelWidth">
                  <el-input v-model="form.type" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="排序" :label-width="formLabelWidth">
                  <el-input v-model="form.sort" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="时间" :label-width="formLabelWidth">
                  <el-input v-model="form.time" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
              </div>
            </el-dialog>
            <el-table
              :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="id" prop="id"></el-table-column>
              <el-table-column label="remark" prop="remark"></el-table-column>
              <el-table-column label="sort" prop="sort"></el-table-column>
              <el-table-column label="type" prop="type"></el-table-column>
              <el-table-column label="time" prop="time"></el-table-column>
              <el-table-column align="right">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="begin"
                :page-sizes="[2, 3, 5, 10]"
                :page-size="number"
                layout="total, sizes, prev, pager, next, jumper"
                :total="sum"
              ></el-pagination>
            </div>
          </template>
        </el-main>
      </el-container>
    </el-container>
    <template>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
    </template>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      search: "",
      sum: 0,
      number: 2,
      begin: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        remark: "",
        type: "",
        sort: "",
        time: ""
      },

      id: null,
      formLabelWidth: "120px"
    };
  },
  computed: {},
  methods: {
    add() {
      let url = "";
      if (this.id) {
        url = "/api/update";
      } else {
        url = "/api/add";
      }
      this.dialogFormVisible = false;
      Axios.post(url, { ...this.form,id:this.id }).then(res => {
            console.log(res.data)
        if (res.data.code === 1) {
          this.AxiosLimit();
          this.form = {
            remark: "",
            type: "",
            sort: "",
            time: ""
          };
      
          this.$message({
            dangerouslyUseHTMLString: true,
            message: res.data.msg
          });
          this.id=null; 
        }
      });
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form=row
      this.id = row.id;
    },
    handleDelete(index, row) {
      Axios.get(`/api/delete?id=${row.id}`).then(res => {
        if (res.data.code === 1) {
          this.$message({
            dangerouslyUseHTMLString: true,
            message: res.data.msg
          });
          this.AxiosLimit();
        }
      });
    },
    handleSizeChange(val) {
      this.number = val;
      this.AxiosLimit();
    },
    handleCurrentChange(val) {
      this.begin = val;
      this.AxiosLimit();
    },
    AxiosLimit() {
      Axios.get(`/api/limit?pagenum=${this.begin}&limit=${this.number}`).then(
        res => {
          this.sum = res.data.cum;
          this.tableData = res.data.msg;
        }
      );
    },
    openHTML() {}
  },
  created() {},
  mounted() {
    this.AxiosLimit();
  }
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
