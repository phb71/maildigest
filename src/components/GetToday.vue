<template>
<span>
  {{ this.today }}
</span>
</template>
<script>
export default {
  name: 'GetToday',
  data () {
    return {
      today: null
    }
  },

  mounted () {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const d = new Date()
    this.today = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
  }
}
</script>
