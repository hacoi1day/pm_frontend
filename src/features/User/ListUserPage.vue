<template>
  <div>
    <b-card
      header="Danh sách nhân viên"
      header-tag="header"
    >
      <b-container fluid>
        <b-row>
          <b-col sm="12">
            <b-table-simple id="table-data">
              <b-thead>
                <b-tr>
                  <b-th>#</b-th>
                  <b-th>Tên Nhân viên</b-th>
                  <b-th>Email</b-th>
                  <b-th>Số điện thoại</b-th>
                  <b-th>Ngày sinh</b-th>
                  <b-th>Phòng ban</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in items" :key="index">
                  <b-td>{{ item.id }}</b-td>
                  <b-td>{{ item.name }}</b-td>
                  <b-td>{{ item.email }}</b-td>
                  <b-td>{{ item.phone }}</b-td>
                  <b-td>{{ item.birthday | filterDate }}</b-td>
                  <b-td>{{ item.department }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <span>Trang: {{ currentPage }}/{{ lastPage }} (tổng bản ghi: {{ total }})</span>
            <b-pagination
              class="float-right"
              v-model="currentPage"
              :total-rows="total"
              :per-page="10"
              aria-controls="table-data"
            ></b-pagination>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import moment from 'moment';
import { listUser } from '../../apis/user';
export default {
  name: 'user-list',
  data () {
    return {
      currentPage: 1,
      lastPage: 1,
      items: [],
      total: 0
    };
  },
  mounted () {
    this.getUsers();
  },
  watch: {
    currentPage (value) {
      this.getUsers(value)
    }
  },
  methods: {
    async getUsers () {
      this.$Progress.start();
      const {data, last_page, total} = await listUser(this.currentPage);
      this.$Progress.finish();
      this.items = data;
      this.lastPage = last_page;
      this.total = total;
    }
  },
  filters: {
    filterDate (date) {
      if (date) {
        return moment(date).format('DD/MM/YYYY');
      }
      return date;
    }
  }
}
</script>

<style>

</style>