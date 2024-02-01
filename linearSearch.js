function linearSearch(searchTerm, arr) {

  for(index in arr){
    if(arr[index] === searchTerm){
      return +(index)
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  ans = []
  for(index in arr){
    if(arr[index] === searchTerm){
      ans.push(+(index))
    }
  }
  return ans;
}

module.exports = { linearSearch, globalLinearSearch };
