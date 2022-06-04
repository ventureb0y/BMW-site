document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
    const dropDownBtn = dropDownWrapper.querySelector('dropbutton');
    const dropDownList = dropDownWrapper.querySelector('.droplist');
    const dropDownItems = dropDownList.querySelectorAll('.dropitem');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown_input-hidden');


    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('droplist-visible');
    });

    dropDownItems.forEach(function(listItem){
        listItem.addEventListener('click', function () {
            dropDownBtn.innerText = this.innerText;
            dropDownList.classList.remove('droplist-visible');
        });
    });

    document.addEventListener('click', function(e) {
        if(e.target !== dropDownBtn)
        dropDownList.classList.remove('droplist-visible'); 
    });

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Tab' || e.key === 'Escape'  )
        dropDownList.classList.remove('droplist-visible');
    });
});





