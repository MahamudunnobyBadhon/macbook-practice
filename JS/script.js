// calculation of total cost
function totalCost(){
    // find the inner text and convert it to integer value
    const bestPrice = parseInt(document.getElementById('best-price').innerText);

    const extraMemoryCost =  parseInt(document.getElementById('extra-memory-cost-btn').innerText);

    const extraStorageCost =  parseInt(document.getElementById('extra-storage-cost-btn').innerText);

    const extraDeliveryCost =  parseInt(document.getElementById('extra-delivery-cost-btn').innerText);

    const totalCost = bestPrice + extraMemoryCost+ extraStorageCost + extraDeliveryCost;
    
    document.getElementById('total-cost').innerText = totalCost;

    document.getElementById('discount-price').innerText = totalCost;

    return totalCost;
 }
// function for set the inner text of extra memory cost 
 function setMemoryInnerText(memorybtnId){    
    let memoryText =  document.getElementById('extra-memory-cost-btn');

    if(memorybtnId == '8gb-memory-btn'){
        memoryText.innerText = 0;
     }

    else if(memorybtnId == '16gb-memory-btn'){
       memoryText.innerText = 180;
    }
 }

 // function for set the inner text of extra storage cost
 function setStorageInnerText(storagebtnId){
    let storageText =  document.getElementById('extra-storage-cost-btn');

    if(storagebtnId == '256gb-ssd-btn'){
        storageText.innerText = 00;
    }
    else if(storagebtnId == '512gb-ssd-btn'){
        storageText.innerText = 100;
    }
    else if(storagebtnId == '1tb-ssd-btn'){
        storageText.innerText = 180;
    }
 }

 // function for set the inner text of delivery cost
 function setdeliveryCostInnerText(deliveryBtnId){
    let deliveryText =  document.getElementById('extra-delivery-cost-btn');

    if(deliveryBtnId == 'free-delivery-btn'){
        deliveryText.innerText = 00;
    }
    else if(deliveryBtnId == 'costly-delivery-btn'){
        deliveryText.innerText = 20;
    }
 }
// add event handler on 8gb memory
document.getElementById('8gb-memory-btn').addEventListener('click', function(){
    setMemoryInnerText('8gb-memory-btn');
    // document.getElementById('extra-memory-cost-btn').innerText = 00;
   totalCost();
})
// add event handler on 16gb memory
document.getElementById('16gb-memory-btn').addEventListener('click', function(){
    setMemoryInnerText('16gb-memory-btn');
    // document.getElementById('extra-memory-cost-btn').innerText = 180;
    totalCost();
 })
 // add event handler on 256gb ssd
 document.getElementById('256gb-ssd-btn').addEventListener('click', function(){
    setStorageInnerText('256gb-ssd-btn');
    // document.getElementById('extra-storage-cost-btn').innerText = 0;
    totalCost();
 })
// add event handler on 512gb ssd
 document.getElementById('512gb-ssd-btn').addEventListener('click', function(){
    setStorageInnerText('512gb-ssd-btn');
    // document.getElementById('extra-storage-cost-btn').innerText = 100;
    totalCost();
 })
// add event handler on 1tb ssd
 document.getElementById('1tb-ssd-btn').addEventListener('click', function(){
    setStorageInnerText('1tb-ssd-btn');
    // document.getElementById('extra-storage-cost-btn').innerText = 180;
    totalCost();
 })
// add event handler on free delivery
 document.getElementById('free-delivery-btn').addEventListener('click', function(){
    setdeliveryCostInnerText('free-delivery-btn');
    // document.getElementById('extra-delivery-cost-btn').innerText = 00;
    totalCost();
 })
// add event handler on fast delivery
 document.getElementById('costly-delivery-btn').addEventListener('click', function(){
    setdeliveryCostInnerText('costly-delivery-btn');
    // document.getElementById('extra-delivery-cost-btn').innerText = 20;
    totalCost();
})
//event handler on using promo code
document.getElementById('promo-code-apply-btn').addEventListener('click', function(){
    var promoInputText = document.getElementById('promo-code-text').value;
    const total = totalCost();
    // match the promo code to get discount
    if(promoInputText == 'stevekaku'){
        // calculate the 20% discounted price
        let totalAfterDiscount = (total*4)/5;
        document.getElementById('discount-price').innerText = totalAfterDiscount;
    }
    // show error on wrong promo code
    else{
        alert('wrong promo code')
    }
    // after using promo the input text is removed
    document.getElementById('promo-code-text').value = '';
})



 