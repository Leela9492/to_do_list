let count=1;
function addtask(){
    let val=document.getElementById('inp').value;
    let d=document.createElement('div');
    d.setAttribute('id','task'+count);
    d.setAttribute('class','adding-content');
    let radio=document.createElement('input');
    radio.setAttribute('type','radio');
    radio.setAttribute('id','radio');
    radio.addEventListener('click',function(){
        onclickfun(d.id);
    });
    d.append(radio);
    d.append(val);
    let b=document.getElementsByTagName('body');
    b[0].appendChild(d);
    count++;
}
function onclickfun(val){
    let div=document.getElementById(val);
    if(div){
        div.remove();
    }
}
