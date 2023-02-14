document.getElementById('btn-bold').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
     textField.classList.toggle('bold');
     this.classList.toggle('active');
})

document.getElementById('btn-italic').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.classList.toggle('italic')
    this.classList.toggle('active');
})

document.getElementById('btn-underline').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.classList.toggle('underline')
    this.classList.toggle('active');
})
document.getElementById('btn-left').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.style.textAlign='left';
    this.classList.toggle('active');
})
document.getElementById('btn-center').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.style.textAlign='center';
    this.classList.toggle('active');
})
document.getElementById('btn-right').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.style.textAlign='right';
    this.classList.toggle('active');
})
document.getElementById('btn-align').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.style.overflowWrap='breakWord';
    this.classList.toggle('active');
})


document.getElementById('color-input').addEventListener('input',function(){
    const color=this.value;
    const textField=document.getElementById('text-field')
    textField.style.color=color;
})

document.getElementById('btn-casing').addEventListener('click',function(){
    const textField=document.getElementById('text-field');
    textField.classList.toggle('font-casing');
    this.classList.toggle('active');
})
const fontSize=document.getElementById('fontSizeDD');
fontSize.onchange=function(){
    const textBox=document.getElementById('text-field');
    textBox.style.fontSize=this.value+'px';
}
