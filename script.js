let total = 0
function handleClick1(target){
   const itemsName = (document.getElementById('card-1').innerText)
   console.log(itemsName)
   console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price1').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute  ('disabled')
   }


}

function handleClick2(target){
   const itemsName = (document.getElementById('card-2').innerText)
   console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price2').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute  ('disabled')
   }

}
 
function handleClick3(target){
   const itemsName = (document.getElementById('card-3').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price3').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute  ('disabled')
   }

}
 
function handleClick4(target){
   const itemsName = (document.getElementById('card-4').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price4').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute  ('disabled')
   }

}
function handleClick5(target){
   const itemsName = (document.getElementById('card-5').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price5').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute  ('disabled')
   }

}
function handleClick6(target){
   const itemsName = (document.getElementById('card-6').innerText)

   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price6').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total
   if(total>0){
      document.getElementById('Purchase').removeAttribute('disabled')
   }
   else{
      document.getElementById('Purchase').setAttribute('disabled')
   }
   

}

 function aplly(){
   const inputValue = document.getElementById('coupon')
   const inputFeild = inputValue.value
   if(inputFeild === 'SELL200')
   { 
        const discountPriceString = document.getElementById('dis')
        const discountPrice = parseFloat(discountPriceString) 
        const discount = (total*.20)
       document.getElementById('dis').innerText=discount
       
       const totalPrice = total-discount
       document.getElementById('grand').innerText = totalPrice

   }
 }
// function handleClickPursce(){
//    if(total>0){
//       document.getElementById('Purchase').removeAttribute=('disabled')
//    }
//    else{
//       document.getElementById('Purchase').setAttribute = 'disabled'
//    }
//    console.log('clcic')
