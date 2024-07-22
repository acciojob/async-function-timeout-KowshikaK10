//your JS code here. If required.
const textInput=document.getElementById('text');
const delayInput=document.getElementById('delay');
const btn=document.getElementById('btn');
const output=document.getElementById('output');

btn.addEventListener('click',async(e)=>{
	e.preventDefault();
	await delayFun(parseInt(delayInput.value));
    output.textContent = textInput.value;
	
	
	async function delayFun(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
   }
});
