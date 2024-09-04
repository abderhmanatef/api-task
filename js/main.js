 let ap =new XMLHttpRequest()
 let row=document.querySelector(".row")
 let selectFood=document.querySelector("select")
 let search=document.querySelector("input")
 search.addEventListener("blur",function()
 {
  if(search.value==this.value)
    {
      getData(this.value)
    }
 })
 selectFood.addEventListener("change",function()
 {
  getData(this.value)
 })
 getData('pizza')
function getData(data)
{
  ap.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
  ap.send()
  ap.addEventListener("readystatechange",function () {
     if(ap.readyState==4)
       {
         let allData=JSON.parse(this.response);
         showData(allData.recipes)
       }
  })
}

 function showData(arr)
 {
  let cartona='';
  for(let i=0;i<arr.length;i++)
    {
        cartona+=` <div class="col-md-4">
         <img  class="w-100 m-2" src="${arr[i].image_url}" alt="">
         <p>${arr[i].title}</p>
         <p><b>${arr[i].recipe_id}</b></p>
         <p><b>${arr[i].publisher}</b></p>
         </div>`
    }
    row.innerHTML=cartona;
 }