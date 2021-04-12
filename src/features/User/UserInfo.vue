<template>
  <div class="user-info">
    <b-card
      header="Thông tin cá nhân"
      header-tag="header"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p>Thông tin nhân viên</p>
            <table class="table table-border">
              <tr>
                <td>Họ và tên</td>
                <td>Vũ Thanh Hà</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <p>Thông tin nhóm dự án</p>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      fields: [
        {
          key: 'key',
          label: 'Thông tin'
        },
        {
          key: 'value',
          label: 'Giá trị'
        }
      ],
      items: [
        {
          'key': 'Họ và tên',
          'value': 'Vũ Thanh Hà'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.table-info {
  tr {
    td {
      border: 1px solid #e3e3e3;
    }
  }
}
</style>