define(['titleNoty'], function(titleNoty){
    titleNoty.init({
        //message: 'You have unread message'
        effect: 'addition'
    })
    document.getElementById('add').onclick = function() {
        titleNoty.add();
    }
    document.getElementById('minus').onclick = function() {
        titleNoty.minus();
    }
})