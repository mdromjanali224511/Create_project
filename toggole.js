// login



function converterId(id){
    const coverteridd=document.getElementById(id).value
    const convertid=parseFloat(coverteridd)
    return convertid;
}

function convertInner(id){
    const ocnverterIner=document.getElementById(id).innerText;
    const convertInner=parseFloat(ocnverterIner)
    return convertInner;
}


// button
// handltotoggle('cashoutform','none')
handltotoggle('addmoneyform','none')
document.getElementById('addmoneybtn').addEventListener('click',function(){
    handltotoggle('addmoneyform','block')
    handltotoggle('cashoutform','none')

})
document.getElementById('cashoutbtn').addEventListener('click',function(){
    handltotoggle('cashoutform','block')
    handltotoggle('addmoneyform','none')
 })

function handltotoggle(id,status){
    document.getElementById(id).style.display=status;
}
// button end

//Addmoney
document.getElementById('addmoneybtnn').addEventListener('click',function(event){
    event.preventDefault()

    const amountinput=converterId('amountinput')
const mainBalance=convertInner('mainBalance')
const pin=converterId('pin')
const acountInput=converterId('acountInput')
let sum=mainBalance+amountinput; 
if(acountInput=== 1990422575){
    if(pin===224511){
document.getElementById('mainBalance').innerText=sum
alert('addmoney success')
document.getElementById('amountinput').value=''

const maincontainer=document.getElementById('maincontainer')
 const div=document.createElement('div')

 div.classList.add('color')
 div.innerHTML=`
 <h1 class="font-bold text-black">addmoney from:</h1>
 ${acountInput} only ${amountinput} ${new Date}
 `

 maincontainer.appendChild(div)



    }else{
        alert('pin is not match')
    }
}else{
    alert('number is incarrect')
}
 }) 
//  addmoney end


// cashout jas
document.getElementById('cashoutbtnn').addEventListener('click',function(event){
event.preventDefault()
const cashoutAgentNumber=converterId('cashoutAgentNumber')
    const cashoutamount=converterId('cashoutamount')
const cashoutpin=converterId('cashoutpin')
const mainBalance=convertInner('mainBalance')
const sum=mainBalance-cashoutamount;
if(cashoutAgentNumber===1990422575){
    if(cashoutpin===224511){
        document.getElementById('mainBalance').innerText=sum
    alert('cashout done')
document.getElementById('cashoutamount').value=''

const maincontainer=document.getElementById('maincontainer')
 const p=document.createElement('p')
 p.innerHTML=`
 <h1 class="font-bold text-balance">Cashout from:</h1> ${cashoutAgentNumber} only ${cashoutamount}  <p>Time: ${new Date}</p>
 `
p.classList.add('color')
maincontainer.appendChild(p)

    }else{
        alert('coreckt pin')
    }

}else{
    alert('plese give carreck number')
}

})
// csshoutend

// logouit 
document.getElementById('Logoutbtn').addEventListener('click',function(event){
    event.preventDefault()
    window.location='index.html'
 })