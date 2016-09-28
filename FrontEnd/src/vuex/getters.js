export default {
  notelist: function (state){
      var current_notebook = state.current_notebook
      // 选择当前账本 当前选择日期的记录数组
      var arrIdx = state.notebook[current_notebook].bill_array[state.select_date].record_arr_idx
      var arr = []
      arrIdx.forEach(function(val, idx){
        arr.push(state.record[val - 1]);
      })
      return arr
  },
  bill_array: function (state){
      var current_notebook = state.current_notebook
      return state.notebook[current_notebook].bill_array
  },
  current_notebook: function(state){
    return state.current_notebook
  },
  select_date: function(state){
    return state.select_date
  }
}
