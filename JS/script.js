function totalCost(){
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost =  parseInt(document.getElementById('extra-memory-cost-btn').innerText);

    const extraStorageCost =  parseInt(document.getElementById('extra-storage-cost-btn').innerText);

    const extraDeliveryCost =  parseInt(document.getElementById('extra-delivery-cost-btn').innerText);

    const totalCost = bestPrice + extraMemoryCost+ extraStorageCost + extraDeliveryCost;
    
    document.getElementById('total-cost').innerText = totalCost;

    document.getElementById('discount-price').innerText = totalCost;

    return totalCost;
 }


document.getElementById('8gb-memory-btn').addEventListener('click', function(){
   document.getElementById('extra-memory-cost-btn').innerText = 00;
   totalCost();
})

document.getElementById('16gb-memory-btn').addEventListener('click', function(){
    document.getElementById('extra-memory-cost-btn').innerText = 180;
    totalCost();
 })
 
 document.getElementById('256gb-ssd-btn').addEventListener('click', function(){
    document.getElementById('extra-storage-cost-btn').innerText = 0;
    totalCost();
 })

 document.getElementById('512gb-ssd-btn').addEventListener('click', function(){
    document.getElementById('extra-storage-cost-btn').innerText = 100;
    totalCost();
 })

 document.getElementById('1tb-ssd-btn').addEventListener('click', function(){
    document.getElementById('extra-storage-cost-btn').innerText = 180;
    totalCost();
 })

 document.getElementById('free-delivery-btn').addEventListener('click', function(){
    document.getElementById('extra-delivery-cost-btn').innerText = 00;
    totalCost();
 })

 document.getElementById('costly-delivery-btn').addEventListener('click', function(){
    document.getElementById('extra-delivery-cost-btn').innerText = 20;
    totalCost();
})

document.getElementById('promo-code-apply-btn').addEventListener('click', function(){
    const promoInputText = document.getElementById('promo-code-text').value;
    console.log(promoInputText);
    const t = totalCost();
    if(promoInputText == 'stevekaku'){
        console.log('success');
        console.log(t);
        let total = (t*4)/5;
        console.log(total);
        document.getElementById('discount-price').innerText = total;
    }
    else{
        alert('wrong promo code')
    }

    document.getElementById('promo-code-text').value = '';
        
})



 